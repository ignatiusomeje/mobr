import { changePasswordInputType } from "@/app/(Login)/_types/loginTypes";
import { FormikProps } from "formik";

export type SettingsTabType = {
  email: string;
  changePasswordFormik: FormikProps<changePasswordInputType>;
  changePasswordLoading: boolean;
};
