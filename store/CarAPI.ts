import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const CarAPI = createApi({
  reducerPath: `carApi`,
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL_Api,
  }),
  refetchOnMountOrArgChange: true,
  refetchOnReconnect: true,
  tagTypes: ["cars"],
  endpoints: () => ({}),
});
