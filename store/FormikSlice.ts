import {
  EnergyType,
  getByIdResponse,
  initialStateFormik,
  TransmissionType,
} from "@/app/dashboard/car-listing/_types/CarType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Nullable } from "primereact/ts-helpers";

const initialState: initialStateFormik = {
  vehicle: {
    vehicleId: "",
    vehicleName: "",
    vehicleLocation: "",
    vehicleCondition: "",
    vehicleYear: 0,
    transmissionType: TransmissionType.Manual,
    energyType: EnergyType.Petrol,
    vehicleDescription: "",
    vehicleRentalPrice: 0,
    vehicleAvaliableDate: new Date().toISOString(),
    // vehicleFeatures: [],
    vehicleImages: [],
  },
};

const FormikSlice = createSlice({
  name: "formikValues",
  initialState,
  reducers: {
    setFormikValue: (
      state,
      action: PayloadAction<
        Record<
          string,
          | string
          | number
          | null
          | TransmissionType
          | EnergyType
          | Nullable<Date>
        >
      >
    ) => {
      state.vehicle = {
        ...state.vehicle,
        ...action.payload,
      };
    },
    clearFormikValue: (state) => {
      state.vehicle = initialState.vehicle;
    },
    loadFormikValue: (state, action: PayloadAction<getByIdResponse>) => {
      const {
        energyType,
        transmissionType,
        vehicleAvaliableDate,
        vehicleCondition,
        vehicleDescription,
        vehicleId,
        vehicleImages,
        vehicleLocation,
        vehicleName,
        vehicleRentalPrice,
        vehicleYear,
      } = action.payload;
      state.vehicle = {
        energyType,
        transmissionType,
        vehicleCondition,
        vehicleDescription,
        vehicleId,
        vehicleImages,
        vehicleLocation,
        vehicleName,
        vehicleRentalPrice,
        vehicleYear,
        vehicleAvaliableDate: new Date(vehicleAvaliableDate).toISOString(),
      };
      // action.payload
    },
  },
});

export const { setFormikValue, clearFormikValue,loadFormikValue } = FormikSlice.actions;

export default FormikSlice.reducer;
