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
  deleteCarInputType,
  deleteFeatureInputType,
  getACarImagesInputTypes,
  getACarImagesResponseTypes,
  getAllCarFeatureInputTypes,
  getAllCarFeatureResonseTypes,
  getByIdResponse,
  updateCarFormikInputType,
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
        method: "get",
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
      createACarFeatureResponseTypes,
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
        url: `/vehicleFeature/add-vehicle-feature-to-car`,
        method: "Put",
        body: feature,
      }),
    }),
    /* get all features needed */
    getAllCarFeature: build.query<
      getAllCarFeatureResonseTypes[],
      getAllCarFeatureInputTypes
    >({
      query: ({ ...feature }) => ({
        url: `/vehicleFeature/get-all-vehicleFeature`,
        method: "Get",
        params: feature,
      }),
      providesTags: ["carFeature"],
    }),

    /* get all features for display */
    getAllCarFeatureForDisplay: build.query<
      getAllCarFeatureResonseTypes[],
      getAllCarFeatureInputTypes
    >({
      query: ({ ...feature }) => ({
        url: `/vehicleFeature/get-all-vehicleFeature`,
        method: "Get",
        params: feature,
      }),
      providesTags: ["carFeature"],
    }),

    getAllCars: build.query<carResponseType[], allCarInputType>({
      query: ({ ...cars }) => ({
        url: `/vehicle/get-all-vehicle`,
        method: "Get",
        params: cars,
      }),
      providesTags: ["cars"],
    }),

    /* update the car  */
    publishACar: build.mutation<carResponseType, updateCarFormikInputType>({
      query: ({ ...cars }) => ({
        url: `/vehicle/publish-vehicles`,
        method: "Put",
        body: cars,
      }),
      invalidatesTags: ["cars"],
    }),

    /* delete the car  */
    deleteACar: build.mutation<void, deleteCarInputType>({
      query: ({ ...cars }) => ({
        url: `/vehicle/`,
        method: "Delete",
        params: cars,
      }),
      invalidatesTags: ["cars"],
    }),

    /* get the car by ID  */
    getACarById: build.query<getByIdResponse, deleteCarInputType>({
      query: ({ ...cars }) => ({
        url: `/vehicle/`,
        method: "Get",
        params: cars,
      }),
    }),

    /* delete a car feature by ID  */
    deleteACarFeature: build.mutation<void, deleteFeatureInputType>({
      query: ({ ...featureId }) => ({
        url: `/vehicleFeature/`,
        method: "Delete",
        params: featureId,
      }),
      invalidatesTags: ["carFeature"],
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
  usePublishACarMutation,
  useGetAllCarFeatureForDisplayQuery,
  useLazyGetAllCarFeatureQuery,
  useUpdateACarFeatureMutation,
  useDeleteACarMutation,
  useGetACarByIdQuery,
  useLazyGetACarByIdQuery,
  useDeleteACarFeatureMutation,
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
  getAllCarFeatureForDisplay,
  publishACar,
  deleteACar,
  getACarById,
  deleteACarFeature,
} = CarApi.endpoints;
