import { updateCarFormikInputType } from "@/app/dashboard/car-listing/_types/CarType";
import { FormikProps } from "formik";
import { Dispatch, SetStateAction } from "react";

export type successPopType = {
  visible: { visible: boolean; isDraft: boolean };
  setVisible: Dispatch<SetStateAction<{ visible: boolean; isDraft: boolean }>>;
};

export type FeaturePopType = {
  name: string;
  items?: string[];
  multiple?: boolean;
  visible: boolean;
  setVisible: Dispatch<SetStateAction<{ name: string; active: boolean }>>;
  getAllCar:boolean
  newCarFormik:FormikProps<updateCarFormikInputType>
  invalid:boolean
};

