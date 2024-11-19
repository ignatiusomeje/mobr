import { changePasswordInputType } from "@/app/(Login)/_types/loginTypes";
import { FormikProps } from "formik";

export type initialStateBenefits = {
  benefits: benefitResponseType[];
  benefitsLoading: boolean;
  benefitsError: string;
  createBenefitLoading: boolean;
};

export type createBenefitInputType = {
  benefitTitle: string;
  benefitWriteUp: string;
};

export type benefitResponseType = {
  benefitId: number;
  benefitTitle: string;
  benefitWriteUp: string;
  created: Date | null;
  updated: Date | null;
};

export type benefitInternalResponseType = {
  benefitId: number;
  benefitTitle: string;
  benefitWriteUp: string;
};

export type editBenefitInputType = {
  benefitId: number;
  benefitTitle: string;
  benefitWriteUp: string;
};

export type getAllBenefitsResponseType = benefitResponseType[];

export type benefitIDInputType = {
  benefitId: number;
};

export type SettingsTempTypes = {
  benefitFormik: FormikProps<createBenefitInputType>;
  createBenefit: () => void;
  setNewBenefit: (value: boolean) => void;
  newBenefit: boolean;
  email: string;
  benefits: benefitResponseType[];
  benefitsLoading: boolean;
  fetchAllBenefits: () => void;
  changePasswordFormik: FormikProps<changePasswordInputType>;
  createBenefitLoading: boolean;
  changePasswordLoading: boolean;
};

export type benefitTabTypes = {
  benefitFormik: FormikProps<createBenefitInputType>;
  createBenefit: () => void;
  setNewBenefit: (value: boolean) => void;
  newBenefit: boolean;
  benefits: benefitResponseType[];
  benefitsLoading: boolean;
  createBenefitLoading: boolean;
  // email: string;
};
