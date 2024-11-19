import React, { useRef, useState } from "react";
import Feature from "./Feature";
// import { updateCarFormikInputType } from "../../_types/CarType";
// import { FormikProps } from "formik";
import { Button } from "primereact/button";
import { Loader2, Plus } from "lucide-react";
import { useGetAllCarFeatureQuery } from "../../_Data/CarAPI";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import NewFeaturePop from "./NewFeaturePop";
import { Toast } from "primereact/toast";
import { clearCarError } from "../../_Data/CarSlice";

const VehicleFeatures = () => {
  const dispatch = useAppDispatch();
  const toast = useRef<Toast>(null);
  const vehicleId = useAppSelector((state) => state.cars.vehicle.vehicleId);
  const createdFeatures = useAppSelector((state) => state.cars.createdFeatures);
  const getAllCarFeatureLoading = useAppSelector(
    (state) => state.cars.getAllCarFeatureLoading
  );
  const getAllCarFeatureError = useAppSelector(
    (state) => state.cars.getAllCarFeatureError
  );
  // const getAllCarFeatureError = useAppSelector(
  //   (state) => state.cars.getAllCarFeatureError
  // );
  const [createFeature, setCreateFeature] = useState<boolean>(false);
  useGetAllCarFeatureQuery({ vehicleId });

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
          disabled={getAllCarFeatureLoading}
          className={`flex rounded-[10px] capitalize text-[#11975D] px-[20px] py-2 hover:bg-[#11975D] hover:text-white items-center focus:ring-0 gap-2`}
          onClick={() => setCreateFeature(true)}
        >
          create Features <Plus width={14} />
        </Button>
      </div>
      {getAllCarFeatureLoading ? (
        <div
          className={`w-full flex items-center justify-center h-[50px] pb-[20px] `}
        >
          <Loader2 className={`animate-spin`} width={24} />
        </div>
      ) : (
        <div className={`flex flex-col gap-[16px]`}>
          {createdFeatures?.length > 0 &&
            createdFeatures?.map((carFeature) => (
              <Feature
                key={carFeature.featureId}
                title={carFeature.featureTitle}
                value={carFeature.featureName}
              />
            ))}
        </div>
      )}
      <NewFeaturePop
        createFeature={createFeature}
        setCreateFeature={(e) => setCreateFeature(e)}
      />
    </div>
  );
};

export default VehicleFeatures;
