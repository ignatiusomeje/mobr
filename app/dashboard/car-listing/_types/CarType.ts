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
  createdFeatures:createACarFeatureResponseTypes[]
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

export type updateCarFormikInputType = {
  vehicleId: string;
  vehicleName: string;
  vehicleLocation: string;
  vehicleCondition: string;
  vehicleYear: Date;
  transmissionType: TransmissionType;
  energyType: EnergyType;
  vehicleDescription: string;
  vehicleRentalPrice: number;
  vehicleAvaliableDate: Date;
  vehicleFeatures: vehicleFeaturesTypes[];
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
  vehicleAvaliableDate: Date | undefined;
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

export type getAllCarFeatureResonseTypes = createACarFeatureResponseTypes[];

export type addCarFeatureToVehicleInputTypes = {
  carId: string;
  featuresIds: number[];
};

export type createACarFeatureResponseTypes = {
  featureId: number;
  featureTitle: string;
  featureName: string;
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
}

export enum EnergyType {
  Electric = "Electric",
  Hybrid = "Hybrid",
  Petrol = "Petrol",
  Diesel = "Diesel",
}

export enum TransmissionType {
  Manuel = "Manuel",
  Auto = "Auto",
}

export type HeaderTemplateType = {
  total: number;
  router: () => void;
};

export type uploadDetailsPopType = {
  visible: boolean;
  setVisible: (e: boolean) => void;
  newCarFormik: FormikProps<updateCarFormikInputType>;
};
