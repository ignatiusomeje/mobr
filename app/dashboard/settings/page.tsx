"use client";
import DashboardWrapper from "@/Components/DashboardWrapper";
import React, { useRef, useState } from "react";
import SettingsTemp from "./_Components/SettingsTemp";
import NavBar from "@/Components/NavBar";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  useCreateBenefitMutation,
  // useGetAllBenefitsQuery,
  useLazyGetAllBenefitsQuery,
} from "./_Data/BenefitApi";
import { useFormik } from "formik";
import * as yup from "yup";
import { Toast } from "primereact/toast";
import { clearBenefitError } from "./_Data/BenefitSlice";
import { useChangePasswordMutation } from "@/app/(Login)/_Data/LoginApi";
import { clearLoginError } from "@/app/(Login)/_Data/LoginSlice";

const Page = () => {
  const toast = useRef<Toast>(null);
  const [newBenefit, setNewBenefit] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const email = useAppSelector((state) => state.login.admin.email);
  const id = useAppSelector((state) => state.login.admin.id);
  const changePasswordError = useAppSelector(
    (state) => state.login.changePasswordError
  );
  const changePasswordLoading = useAppSelector(
    (state) => state.login.changePasswordLoading
  );
  const benefits = useAppSelector((state) => state.benefits.benefits);
  const benefitsError = useAppSelector((state) => state.benefits.benefitsError);
  const benefitsLoading = useAppSelector(
    (state) => state.benefits.benefitsLoading
  );
  const createBenefitLoading = useAppSelector(
    (state) => state.benefits.createBenefitLoading
  );
  const [createBenefitMutation] = useCreateBenefitMutation();
  const [getAllBenefitsTrigger] = useLazyGetAllBenefitsQuery();
  const [changePasswordMutation] = useChangePasswordMutation();

  const validate = yup.object().shape({
    benefitTitle: yup.string().trim().required(),
    benefitWriteUp: yup.string().trim().required(),
  });
  const validateChangePassword = yup.object().shape({
    oldPassword: yup.string().trim().required(),
    newPassword: yup.string().trim().required(),
    confirmPassword: yup.string().trim().required(),
  });

  const benefitFormik = useFormik({
    initialValues: {
      benefitTitle: "",
      benefitWriteUp: "",
    },
    validationSchema: validate,
    onSubmit: (values) => {
      createBenefitMutation(values)
        .unwrap()
        .then(() => {
          showSuccess("Benefit created successfully");
          benefitFormik.resetForm();
          setNewBenefit(false);
        });
    },
  });

  const changePasswordFormik = useFormik({
    initialValues: {
      id: id,
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: validateChangePassword,
    onSubmit: (values) => {
      changePasswordMutation(values)
        .unwrap()
        .then(() => {
          showSuccess("Password Changed successfully");
          changePasswordFormik.resetForm();
        });
    },
  });

  const showSuccess = (message: string) => {
    toast.current?.show({
      severity: "success",
      summary: "Success",
      detail: message,
      life: 3000,
    });
  };

  const showError = (message: string) => {
    toast.current?.show({
      severity: "error",
      summary: "Error",
      detail: message,
      life: 3000,
    });
  };

  if (benefitsError) {
    showError(benefitsError);
    dispatch(clearBenefitError());
  } else if (changePasswordError) {
    showError(changePasswordError);
    dispatch(clearLoginError());
  }

  return (
    <DashboardWrapper>
      <NavBar routeName="Settings" />
      <Toast ref={toast} />
      <div className={`px-[20px] overflow-hidden mb-9`}>
        <SettingsTemp
          benefitFormik={benefitFormik}
          createBenefit={() => benefitFormik.submitForm()}
          newBenefit={newBenefit}
          setNewBenefit={(val) => setNewBenefit(val)}
          email={email}
          benefits={benefits}
          benefitsLoading={benefitsLoading}
          fetchAllBenefits={() => getAllBenefitsTrigger()}
          createBenefitLoading={createBenefitLoading}
          changePasswordFormik={changePasswordFormik}
          changePasswordLoading={changePasswordLoading}
        />
      </div>
    </DashboardWrapper>
  );
};

export default Page;
