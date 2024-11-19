import { CarAPI } from "@/store/CarAPI";
import {
  addCarFeatureToVehicleInputTypes,
  allCarInputType,
  carResponseType,
  createACarFeatureInputTypes,
  createACarFeatureResponseTypes,
  createCarInputImageType,
  createCarResponseImageType,
  deleteACarImageType,
  getACarImagesInputTypes,
  getACarImagesResponseTypes,
  getAllCarFeatureInputTypes,
  getAllCarFeatureResonseTypes,
  updateCreateCarImagesType,
} from "../_types/CarType";
// {
//   savedState:"draft","active"
// }

const CarApi = CarAPI.injectEndpoints({
  endpoints: (build) => ({
    // createCar: build.mutation<benefitResponseType, createBenefitInputType>({
    //   query: ({ ...benefit }) => ({
    //     url: `/benefit`,
    //     method: "Post",
    //     body: benefit,
    //   }),
    // }),

    createCarImages: build.mutation<
      createCarResponseImageType,
      createCarInputImageType
    >({
      query: ({ ...images }) => ({
        url: `/vehicle`,
        method: "Post",
        body: images.vehicleImages,
      }),
    }),

    updateCreateCarImages: build.mutation<
      createCarResponseImageType,
      updateCreateCarImagesType
    >({
      query: ({ ...images }) => ({
        url: `/vehicle/add-vehicle-image`,
        method: "Put",
        params: { vehicleId: images.vehicleId },
        body: images.vehicleImages,
      }),
    }),

    deleteACarImage: build.mutation<void, deleteACarImageType>({
      query: ({ ...images }) => ({
        url: `/vehicle/delete-vehicle-image`,
        method: "Delete",
        params: { vehicleImageId: images.vehicleImageId },
      }),
      invalidatesTags: ["carImages"],
    }),

    getACarImages: build.query<
      getACarImagesResponseTypes,
      getACarImagesInputTypes
    >({
      query: ({ ...images }) => ({
        url: `/vehicle/vehicle_images`,
        method: "Put",
        params: images,
      }),
      providesTags: ["carImages"],
    }),

    createACarFeature: build.mutation<
      createACarFeatureResponseTypes,
      createACarFeatureInputTypes
    >({
      query: ({ ...feature }) => ({
        url: `/vehicleFeature`,
        method: "Post",
        body: feature,
      }),
      invalidatesTags: ["carFeature"],
    }),

    updateACarFeature: build.mutation<
      createCarResponseImageType,
      createACarFeatureInputTypes
    >({
      query: ({ ...feature }) => ({
        url: `/vehicleFeature/update-vehicle-feature`,
        method: "Post",
        body: feature,
      }),
      invalidatesTags: ["carFeature"],
    }),
    /* make the feature to be attached to the vehicle */
    addCarFeatureToVehicle: build.mutation<
      void,
      addCarFeatureToVehicleInputTypes
    >({
      query: ({ ...feature }) => ({
        url: `/vehicleFeature`,
        method: "Put",
        body: feature,
      }),
    }),
    /* get all features needed */
    getAllCarFeature: build.query<
      getAllCarFeatureResonseTypes,
      getAllCarFeatureInputTypes
    >({
      query: ({ ...feature }) => ({
        url: `/vehicleFeature/get-all-vehicleFeature`,
        method: "Get",
        params: feature,
      }),
      providesTags:["carFeature"]
    }),

    getAllCars: build.query<carResponseType[], allCarInputType>({
      query: ({ ...cars }) => ({
        url: `/vehicle/get-all-vehicle`,
        method: "Get",
        params: cars,
      }),
      providesTags: ["cars"],
    }),
  }),
});

export const {
  useGetAllCarsQuery,
  useLazyGetACarImagesQuery,
  useCreateCarImagesMutation,
  useUpdateCreateCarImagesMutation,
  useDeleteACarImageMutation,
  useAddCarFeatureToVehicleMutation,
  useCreateACarFeatureMutation,
  useGetACarImagesQuery,
  useGetAllCarFeatureQuery,
  useUpdateACarFeatureMutation
} = CarApi;
export const {
  createCarImages,
  getACarImages,
  updateCreateCarImages,
  deleteACarImage,
  createACarFeature,
  updateACarFeature,
  addCarFeatureToVehicle,
  getAllCarFeature,
  getAllCars,
} = CarApi.endpoints;
