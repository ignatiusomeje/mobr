import { FormikProps } from "formik";

export type initialStateCar = {
  getAllCarsLoading: boolean;
  getAllCarsError: string;
  vehicle: updateCarInputType & { vehicleImages: vehicleImagesType[] };
  cars: carResponseType[] | [];
  createACarImageLoading: boolean;
  createACarImageError: string;
  createACarFeatureLoading: boolean;
  createACarFeatureError: string;
  getACarImageError: string;
  showPopUp: boolean;
  deleteACarLoading: boolean;
  deleteACarError: string;
  getAllCarFeatureError: string;
  getAllCarFeatureLoading: boolean;
  carFeatures: createACarFeatureResponseTypes[];
  featureTitle: string;
  fetchedFeatures: getAllCarFeatureResonseTypes[];
  updateCarFeatureLoading: boolean;
  updateCarFeatureError: string;
  fetched: boolean;
  carFeaturesForDisplay: getAllCarFeatureResonseTypes[];
  carFeaturesForDisplayLoading: boolean;
  carFeaturesForDisplayError: string;
  moreInfoPop: boolean;
  deleteACarObjectError: string;
  deleteACarObjectLoading: boolean;
  carFetchedById: getByIdFormikFormat;
  getACarByIdLoading: boolean;
  getACarByIdError: string;
  deleteACarFeatureLoading: boolean;
  deleteACarFeatureError: string;
  getAllFeaturesOfAcarLoading: boolean;
  getAllFeaturesOfAcarError: string;
};

export type updateCarInputType = {
  vehicleId: string;
  vehicleName: string;
  vehicleLocation: string;
  vehicleCondition: string;
  vehicleYear: number;
  transmissionType: TransmissionType;
  energyType: EnergyType;
  vehicleDescription: string;
  vehicleRentalPrice: number;
  vehicleAvaliableDate: Date | undefined;
  vehicleFeatures: vehicleFeaturesTypes[];
};
export type getByIdResponse = {
  vehicleId: string;
  vehicleCondition: string;
  transmissionType: TransmissionType;
  energyType: EnergyType;
  savedState: savedState;
  vehicleYear: number;
  reviewCount: number;
  vehicleName: string;
  vehicleLocation: string;
  vehicleDescription: string;
  carBookingState: carBookingState;
  vehicleRentalPrice: number;
  vehicleAvaliableDate: Date;
  averageVehicleRating: number;
  vehicleImages: vehicleImagesType[];
  created: Date;
  updated: Date;
};

export type initialStateFormik = {
  vehicle: formikResponse;
};

export type formikResponse = {
  vehicleId: string;
  vehicleCondition: string;
  transmissionType: TransmissionType;
  energyType: EnergyType;
  // savedState: savedState;
  vehicleYear: number;
  // reviewCount: number;
  vehicleName: string;
  vehicleLocation: string;
  vehicleDescription: string;
  // carBookingState: carBookingState;
  vehicleRentalPrice: number;
  vehicleAvaliableDate: string;
  // averageVehicleRating: number;
  vehicleImages: vehicleImagesType[];
  // created: Date;
  // updated: Date;
};

export type googleFetchReponseType = {
  formattedAddress: string;
};

export type getByIdFormik = {
  vehicleId: string;
  vehicleCondition: string;
  transmissionType: TransmissionType;
  energyType: EnergyType;
  savedState: savedState;
  vehicleYear: number;
  reviewCount: number;
  vehicleName: string;
  vehicleLocation: string;
  vehicleDescription: string;
  carBookingState: carBookingState;
  vehicleRentalPrice: number;
  vehicleAvaliableDate: Date;
  averageVehicleRating: number;
  vehicleImages: vehicleImagesType[];
};

export type getByIdFormikFormat = {
  vehicleId: string;
  vehicleCondition: string;
  transmissionType: TransmissionType;
  energyType: EnergyType;
  savedState: savedState;
  vehicleYear: number;
  reviewCount: number;
  vehicleName: string;
  vehicleLocation: string;
  vehicleDescription: string;
  carBookingState: carBookingState;
  vehicleRentalPrice: number;
  vehicleAvaliableDate: string;
  averageVehicleRating: number;
  vehicleImages: vehicleImagesType[];
};

