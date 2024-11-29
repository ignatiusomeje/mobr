import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { returnError } from "@/store/ErrorHandler";
import {
  customerResponse,
  initialStateCustomers,
} from "../_types/CustomerTypes";
import { getAllCustomers, getOneCustomer } from "./customerAPI";

const initialState: initialStateCustomers = {
  customers: [],
  getAllCustomersLoading: false,
  getOneCustomerLoading: false,
  showPopUp: false,
  customer: {
    created: new Date().toISOString(),
    email: "",
    fullName: "",
    id: 0,
    isVerified: false,
    countryCode: "",
    dateValidated: new Date().toISOString(),
    dob: new Date().toISOString(),
    isValidated: false,
    phoneNumber: 0,
    streetAddress: "",
    title: "",
    role: "",
    backDriverLisenceImagePublicId: "",
    backDriverLisenceImageUrl: "",
    frontDriverLisenceImageUrl: "",
    frontDriverLisencePublicId: "",
    profileImagePublicId: "",
    profileImageUrl: "",
  },
  getAllCustomersError: "",
  getOneCustomerError: "",
};
const CustomerSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    clearCustomerError: (state) => {
      state.getAllCustomersError = "";
      state.getOneCustomerError = "";
    },
    showOneCustomer: (state, action: PayloadAction<number>) => {
      const user = state.customers.find(
        (customer) => customer.id === action.payload
      );
      if (user) {
        state.customer = user;
        state.showPopUp = true;
      }
    },
    closeShowOneCustomer: (state) => {
      state.customer = {
        created: new Date().toISOString(),
        email: "",
        fullName: "",
        id: 0,
        isVerified: false,
        countryCode: "",
        dateValidated: new Date().toISOString(),
        dob: new Date().toISOString(),
        isValidated: false,
        phoneNumber: 0,
        streetAddress: "",
        title: "",
        role: "",
        backDriverLisenceImagePublicId: "",
        backDriverLisenceImageUrl: "",
        frontDriverLisenceImageUrl: "",
        frontDriverLisencePublicId: "",
        profileImagePublicId: "",
        profileImageUrl: "",
      };
      state.showPopUp = false;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(getAllCustomers.matchPending, (state) => {
      state.getAllCustomersLoading = true;
    });

    builder.addMatcher(
      getAllCustomers.matchFulfilled,
      (state, action: PayloadAction<customerResponse[]>) => {
        state.getAllCustomersLoading = false;
        state.customers = action.payload;
      }
    );

    builder.addMatcher(
      getAllCustomers.matchRejected,
      (
        state,
        action: PayloadAction<
          (FetchBaseQueryError & { data?: unknown }) | undefined
        >
      ) => {
        state.getAllCustomersLoading = false;
        state.getAllCustomersError = returnError(action);
      }
    );

    builder.addMatcher(getOneCustomer.matchPending, (state) => {
      state.getOneCustomerLoading = true;
    });

    builder.addMatcher(
      getOneCustomer.matchFulfilled,
      (state, action: PayloadAction<customerResponse>) => {
        state.getOneCustomerLoading = false;
        state.customer = action.payload;
      }
    );

    builder.addMatcher(
      getOneCustomer.matchRejected,
      (
        state,
        action: PayloadAction<
          (FetchBaseQueryError & { data?: unknown }) | undefined
        >
      ) => {
        state.getOneCustomerLoading = false;
        state.getOneCustomerError = returnError(action);
      }
    );
  },
});

export const { clearCustomerError, closeShowOneCustomer, showOneCustomer } =
  CustomerSlice.actions;

export default CustomerSlice.reducer;
