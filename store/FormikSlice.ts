import {
  EnergyType,
  TransmissionType,
} from "@/app/dashboard/car-listing/_types/CarType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Nullable } from "primereact/ts-helpers";

const initialState = {
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
    vehicleAvaliableDate: new Date(0).toISOString(),
    vehicleFeatures: [],
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
    clearFormikValue:(state)=>{
      state.vehicle = initialState.vehicle
    }
  },
});

export const { setFormikValue,clearFormikValue } = FormikSlice.actions;

export default FormikSlice.reducer;