export type updateCarFormikInputType = {
  vehicleId: string;
  vehicleName: string;
  vehicleLocation: string;
  vehicleCondition: string;
  vehicleYear: number;
  transmissionType: TransmissionType;
  energyType: EnergyType;
  vehicleDescription: string;
  vehicleRentalPrice: number;
  vehicleAvaliableDate: Date;
  savedState: savedState;
  vehicleFeatures: number[];
};

export type createCarImageInputType = {
  benefitTitle: string;
  benefitWriteUp: string;
};

export type carListingTempType = {
  activeTab: string;
  setActiveTab: (e: string) => void;
  cars: carResponseType[];
  getAllCarsLoading: boolean;
};

export type VehiclesData = {
  vehicles: carResponseType[];
};

export type VehiclesCardType = {
  vehicle: carResponseType;
};

export type createCarInputImageType = {
  vehicleImages: FormData;
};

export type updateCreateCarImagesType = {
  vehicleId: string;
  vehicleImages: FormData;
};

export type deleteACarImageType = {
  vehicleImageId: number;
};

export type createCarResponseImageType = {
  id: string;
};

export type deleteCarImageInputType = {
  benefitTitle: string;
  benefitWriteUp: string;
};

export type deleteCarInputType = {
  vehicleId: string;
};

export type deleteFeatureInputType = {
  featureId: string;
};

export type deleteCarResponseImageType = {
  benefitTitle: string;
  benefitWriteUp: string;
};

export type carResponseType = {
  vehicleId: string;
  vehicleCondition: string;
  transmissionType: TransmissionType;
  energyType: EnergyType;
  savedState: savedState;
  vehicleYear: number;
  vehicleName: string;
  vehicleLocation: string;
  vehicleDescription: string;
  carBookingState: carBookingState;
  vehicleRentalPrice: number;
  vehicleAvaliableDate: Date;
  created: Date | undefined;
  updated: Date | undefined;
  vehicleImages: vehicleImagesType[];
};

export type vehicleImagesType = {
  vehicleImageId: number;
  vehicleImageUrl: string;
};

export type vehicleFeaturesTypes = {
  featureId: number;
  featureName: string;
};

export type getACarImagesInputTypes = {
  id: string;
};

export type createACarFeatureInputTypes = {
  featureTitle: string;
  featureName: string;
};

export type getAllCarFeatureInputTypes = {
  featureTitle?: string;
  vehicleId?: string;
};

export type addCarFeatureToVehicleInputTypes = {
  carId: string;
  featuresIds: number[];
};

export type createACarFeatureResponseTypes = {
  featureId: number;
  featureTitle: string;
  featureName: string;
};

export type getAllCarFeatureResonseTypes = {
  featureTitle: string;
  features: createACarFeatureResponseTypes[];
};

export type getACarImagesResponseTypes = vehicleImagesType[];

export type allCarInputType = {
  savedState?: savedState;
  carBookingState?: carBookingState;
};

export enum savedState {
  Draft = "Draft",
  Active = "Active",
}

export enum carBookingState {
  Available = "Available",
  Booked = "Booked",
  Cancelled = "Cancelled",
  AwaitingApproval = "AwaitingApproval",
}

export enum EnergyType {
  Electric = "Electric",
  Hybrid = "Hybrid",
  Petrol = "Petrol",
  Diesel = "Diesel",
}

export enum TransmissionType {
  Manual = "Manual",
  Auto = "Auto",
}

export type HeaderTemplateType = {
  total: number;
  router: () => void;
};

export type uploadDetailsPopType = {
  // setVisible: (e: boolean) => void;
  newCarFormik: FormikProps<updateCarFormikInputType>;
  submit: (draft: boolean) => void;
  publishLoading: boolean;
  addFeatureLoading: boolean;
  visible: boolean;
};
