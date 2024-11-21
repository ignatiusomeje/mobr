import { Button } from "primereact/button";
import React, { useState } from "react";
import FeaturePop from "./FeaturePop";
import { FormikProps } from "formik";
import { updateCarFormikInputType } from "@/app/dashboard/car-listing/_types/CarType";
// import { updateCarFormikInputType } from "../../_types/CarType";

const Feature = ({
  title,
  value,
  getAllCarFeatureTrigger,
  getAllCar,
  newCarFormik,
}: //
{
  title: string;
  value: string | Date;
  getAllCarFeatureTrigger: (e: string) => void;
  getAllCar: boolean;
  newCarFormik: FormikProps<updateCarFormikInputType>;
}) => {
  const [active, setActive] = useState<{ name: string; active: boolean }>({
    name: "",
    active: false,
  });

  const handlePopUp = () => {
    if (
      title.toLowerCase() !== "availability" &&
      title.toLowerCase() !== "energytype" &&
      title.toLowerCase() !== "transmissiontype"
    )
      getAllCarFeatureTrigger(title);
    setActive({ active: true, name: title });
  };
  return (
    <div className={`flex items-center justify-between py-[16px]`}>
      <div className={`flex flex-col gap-[12px]`}>
        <h4
          className={`text-[#303030] uppercase font-inter text-[12px] font-[600] leading-[20px] tracking-[0.3px]`}
        >
          {title}
        </h4>
        {value && (
          <p
            className={`font-inter capitalize text-[12px] font-[400] leading-[20px] tracking-[0.3px]`}
          >
            {typeof value === "string"
              ? value
              : new Date(value).toLocaleDateString()
              // moment(value).format("d MMM, YYYY")
              }
          </p>
        )}
      </div>
      <Button
        className={`focus:ring-0 text-[#11975D] font-inter text-[12px] font-[500] leading-[20px] tracking-[0.3px]`}
        onClick={() => handlePopUp()}
      >
        Select
      </Button>
      <FeaturePop
        // items={popupItems}
        name={active.name}
        invalid={value === "" && true}
        visible={active.active}
        setVisible={setActive}
        getAllCar={getAllCar}
        newCarFormik={newCarFormik}
      />
    </div>
  );
};

export default Feature;
