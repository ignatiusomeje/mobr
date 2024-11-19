import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "./store";
import { loginResponseType } from "@/app/(Login)/_types/loginTypes";
import { clearToken, setToken } from "@/app/(Login)/_Data/LoginSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL_Api,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    // this gets the token from the state
    const token = (getState() as RootState).login.admin.jwtToken;

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

const accountBaseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL_Accounts,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    // this gets the token from the state
    const token = (getState() as RootState).login.admin.jwtToken;

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

const refreshToken: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOption) => {
  let result = await baseQuery(args, api, extraOption);

  if (result.error && result.error.status === 401) {
    const token = (api.getState() as RootState).login?.admin.refreshToken;
    // Try to get a new token
    const refreshResult = await accountBaseQuery(
      {
        url: `/refresh-token`,
        method: "Post",
        body: {
          token: token,
          isMobile: true,
        },
        // credentials: "include",
      },
      api,
      extraOption
    );

    if (refreshResult.error && refreshResult.error.status === 500) {
      return refreshResult;
    }

    if (refreshResult.data) {
      // Assuming refreshResult.data contains the new auth token
      const newAuthToken = refreshResult.data as loginResponseType;
      api.dispatch(setToken(newAuthToken));
      // api.dispatch(set)
      // Retry the original query with the new token
      result = await baseQuery(args, api, extraOption);
    } else {
      api.dispatch(clearToken());
    }
  }

  return result;
};

export const CarAPI = createApi({
  reducerPath: `carApi`,
  baseQuery: refreshToken,
  refetchOnMountOrArgChange: true,
  refetchOnReconnect: true,
  tagTypes: ["cars", "benefits", "carImages", "carFeature"],
  endpoints: () => ({}),
});
