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
import { clearCarError, removeImage } from "../_Data/CarSlice";
import {
  useCreateCarImagesMutation,
  useDeleteACarImageMutation,
  useLazyGetACarImagesQuery,
  useUpdateCreateCarImagesMutation,
} from "../_Data/CarAPI";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
// import * as yup from "yup";
import { EnergyType, TransmissionType } from "../_types/CarType";

// type FileWithPreview = File & {
//   preview: string;
// };

const Page = () => {
  const toast = useRef<Toast>(null);
  const [visible, setVisible] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();
  // const [filesToUpload, setFilesToUpload] = useState<FileWithPreview[]>([]);
  const [createCarImagesMutation] = useCreateCarImagesMutation();
  const [updateCreateCarImagesMutation] = useUpdateCreateCarImagesMutation();
  const [deleteACarImageMutation] = useDeleteACarImageMutation();
  const [carImageTrigger] = useLazyGetACarImagesQuery();
  const createACarImageLoading = useAppSelector(
    (state) => state.cars.createACarImageLoading
  );

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

  const vehicleImages = useAppSelector(
    (state) => state.cars.vehicle.vehicleImages
  );

  const vehicleId = useAppSelector((state) => state.cars.vehicle.vehicleId);

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
      vehicleName: "",
      vehicleLocation: "",
      vehicleCondition: "",
      vehicleYear: new Date(0),
      transmissionType: TransmissionType.Manuel,
      energyType: EnergyType.Petrol,
      vehicleDescription: "",
      vehicleRentalPrice: 0,
      vehicleAvaliableDate: new Date(0),
      vehicleFeatures: [
        {
          featureId: 0,
          featureName: "",
        },
      ],
    },
    enableReinitialize: true,
    // validationSchema: validate,
    onSubmit: (values) => {
      console.log(values, "see me here");
      // console.log(values);
      // createBenefitMutation(values)
      //   .unwrap()
      //   .then(() => {
      //     showSuccess("Benefit created successfully");
      //     benefitFormik.resetForm();
      //     setNewBenefit(false);
      //   });
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
  }

  const { getInputProps, getRootProps } = useDropzone({
    accept: {
      "images/*": [],
    },
    onDrop: async (acceptedImages) => {
      const form = new FormData();
      await acceptedImages.forEach((image) =>
        form.append("VehicleImages", image)
      );
      if (vehicleImages.length > 0) {
        updateCreateCarImagesMutation({
          vehicleImages: form,
          vehicleId: vehicleId,
        })
          .unwrap()
          .then(() => {
            carImageTrigger({ id: vehicleId });
          });
      } else {
        await createCarImagesMutation({ vehicleImages: form })
          .unwrap()
          .then((resolved) => {
            carImageTrigger({ id: resolved.id });
          });
      }
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
          {vehicleImages.length === 0 ? (
            <EmptyTemplate btnUpload={getInputProps} />
          ) : (
            <div className={`flex flex-wrap items-center gap-[16px] mt-3`}>
              {vehicleImages.map((vehicle) => (
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
          vehicleImages.length > 0
            ? false
            : true
        }
        onClick={() => setVisible(true)}
        className={`disabled:bg-[#C6C6C6] bg-[#11975D] rounded-[20px] py-[8px] flex items-center justify-center w-full gap-[8px] focus:ring-0 px-[14px] font-square font-[400] text-[10px] leading-[18px] tracking-[0.4px] text-[#FFFFFF]`}
      >
        Continue <ArrowRight width={14} />
      </Button>
      <UploadDetailsPop
        newCarFormik={newCarFormik}
        visible={visible}
        setVisible={(e) => setVisible(e)}
      />
    </div>
  );
};

export default Page;
