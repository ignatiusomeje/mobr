import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { returnError } from "@/store/ErrorHandler";
import {
  customerResponse,
  initialStateCustomers,
} from "../_types/CustomerTypes";
import {
  blockOneCustomer,
  getAllCustomers,
  getOneCustomer,
  validateOneCustomer,
} from "./customerAPI";

const initialState: initialStateCustomers = {
  customers: [],
  getAllCustomersLoading: false,
  getOneCustomerLoading: false,
  validateOneCustomerLoading: false,
  blockOneCustomerLoading: false,
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
    isActive: true,
  },
  getAllCustomersError: "",
  getOneCustomerError: "",
  validateOneCustomerError: "",
  blockOneCustomerError: "",
};
const CustomerSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    clearCustomerError: (state) => {
      state.getAllCustomersError = initialState.getAllCustomersError;
      state.getOneCustomerError = initialState.getOneCustomerError;
      state.validateOneCustomerError = initialState.validateOneCustomerError;
      state.blockOneCustomerError = initialState.blockOneCustomerError;
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
      state.customer = initialState.customer;
      state.showPopUp = false;
    },
  },
  extraReducers: (builder) => {
    /* clear everything on logout */
    builder.addCase("logout", () => {
      return initialState;
    });

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
        state.customers = initialState.customers;
        state.getAllCustomersError = returnError(action);
      }
    );

    /* get one customer */
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
        state.customer = initialState.customer;
        state.getOneCustomerError = returnError(action);
      }
    );

    /* validate one customer */
    builder.addMatcher(validateOneCustomer.matchPending, (state) => {
      state.validateOneCustomerLoading = true;
    });

    builder.addMatcher(validateOneCustomer.matchFulfilled, (state) => {
      state.validateOneCustomerLoading = false;
      // state.customer = action.payload;
    });

    builder.addMatcher(
      validateOneCustomer.matchRejected,
      (
        state,
        action: PayloadAction<
          (FetchBaseQueryError & { data?: unknown }) | undefined
        >
      ) => {
        state.validateOneCustomerLoading = false;
        state.validateOneCustomerError = returnError(action);
      }
    );

    /* block one customer */
    builder.addMatcher(blockOneCustomer.matchPending, (state) => {
      state.blockOneCustomerLoading = true;
    });

    builder.addMatcher(blockOneCustomer.matchFulfilled, (state) => {
      state.blockOneCustomerLoading = false;
      // state.customer = action.payload;
    });

    builder.addMatcher(
      blockOneCustomer.matchRejected,
      (
        state,
        action: PayloadAction<
          (FetchBaseQueryError & { data?: unknown }) | undefined
        >
      ) => {
        state.blockOneCustomerLoading = false;
        state.blockOneCustomerError = returnError(action);
      }
    );
  },
});

export const { clearCustomerError, closeShowOneCustomer, showOneCustomer } =
  CustomerSlice.actions;

export default CustomerSlice.reducer;
