"use client";
import React, { useRef, useState } from "react";
import EmptyTemplate from "./_Components/EmptyTemplate";
import HeaderTemplate from "./_Components/HeaderTemplate";
import { Button } from "primereact/button";
import { ArrowRight, Loader, PlusCircle } from "lucide-react";
import { useDropzone } from "react-dropzone";
import SingleImage from "./_Components/SingleImage";
import UploadDetailsPop from "./_Components/UploadDetailsPop";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Toast } from "primereact/toast";
import {
  clearCarError,
  // clearLoading,
  removeImage,
  setFetched,
} from "../_Data/CarSlice";
import {
  useAddCarFeatureToVehicleMutation,
  useCreateCarImagesMutation,
  useDeleteACarImageMutation,
  useLazyGetACarImagesQuery,
  usePublishACarMutation,
  // useUpdateCreateCarImagesMutation,
} from "../_Data/CarAPI";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
// import * as yup from "yup";
import { savedState } from "../_types/CarType";
import SuccessPop from "./_Components/SuccessPop";
import { clearFormikValue } from "@/store/FormikSlice";

type FileWithPreview = File & {
  preview: string;
};

const Page = () => {
  const toast = useRef<Toast>(null);
  const [isDraft, setIsDraft] = useState<boolean>(false);
  const [success, setSuccess] = useState<{
    visible: boolean;
    isDraft: boolean;
  }>({
    visible: false,
    isDraft: false,
  });
  const router = useRouter();
  const dispatch = useAppDispatch();
  // const [filesToUpload, setFilesToUpload] = useState<FileWithPreview[]>([]);
  const [createCarImagesMutation] = useCreateCarImagesMutation();
  // const [updateCreateCarImagesMutation] = useUpdateCreateCarImagesMutation();
  const [deleteACarImageMutation] = useDeleteACarImageMutation();
  const [addCarFeatureToVehicleMutation, addCarFeature] =
    useAddCarFeatureToVehicleMutation();
  const [publishACarMutation, publishCar] = usePublishACarMutation();
  // const [deleteACarImageMutation] = useCre();
  const [carImageTrigger] = useLazyGetACarImagesQuery();
  const createACarImageLoading = useAppSelector(
    (state) => state.cars.createACarImageLoading
  );
  const carFeatures = useAppSelector((state) => state.cars.carFeatures);

  const createACarImageError = useAppSelector(
    (state) => state.cars.createACarImageError
  );

  const deleteACarError = useAppSelector((state) => state.cars.deleteACarError);

  const deleteACarLoading = useAppSelector(
    (state) => state.cars.deleteACarLoading
  );

  const getACarImageError = useAppSelector(
    (state) => state.cars.getACarImageError
  );

  const getAllCarsError = useAppSelector((state) => state.cars.getAllCarsError);
  const getAllCarFeatureError = useAppSelector(
    (state) => state.cars.getAllCarFeatureError
  );
  const FormikValues = useAppSelector((state) => state.Formik.vehicle);
  const createACarFeatureError = useAppSelector(
    (state) => state.cars.createACarFeatureError
  );
  const updateCarFeatureError = useAppSelector(
    (state) => state.cars.updateCarFeatureError
  );
  const carFeaturesForDisplayError = useAppSelector(
    (state) => state.cars.carFeaturesForDisplayError
  );
  const deleteACarObjectError = useAppSelector(
    (state) => state.cars.deleteACarObjectError
  );
  const deleteACarFeatureError = useAppSelector(
    (state) => state.cars.deleteACarFeatureError
  );

  const vehicleImages = useAppSelector(
    (state) => state.cars.vehicle.vehicleImages
  );

  const vehicleId = useAppSelector((state) => state.cars.vehicle.vehicleId);
  // const fetched = useAppSelector((state) => state.cars.fetched);

  // const onDrop = useCallback((acceptedFiles) => {

  // },[]);

  // const validate = yup.object().shape({

  //   vehicleId: yup.string().trim(),
  // vehicleName: yup.string().trim(),
  // vehicleLocation: yup.string().trim(),
  // vehicleCondition: yup.string().trim(),
  // vehicleYear: yup.number(),
  // transmissionType: yup.mixed<TransmissionType>().oneOf(Object.values(TransmissionType)),
  // energyType: yup.mixed<EnergyType>().oneOf(Object.values(EnergyType)),
  // vehicleDescription: yup.string().trim(),
  // vehicleRentalPrice: yup.number(),
  // vehicleAvaliableDate: yup.date(),
  // vehicleFeatures: vehicleFeaturesTypes[];
  // });

  const newCarFormik = useFormik({
    initialValues: {
      vehicleId: vehicleId,
      vehicleName: FormikValues.vehicleName,
      vehicleLocation: FormikValues.vehicleLocation,
      vehicleCondition: FormikValues.vehicleCondition,
      vehicleYear: FormikValues.vehicleYear,
      transmissionType: FormikValues.transmissionType,
      energyType: FormikValues.energyType,
      vehicleDescription: FormikValues.vehicleDescription,
      vehicleRentalPrice: FormikValues.vehicleRentalPrice,
      savedState: isDraft ? savedState.Draft : savedState.Active,
      vehicleAvaliableDate: new Date(FormikValues.vehicleAvaliableDate),
      vehicleFeatures: carFeatures.map((feature) => feature.featureId),
    },
    enableReinitialize: true,
    // validationSchema: validate,
    onSubmit: (values) => {
      const allFilled = Object.values(values).some(
        (value) => value === "" || value === 0
      );
      if (allFilled && values.savedState === savedState.Active) {
        values.savedState = savedState.Draft;
        if (values.vehicleFeatures.length > 0) {
          return addCarFeatureToVehicleMutation({
            carId: values.vehicleId,
            featuresIds: values.vehicleFeatures,
          })
            .unwrap()
            .then(() => {
              publishACarMutation(values)
                .unwrap()
                .then(() =>
                  isDraft
                    ? setSuccess({ isDraft: true, visible: true })
                    : setSuccess({ isDraft: false, visible: true })
                );
            })
            .catch((err) => showError(err));
        }
        publishACarMutation(values)
          .unwrap()
          .then(() =>
            isDraft
              ? setSuccess({ isDraft: true, visible: true })
              : setSuccess({ isDraft: false, visible: true })
          );
      }
      if (values.vehicleFeatures.length > 0) {
        return addCarFeatureToVehicleMutation({
          carId: values.vehicleId,
          featuresIds: values.vehicleFeatures,
        })
          .unwrap()
          .then(() => {
            publishACarMutation(values)
              .unwrap()
              .then(() => {
                if (isDraft) {
                  setSuccess({ isDraft: true, visible: true });
                } else {
                  setSuccess({ isDraft: false, visible: true });
                }
                dispatch(clearFormikValue());
              });
          })
          .catch((err) => showError(err));
      }
      publishACarMutation(values)
        .unwrap()
        .then(() => {
          if (isDraft) {
            setSuccess({ isDraft: true, visible: true });
          } else {
            setSuccess({ isDraft: false, visible: true });
          }
          dispatch(clearFormikValue());
        })
        .catch((err) => showError(err));
    },
  });

  const carImageFormik = useFormik<{
    vehicleImages: File[];
    preview: FileWithPreview[];
    vehicleId: string;
  }>({
    initialValues: {
      vehicleImages: [],
      preview: [],
      vehicleId: vehicleId || "",
    },
    enableReinitialize: true,
    // validationSchema: validate,
    onSubmit: async (values) => {
      const form = new FormData();
      await values.vehicleImages.forEach((image) =>
        form.append("VehicleImages", image)
      );
      // if (fetched) {
      //   await updateCreateCarImagesMutation({
      //     vehicleImages: form,
      //     vehicleId: vehicleId,
      //   })
      //     .unwrap()
      //     .then(() => {
      //       carImageTrigger({ id: vehicleId });
      //     });
      // } else {
      await createCarImagesMutation({ vehicleImages: form })
        .unwrap()
        .then((resolved) => {
          carImageTrigger({ id: resolved.id });
          carImageFormik.resetForm();
          dispatch(setFetched());
        });
      // }
    },
  });

  const showError = (message: string) => {
    toast.current?.show({
      severity: "error",
      summary: "Error",
      detail: message,
      life: 3000,
    });
  };

  if (getACarImageError) {
    showError(getACarImageError);
    dispatch(clearCarError());
  } else if (createACarImageError) {
    showError(createACarImageError);
    dispatch(clearCarError());
  } else if (deleteACarError) {
    showError(deleteACarError);
    dispatch(clearCarError());
  } else if (getAllCarsError) {
    showError(getAllCarsError);
    dispatch(clearCarError());
  } else if (getAllCarFeatureError) {
    showError(getAllCarFeatureError);
    dispatch(clearCarError());
  } else if (getAllCarFeatureError) {
    showError(getAllCarFeatureError);
    dispatch(clearCarError());
  } else if (createACarFeatureError) {
    showError(createACarFeatureError);
    dispatch(clearCarError());
  } else if (updateCarFeatureError) {
    showError(updateCarFeatureError);
    dispatch(clearCarError());
  } else if (carFeaturesForDisplayError) {
    showError(carFeaturesForDisplayError);
    dispatch(clearCarError());
  } else if (deleteACarObjectError) {
    showError(deleteACarObjectError);
    dispatch(clearCarError());
  } else if (deleteACarFeatureError) {
    showError(deleteACarFeatureError);
    dispatch(clearCarError());
  }

  const { getInputProps, getRootProps } = useDropzone({
    accept: {
      "images/*": [],
    },
    onDrop: async (acceptedImages) => {
      const newImages = acceptedImages.map((file) =>
        Object.assign(file, { preview: URL.createObjectURL(file) })
      );
      // const form = new FormData();
      // await acceptedImages.forEach((image) =>
      //   form.append("VehicleImages", image)
      // );
      const PreviewImages = [...carImageFormik.values.preview, ...newImages];
      const newImagesRecieved = [...carImageFormik.values.vehicleImages, ...acceptedImages];
      await carImageFormik.setFieldValue("preview", PreviewImages);
      await carImageFormik.setFieldValue("vehicleImages", newImagesRecieved);

      // if (fetched) {
      //   await updateCreateCarImagesMutation({
      //     vehicleImages: form,
      //     vehicleId: vehicleId,
      //   })
      //     .unwrap()
      //     .then(() => {
      //       carImageTrigger({ id: vehicleId });
      //     });
      // } else {
      //   await createCarImagesMutation({ vehicleImages: form })
      //     .unwrap()
      //     .then((resolved) => {
      //       carImageTrigger({ id: resolved.id });
      //       dispatch(setFetched());
      //     });
      // }
      // const form = new FormData();
      // await acceptedImages.forEach((image) =>
      //   form.append("VehicleImages", image)
      // );
      // await createCarImagesMutation({ vehicleImages: form })
      //   .unwrap()
      //   .then((resolved) => {
      //     carImageTrigger({ id: resolved.id });
      //   });
      // cons;
      // setFilesToUpload((prev) =>
      //   prev.length === 0
      //     ? acceptedImages.map((file) =>
      //         Object.assign(file, { preview: URL.createObjectURL(file) })
      //       )
      //     : [
      //         ...prev,
      //         ...acceptedImages.map((file) =>
      //           Object.assign(file, { preview: URL.createObjectURL(file) })
      //         ),
      //       ]
      // );
    },
    maxSize: 20000000,
    noClick: true,
  });
  // dispatch(clearLoading());

  return (
    <div className={`flex flex-col h-screen p-[20px]`}>
      <Toast ref={toast} />
      <HeaderTemplate
        router={() => router.back()}
        total={vehicleImages.length}
      />
      {createACarImageLoading || deleteACarLoading ? (
        <div className={`h-full w-full flex justify-center items-center`}>
          <Loader width={50} height={50} className={`animate-spin`} />
        </div>
      ) : (
        <div
          {...getRootProps({
            className: `flex-grow flex-1 overflow-y-scroll pb-7 noScroll`,
          })}
        >
          {vehicleImages.length === 0 &&
          carImageFormik.values.preview.length === 0 ? (
            <EmptyTemplate btnUpload={getInputProps} />
          ) : (
            <div className={`flex flex-wrap items-center gap-[16px] mt-3`}>
              {vehicleImages && vehicleImages.length > 0
                ? vehicleImages.map((vehicle) => (
                    <SingleImage
                      id={vehicle.vehicleImageId}
                      deleteACarImageMutation={(id) =>
                        deleteACarImageMutation({ vehicleImageId: id })
                          .unwrap()
                          .then(() => {
                            dispatch(removeImage(id));
                          })
                      }
                      key={vehicle.vehicleImageId}
                      src={vehicle.vehicleImageUrl}
                    />
                  ))
                : carImageFormik.values.preview.map((vehicle, index) => (
                    <SingleImage
                      id={index}
                      deleteACarImageMutation={
                        async (id) => {
                          const previewUpdate =
                            carImageFormik.values.preview.filter(
                              (preview, index) => index !== id
                            );
                          const vehicleUpdate =
                            carImageFormik.values.vehicleImages.filter(
                              (vehicle, index) => index !== id
                            );
                          await carImageFormik.setFieldValue(
                            "preview",
                            previewUpdate
                          );
                          await carImageFormik.setFieldValue(
                            "vehicleImages",
                            vehicleUpdate
                          );
                        }
                        // deleteACarImageMutation({ vehicleImageId: id })
                        //   .unwrap()
                        //   .then(() => {
                        //     dispatch(removeImage(id));
                        //   })
                      }
                      key={index}
                      src={vehicle.preview}
                    />
                  ))}
              <label
                htmlFor="uploadImage"
                className={`flex justify-center items-center w-full max-w-[218px] h-[182px] rounded-[8px] cursor-pointer bg-[#E2E2E2]`}
              >
                <PlusCircle width={32} />
                <input
                  name="uploadImage"
                  type="file"
                  id="uploadImage"
                  accept="image/*"
                  multiple
                  {...getInputProps()}
                  className={`hidden`}
                />
              </label>
            </div>
          )}
        </div>
      )}

      <Button
        disabled={
          createACarImageLoading ||
          deleteACarLoading ||
          carImageFormik.values.preview.length === 0
            ? true
            : false
        }
        onClick={() => carImageFormik.submitForm()}
        className={`disabled:bg-[#C6C6C6] bg-[#11975D] rounded-[20px] py-[8px] flex items-center justify-center w-full gap-[8px] focus:ring-0 px-[14px] font-square font-[400] text-[10px] leading-[18px] tracking-[0.4px] text-[#FFFFFF]`}
      >
        Continue <ArrowRight width={14} />
      </Button>
      <UploadDetailsPop
        newCarFormik={newCarFormik}
        submit={(draft) => {
          setIsDraft(draft);
          newCarFormik.submitForm();
        }}
        publishLoading={publishCar.isLoading}
        addFeatureLoading={addCarFeature.isLoading}
        // setVisible={(e) => setIsDraft(e)}
        visible={isDraft}
      />
      <SuccessPop visible={success} setVisible={setSuccess} />
    </div>
  );
};

export default Page;
