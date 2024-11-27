import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
  persistReducer,
  persistStore,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import { AccountAPI } from "./AccountAPI";
import { CarAPI } from "./CarAPI";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";
import LoginAdminSlice from "./../app/(Login)/_Data/LoginSlice";
import BenefitSlice from "../app/dashboard/settings/_Data/BenefitSlice";
import { AccountProtectedAPI } from "./AccountProtected";
import CustomerSlice from "@/app/dashboard/customers/_Data/customerSlice";
import CarSlice from "@/app/dashboard/car-listing/_Data/CarSlice";
import FormikSlice from "@/store/FormikSlice";

const persistConfig = {
  key: "MOBR",
  storage,
  autoMergeLevel2,
  blacklist: [
    AccountAPI.reducerPath,
    CarAPI.reducerPath,
    AccountProtectedAPI.reducerPath,
    "Formik"
  ],
};

const rootReducer = combineReducers({
  login: LoginAdminSlice,
  benefits: BenefitSlice,
  customers: CustomerSlice,
  cars: CarSlice,
  Formik:FormikSlice,
  [AccountAPI.reducerPath]: AccountAPI.reducer,
  [CarAPI.reducerPath]: CarAPI.reducer,
  [AccountProtectedAPI.reducerPath]: AccountProtectedAPI.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      AccountAPI.middleware,
      CarAPI.middleware,
      AccountProtectedAPI.middleware
    ),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
console.log(persistor, "persist");

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
