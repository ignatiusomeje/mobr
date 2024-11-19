import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { returnError } from "@/store/ErrorHandler";
import {
  createACarFeature,
  createCarImages,
  deleteACarImage,
  getACarImages,
  getAllCarFeature,
  getAllCars,
  updateCreateCarImages,
} from "./CarAPI";
import {
  carResponseType,
  createACarFeatureResponseTypes,
  createCarResponseImageType,
  EnergyType,
  getACarImagesResponseTypes,
  getAllCarFeatureResonseTypes,
  initialStateCar,
  TransmissionType,
} from "../_types/CarType";

const initialState: initialStateCar = {
  getAllCarsLoading: false,
  getAllCarsError: "",
  getAllCarFeatureLoading: false,
  getAllCarFeatureError: "",
  deleteACarLoading: false,
  deleteACarError: "",
  createACarImageLoading: false,
  createACarImageError: "",
  createACarFeatureLoading: false,
  createACarFeatureError: "",
  getACarImageError: "",
  vehicle: {
    vehicleId: "",
    vehicleName: "",
    vehicleLocation: "",
    vehicleCondition: "",
    vehicleYear: 0,
    transmissionType: TransmissionType.Manuel,
    energyType: EnergyType.Petrol,
    vehicleDescription: "",
    vehicleRentalPrice: 0,
    vehicleAvaliableDate: undefined,
    vehicleFeatures: [],
    vehicleImages: [],
  },
  cars: [],
  showPopUp: false,
  carFeatures: [],
  featureTitle:"",
  createdFeatures:[]
};
const CarSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    clearCarError: (state) => {
      state.createACarImageError = "";
      state.getACarImageError = "";
      state.getAllCarsError = "";
      state.deleteACarError = "";
      state.createACarFeatureError = "";
      state.getAllCarFeatureError = "";
    },
    setFeatureTitle:(state, action:PayloadAction<string>)=>{
      state.featureTitle = action.payload
    },
    removeImage: (state, action: PayloadAction<number>) => {
      state.vehicle.vehicleImages = state.vehicle.vehicleImages.filter(
        (carImage) => carImage.vehicleImageId !== action.payload
      );
    },
    // clearLoading:(state)=>{
    //   state.vehicle = {
    //     vehicleId: "",
    //     vehicleName: "",
    //     vehicleLocation: "",
    //     vehicleCondition: "",
    //     vehicleYear: 0,
    //     transmissionType: TransmissionType.Manuel,
    //     energyType: EnergyType.Petrol,
    //     vehicleDescription: "",
    //     vehicleRentalPrice: 0,
    //     vehicleAvaliableDate: undefined,
    //     vehicleFeatures: [],
    //     vehicleImages: [],
    //   };
    //   state.createACarImageLoading= false;
    // }
  },
  extraReducers: (builder) => {
    builder.addMatcher(getAllCars.matchPending, (state) => {
      state.getAllCarsLoading = true;
    });

    builder.addMatcher(
      getAllCars.matchFulfilled,
      (state, action: PayloadAction<carResponseType[]>) => {
        state.getAllCarsLoading = false;
        state.cars = action.payload;
      }
    );

    builder.addMatcher(
      getAllCars.matchRejected,
      (
        state,
        action: PayloadAction<
          (FetchBaseQueryError & { data?: unknown }) | undefined
        >
      ) => {
        state.getAllCarsLoading = false;
        state.getAllCarsError = returnError(action);
      }
    );
    /* create an image for a car first time section */
    builder.addMatcher(createCarImages.matchPending, (state) => {
      state.createACarImageLoading = true;
    });

    builder.addMatcher(
      createCarImages.matchFulfilled,
      (state, action: PayloadAction<createCarResponseImageType>) => {
        state.vehicle.vehicleId = action.payload.id;
      }
    );

    builder.addMatcher(
      createCarImages.matchRejected,
      (
        state,
        action: PayloadAction<
          (FetchBaseQueryError & { data?: unknown }) | undefined
        >
      ) => {
        state.createACarImageLoading = false;
        state.createACarImageError = returnError(action);
      }
    );

    /* delete an image for a car section */
    builder.addMatcher(deleteACarImage.matchPending, (state) => {
      state.deleteACarLoading = true;
    });

    builder.addMatcher(deleteACarImage.matchFulfilled, (state) => {
      state.deleteACarLoading = false;
    });

    builder.addMatcher(
      deleteACarImage.matchRejected,
      (
        state,
        action: PayloadAction<
          (FetchBaseQueryError & { data?: unknown }) | undefined
        >
      ) => {
        state.deleteACarLoading = false;
        state.deleteACarError = returnError(action);
      }
    );

    /* update create an image for a car section */
    builder.addMatcher(updateCreateCarImages.matchPending, (state) => {
      state.createACarImageLoading = true;
    });

    // builder.addMatcher(
    //   updateCreateCarImages.matchFulfilled,
    //   (state, action: PayloadAction<createCarResponseImageType>) => {
    //     state.createACarImageLoading = false;
    //     state.vehicle.vehicleId = action.payload.id;
    //   }
    // );

    builder.addMatcher(
      updateCreateCarImages.matchRejected,
      (
        state,
        action: PayloadAction<
          (FetchBaseQueryError & { data?: unknown }) | undefined
        >
      ) => {
        state.createACarImageLoading = false;
        state.createACarImageError = returnError(action);
      }
    );

    /* get all images for a car section */
    builder.addMatcher(getACarImages.matchPending, (state) => {
      state.createACarImageLoading = true;
    });

    builder.addMatcher(
      getACarImages.matchFulfilled,
      (state, action: PayloadAction<getACarImagesResponseTypes>) => {
        state.createACarImageLoading = false;
        state.vehicle.vehicleImages = action.payload;
      }
    );

    builder.addMatcher(
      getACarImages.matchRejected,
      (
        state,
        action: PayloadAction<
          (FetchBaseQueryError & { data?: unknown }) | undefined
        >
      ) => {
        state.createACarImageLoading = false;
        state.getACarImageError = returnError(action);
      }
    );

    /* get all car features for a car section */
    builder.addMatcher(getAllCarFeature.matchPending, (state) => {
      state.getAllCarFeatureLoading = true;
    });

    builder.addMatcher(
      getAllCarFeature.matchFulfilled,
      (state, action: PayloadAction<getAllCarFeatureResonseTypes>) => {
        state.getAllCarFeatureLoading = false;
        state.carFeatures = action.payload;
      }
    );

    builder.addMatcher(
      getAllCarFeature.matchRejected,
      (
        state,
        action: PayloadAction<
          (FetchBaseQueryError & { data?: unknown }) | undefined
        >
      ) => {
        state.getAllCarFeatureLoading = false;
        state.getAllCarFeatureError = returnError(action);
      }
    );

    /* create a car feature for a car section */
    builder.addMatcher(createACarFeature.matchPending, (state) => {
      state.createACarFeatureLoading = true;
    });

    builder.addMatcher(
      createACarFeature.matchFulfilled,
      (state, action: PayloadAction<createACarFeatureResponseTypes>) => {
        state.createACarFeatureLoading = false;
        state.createdFeatures = [...state.createdFeatures, action.payload];
      }
    );

    builder.addMatcher(
      createACarFeature.matchRejected,
      (
        state,
        action: PayloadAction<
          (FetchBaseQueryError & { data?: unknown }) | undefined
        >
      ) => {
        state.createACarFeatureLoading = false;
        state.createACarFeatureError = returnError(action);
      }
    );
  },
});

export const { clearCarError, removeImage, setFeatureTitle } = CarSlice.actions;

export default CarSlice.reducer;
