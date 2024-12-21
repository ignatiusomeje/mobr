import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { returnError } from "@/store/ErrorHandler";
import {
  createACarFeature,
  createCarImages,
  deleteACar,
  deleteACarFeature,
  deleteACarImage,
  getACarById,
  getACarImages,
  getAllCarFeature,
  getAllCarFeatureForDisplay,
  getAllCars,
  getAllFeaturesOfAcar,
  updateACarFeature,
  updateCreateCarImages,
} from "./CarAPI";
import {
  carBookingState,
  carResponseType,
  createACarFeatureResponseTypes,
  createCarResponseImageType,
  EnergyType,
  getACarImagesResponseTypes,
  getAllCarFeatureResonseTypes,
  getByIdResponse,
  initialStateCar,
  savedState,
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
  updateCarFeatureLoading: false,
  updateCarFeatureError: "",
  getACarImageError: "",
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
    vehicleAvaliableDate: undefined,
    vehicleFeatures: [],
    vehicleImages: [],
  },
  cars: [],
  showPopUp: false,
  carFeatures: [],
  featureTitle: "",
  fetchedFeatures: [],
  fetched: false,
  carFeaturesForDisplay: [],
  carFeaturesForDisplayLoading: false,
  carFeaturesForDisplayError: "",
  deleteACarObjectLoading: false,
  deleteACarObjectError: "",
  moreInfoPop: false,
  carFetchedById: {
    averageVehicleRating: 0,
    carBookingState: carBookingState.Available,
    energyType: EnergyType.Petrol,
    reviewCount: 0,
    savedState: savedState.Active,
    transmissionType: TransmissionType.Auto,
    vehicleAvaliableDate: new Date().toISOString(),
    vehicleCondition: "",
    vehicleDescription: "",
    vehicleId: "",
    vehicleImages: [],
    vehicleLocation: "",
    vehicleName: "",
    vehicleRentalPrice: 0,
    vehicleYear: 0,
  },
  getACarByIdLoading: false,
  getACarByIdError: "",
  deleteACarFeatureLoading: false,
  deleteACarFeatureError: "",
  getAllFeaturesOfAcarLoading: false,
  getAllFeaturesOfAcarError: "",
};
const CarSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setMoreInfoPop: (state) => {
      state.moreInfoPop = true;
    },

    clearCarError: (state) => {
      state.createACarImageError = "";
      state.getACarImageError = "";
      state.getAllCarsError = "";
      state.deleteACarError = "";
      state.createACarFeatureError = "";
      state.getAllCarFeatureError = "";
      state.carFeaturesForDisplayError = "";
      state.createACarFeatureError = "";
      state.updateCarFeatureError = "";
      state.deleteACarObjectError = "";
      state.getACarByIdError = "";
      state.getAllFeaturesOfAcarError = "";
    },

    setFetched: (state) => {
      state.fetched = true;
    },

    clearMoreInfoPop: (state) => {
      state.moreInfoPop = false;
    },

    updateCarFeature: (
      state,
      action: PayloadAction<createACarFeatureResponseTypes>
    ) => {
      const Oldfeature = state.carFeatures.find(
        (feat) => feat.featureTitle === action.payload.featureTitle
      );
      if (Oldfeature) Object.assign(Oldfeature, action.payload);
    },

    addCarFeature: (
      state,
      action: PayloadAction<createACarFeatureResponseTypes>
    ) => {
      state.carFeaturesForDisplay = state.carFeaturesForDisplay.filter(
        (feat) => feat.featureTitle !== action.payload.featureTitle
      );
      state.carFeatures = [...state.carFeatures, action.payload];
      // const index = state.carFeaturesForDisplay.findIndex((feat) =>
      //   feat.features.find((car) => car.featureId === action.payload.featureId)
      // );
      // if (index !== -1) {
      //   state.carFeaturesForDisplay[index] = {
      //     ...state.carFeaturesForDisplay[index],
      //     features: state.carFeaturesForDisplay[index].features.filter(
      //       (car) => car.featureId !== action.payload.featureId
      //     ),
      //   };
      // }
    },

    removeImage: (state, action: PayloadAction<number>) => {
      state.vehicle.vehicleImages = state.vehicle.vehicleImages.filter(
        (carImage) => carImage.vehicleImageId !== action.payload
      );
    },

    clearLoading: () => initialState,
  },
  extraReducers: (builder) => {
    /* clear everything on logout */
    builder.addCase("logout", () => {
      return initialState;
    });

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
        state.cars = initialState.cars;
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
        state.moreInfoPop = true;
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

    builder.addMatcher(updateCreateCarImages.matchFulfilled, (state) => {
      state.createACarImageLoading = false;
      state.moreInfoPop = true;
    });

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
        state.vehicle.vehicleImages = initialState.vehicle.vehicleImages;
        state.getACarImageError = returnError(action);
      }
    );

    /* get all car features for a car section */
    builder.addMatcher(getAllCarFeature.matchPending, (state) => {
      state.getAllCarFeatureLoading = true;
    });

    builder.addMatcher(
      getAllCarFeature.matchFulfilled,
      (state, action: PayloadAction<getAllCarFeatureResonseTypes[]>) => {
        state.getAllCarFeatureLoading = false;
        state.fetchedFeatures = action.payload;
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
        state.fetchedFeatures = initialState.fetchedFeatures;
        state.getAllCarFeatureError = returnError(action);
      }
    );

    /* get a car's saved features */
    builder.addMatcher(getAllFeaturesOfAcar.matchPending, (state) => {
      state.getAllFeaturesOfAcarLoading = true;
    });

    builder.addMatcher(
      getAllFeaturesOfAcar.matchFulfilled,
      (state, action: PayloadAction<getAllCarFeatureResonseTypes[]>) => {
        state.getAllFeaturesOfAcarLoading = false;
        const fetchedFeatures = action.payload
          .map((feature) => feature.features)
          .flat();
        state.carFeatures = fetchedFeatures;
        state.carFeaturesForDisplay = state.carFeaturesForDisplay.filter(
          (item1) =>
            !fetchedFeatures.some(
              (item2) => item1.featureTitle === item2.featureTitle
            )
        );
      }
    );

    builder.addMatcher(
      getAllFeaturesOfAcar.matchRejected,
      (
        state,
        action: PayloadAction<
          (FetchBaseQueryError & { data?: unknown }) | undefined
        >
      ) => {
        state.getAllFeaturesOfAcarLoading = false;
        state.carFeatures = initialState.carFeatures;
        state.getAllFeaturesOfAcarError = returnError(action);
      }
    );

    /* get all car features for display section */
    builder.addMatcher(getAllCarFeatureForDisplay.matchPending, (state) => {
      state.carFeaturesForDisplayLoading = true;
    });

    builder.addMatcher(
      getAllCarFeatureForDisplay.matchFulfilled,
      (state, action: PayloadAction<getAllCarFeatureResonseTypes[]>) => {
        state.carFeaturesForDisplayLoading = false;
        state.carFeaturesForDisplay = action.payload.filter(
          (item1) =>
            !state.carFeatures.some(
              (item2) => item1.featureTitle === item2.featureTitle
            )
        );
      }
    );

    builder.addMatcher(
      getAllCarFeatureForDisplay.matchRejected,
      (
        state,
        action: PayloadAction<
          (FetchBaseQueryError & { data?: unknown }) | undefined
        >
      ) => {
        state.carFeaturesForDisplayLoading = false;
        state.carFeaturesForDisplay = initialState.carFeaturesForDisplay;
        state.carFeaturesForDisplayError = returnError(action);
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
        state.carFeatures =
          state.carFeatures.length > 0
            ? [...state.carFeatures, action.payload]
            : [action.payload];
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
    /* Update a car feature */
    builder.addMatcher(updateACarFeature.matchPending, (state) => {
      state.updateCarFeatureLoading = true;
    });

    builder.addMatcher(
      updateACarFeature.matchFulfilled,
      (state, action: PayloadAction<createACarFeatureResponseTypes>) => {
        state.updateCarFeatureLoading = false;
        const updateFeature = state.carFeatures.find(
          (feature) => feature.featureTitle === action.payload.featureTitle
        );
        if (updateFeature) Object.assign(updateFeature, action.payload);
      }
    );

    builder.addMatcher(
      updateACarFeature.matchRejected,
      (
        state,
        action: PayloadAction<
          (FetchBaseQueryError & { data?: unknown }) | undefined
        >
      ) => {
        state.updateCarFeatureLoading = false;
        state.updateCarFeatureError = returnError(action);
      }
    );

    /* delete a car */
    builder.addMatcher(deleteACar.matchPending, (state) => {
      state.deleteACarObjectLoading = true;
    });

    builder.addMatcher(deleteACar.matchFulfilled, (state) => {
      state.deleteACarObjectLoading = false;
    });

    builder.addMatcher(
      deleteACar.matchRejected,
      (
        state,
        action: PayloadAction<
          (FetchBaseQueryError & { data?: unknown }) | undefined
        >
      ) => {
        state.deleteACarObjectLoading = false;
        state.deleteACarObjectError = returnError(action);
      }
    );

    /* get a car by Id */
    builder.addMatcher(getACarById.matchPending, (state) => {
      state.getACarByIdLoading = true;
    });

    builder.addMatcher(
      getACarById.matchFulfilled,
      (state, action: PayloadAction<getByIdResponse>) => {
        state.getACarByIdLoading = false;
        state.carFetchedById = {
          ...action.payload,
          vehicleAvaliableDate: new Date(
            action.payload.vehicleAvaliableDate
          ).toISOString(),
        };
      }
    );

    builder.addMatcher(
      getACarById.matchRejected,
      (
        state,
        action: PayloadAction<
          (FetchBaseQueryError & { data?: unknown }) | undefined
        >
      ) => {
        state.getACarByIdLoading = false;
        state.carFetchedById = initialState.carFetchedById;
        state.getACarByIdError = returnError(action);
      }
    );

    /* delete a car feature by Id */
    builder.addMatcher(deleteACarFeature.matchPending, (state) => {
      state.deleteACarFeatureLoading = true;
    });

    builder.addMatcher(deleteACarFeature.matchFulfilled, (state) => {
      state.deleteACarFeatureLoading = false;
    });

    builder.addMatcher(
      deleteACarFeature.matchRejected,
      (
        state,
        action: PayloadAction<
          (FetchBaseQueryError & { data?: unknown }) | undefined
        >
      ) => {
        state.deleteACarFeatureLoading = false;
        state.deleteACarFeatureError = returnError(action);
      }
    );
  },
});

export const {
  clearCarError,
  removeImage,
  updateCarFeature,
  clearLoading,
  setFetched,
  clearMoreInfoPop,
  addCarFeature,
  setMoreInfoPop,
} = CarSlice.actions;

export default CarSlice.reducer;
