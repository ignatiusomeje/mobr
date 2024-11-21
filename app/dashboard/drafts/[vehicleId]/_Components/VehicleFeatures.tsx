import React, { useRef, useState } from "react";
import Feature from "./Feature";
// import { updateCarFormikInputType } from "../../_types/CarType";
// import { FormikProps } from "formik";
import { Button } from "primereact/button";
import { Loader2, Plus } from "lucide-react";
// import {
//   // useGetAllCarFeatureQuery,
//   useLazyGetAllCarFeatureQuery,
// } from "../../_Data/CarAPI";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import NewFeaturePop from "./NewFeaturePop";
import { Toast } from "primereact/toast";
// import { clearCarError } from "../../_Data/CarSlice";
import { FormikProps } from "formik";
import { updateCarFormikInputType } from "@/app/dashboard/car-listing/_types/CarType";
import { useLazyGetAllCarFeatureQuery } from "@/app/dashboard/car-listing/_Data/CarAPI";
import { clearCarError } from "@/app/dashboard/car-listing/_Data/CarSlice";
// import { updateCarFormikInputType } from "../../_types/CarType";

const VehicleFeatures = ({
  newCarFormik,
}: {
  newCarFormik: FormikProps<updateCarFormikInputType>;
}) => {
  const dispatch = useAppDispatch();
  const toast = useRef<Toast>(null);
  // const vehicleId = useAppSelector((state) => state.cars.vehicle.vehicleId);
  const carFeatures = useAppSelector((state) => state.cars.carFeatures);
  const carFeaturesForDisplay = useAppSelector(
    (state) => state.cars.carFeaturesForDisplay
  );
  const carFeaturesForDisplayLoading = useAppSelector(
    (state) => state.cars.carFeaturesForDisplayLoading
  );
  const getAllCarFeatureError = useAppSelector(
    (state) => state.cars.getAllCarFeatureError
  );
  // const getAllCarFeatureError = useAppSelector(
  //   (state) => state.cars.getAllCarFeatureError
  // );
  const [createFeature, setCreateFeature] = useState<boolean>(false);
  const [getAllCarFeatureTrigger, getAllCar] = useLazyGetAllCarFeatureQuery();

  const showError = (message: string) => {
    toast.current?.show({
      severity: "error",
      summary: "Error",
      detail: message,
      life: 3000,
    });
  };

  if (getAllCarFeatureError) {
    showError(getAllCarFeatureError);
    dispatch(clearCarError());
  }

  return (
    <div>
      <Toast ref={toast} />
      <div className={`flex justify-between items-center py-10`}>
        <h3
          className={`font-inter font-[600] text-[14px] leading-[22px] tracking-[0.25px] text-[#777777]`}
        >
          ADD VEHICLE FEATURES
        </h3>
        <Button
          // disabled={getAllCarFeatureLoading}
          className={`flex rounded-[10px] capitalize text-[#11975D] px-[20px] py-2 hover:bg-[#11975D] hover:text-white items-center focus:ring-0 gap-2`}
          onClick={() => setCreateFeature(true)}
        >
          create Features <Plus width={14} />
        </Button>
      </div>
      {/* {getAllCarFeatureLoading ? (
        <div
          className={`w-full flex items-center justify-center h-[50px] pb-[20px] `}
        >
          <Loader2 className={`animate-spin`} width={24} />
        </div>
      ) : ( */}
      <div className={`flex flex-col gap-[16px]`}>
        <Feature
          title={"Availability"}
          value={newCarFormik.values.vehicleAvaliableDate}
          getAllCarFeatureTrigger={(value) =>
            getAllCarFeatureTrigger({ featureTitle: value })
          }
          getAllCar={getAllCar.isLoading}
          newCarFormik={newCarFormik}
        />

        <Feature
          title={"transmissionType"}
          value={newCarFormik.values.transmissionType}
          getAllCarFeatureTrigger={(value) =>
            getAllCarFeatureTrigger({ featureTitle: value })
          }
          getAllCar={getAllCar.isLoading}
          newCarFormik={newCarFormik}
        />
        <Feature
          title={"energyType"}
          value={newCarFormik.values.energyType}
          getAllCarFeatureTrigger={(value) =>
            getAllCarFeatureTrigger({ featureTitle: value })
          }
          getAllCar={getAllCar.isLoading}
          newCarFormik={newCarFormik}
        />
        {carFeatures?.length > 0 &&
          carFeatures?.map((carFeature) => (
            <Feature
              key={carFeature.featureId}
              title={carFeature.featureTitle}
              value={carFeature.featureName}
              getAllCarFeatureTrigger={(value) =>
                getAllCarFeatureTrigger({ featureTitle: value })
              }
              getAllCar={getAllCar.isLoading}
              newCarFormik={newCarFormik}
            />
          ))}
        {carFeaturesForDisplayLoading ? <Loader2 className={`animate-spin mx-auto my-9`} width={24} /> : carFeaturesForDisplay?.length > 0 &&
          carFeaturesForDisplay.map((feature) => (
            <Feature
              key={feature.featureTitle}
              title={feature.featureTitle}
              value={``}
              newCarFormik={newCarFormik}
              getAllCar={getAllCar.isLoading || getAllCar.isFetching}
              getAllCarFeatureTrigger={() =>
                getAllCarFeatureTrigger({ featureTitle: feature.featureTitle })
              }
            />
          ))}
      </div>
      {/* )} */}
      <NewFeaturePop
        createFeature={createFeature}
        setCreateFeature={(e) => setCreateFeature(e)}
      />
    </div>
  );
};

export default VehicleFeatures;
