import React, { useRef } from "react";
import { Dialog } from "primereact/dialog";
// import { indexInput } from "@/types/indexPage";
import { Asterisk, Plus } from "lucide-react";
import { Button } from "primereact/button";
// import { useRouter } from "next/navigation";
// import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { useFormik } from "formik";
import * as yup from "yup";
import { useCreateACarFeatureMutation } from "../../_Data/CarAPI";
import { Toast } from "primereact/toast";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { clearLoginError } from "@/app/(Login)/_Data/LoginSlice";
// import { setFeatureTitle } from "../../_Data/CarSlice";

const NewFeaturePop = ({
  createFeature,
  setCreateFeature,
}: {
  createFeature: boolean;
  setCreateFeature: (e: boolean) => void;
}) => {
  const toast = useRef<Toast>(null);
  const dispatch = useAppDispatch();
  const [createACarFeatureMutation] = useCreateACarFeatureMutation();
  const createACarFeatureLoading = useAppSelector(
    (state) => state.cars.createACarFeatureLoading
  );
  const createACarFeatureError = useAppSelector(
    (state) => state.cars.createACarFeatureError
  );
  const newFeatureSchema = yup.object().shape({
    featureTitle: yup.string().trim().required(),
    featureName: yup.string().trim().required(),
  });

  const newFeatureFormik = useFormik({
    initialValues: {
      featureTitle: "",
      featureName: "",
    },
    validationSchema: newFeatureSchema,
    // enableReinitialize: true,
    onSubmit: (values) => {
      createACarFeatureMutation(values)
        .unwrap()
        .then(() => {
          setCreateFeature(false);
          // setFeatureTitle(values.featureTitle);
          showSuccess();
          newFeatureFormik.resetForm();
        });
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

  const showSuccess = () => {
    toast.current?.show({
      severity: "success",
      summary: "Success",
      detail: "Feature Added Successfully",
      life: 3000,
    });
  };

  if (createACarFeatureError) {
    showError(createACarFeatureError);
    dispatch(clearLoginError());
  }

  return (
    <div className="card flex justify-content-center">
      <Toast ref={toast} />
      <Dialog
        visible={createFeature}
        className="rounded-[20px]"
        modal
        dismissableMask={createACarFeatureLoading ? false : true}
        onHide={() => {
          if (!createFeature) return;
          setCreateFeature(false);
          newFeatureFormik.resetForm();
        }}
        content={() => (
          <div className="bg-white max-w-[520px] w-full p-[32px] rounded-[20px]">
            <h2
              className={`font-square uppercase text-[24px] font-[700] tracking-[-0.10000000149011612px]`}
            >
              Create a new car Feature
            </h2>
            <p
              className={`font-inter text-[14px] font-[400] tracking-[0.25px] leading-[22px]`}
            >
              Enter the feature name and its value
            </p>
            <form action="" onSubmit={newFeatureFormik.handleSubmit}>
              <div className="flex flex-col gap-2 mt-5">
                <label htmlFor="featureTitle" className="flex">
                  Feature Title <Asterisk color="red" width={14} />
                </label>
                <InputText
                  id="featureTitle"
                  name="featureTitle"
                  type="text"
                  value={newFeatureFormik.values.featureTitle}
                  onChange={newFeatureFormik.handleChange}
                  onBlur={newFeatureFormik.handleBlur}
                  variant="outlined"
                  className={`p-inputtext-sm py-[12px] ${
                    newFeatureFormik.values.featureTitle &&
                    newFeatureFormik.touched.featureTitle &&
                    !newFeatureFormik.errors.featureTitle &&
                    `bg-[#DDE4E6]`
                  } ${
                    newFeatureFormik.touched.featureTitle &&
                    newFeatureFormik.errors.featureTitle
                      ? `bg-[#FFD5C9]`
                      : ``
                  } hover:border hover:border-[#474747] focus:border focus:border-[#474747] focus:ring-0 px-[14px] rounded-[20px] border border-[#C6C6C6]`}
                  placeholder="Enter your feature Title"
                />
              </div>
              <div className="flex flex-col gap-2 mt-5">
                <label htmlFor="featureName" className="flex">
                  Feature Name <Asterisk color="red" width={14} />
                </label>
                <InputText
                  id="featureName"
                  name="featureName"
                  type="text"
                  value={newFeatureFormik.values.featureName}
                  onChange={newFeatureFormik.handleChange}
                  onBlur={newFeatureFormik.handleBlur}
                  variant="outlined"
                  className={`p-inputtext-sm py-[12px] ${
                    newFeatureFormik.values.featureName &&
                    newFeatureFormik.touched.featureName &&
                    !newFeatureFormik.errors.featureName &&
                    `bg-[#DDE4E6]`
                  } ${
                    newFeatureFormik.touched.featureName &&
                    newFeatureFormik.errors.featureName
                      ? `bg-[#FFD5C9]`
                      : ``
                  } hover:border hover:border-[#474747] focus:border focus:border-[#474747] focus:ring-0 px-[14px] rounded-[20px] border border-[#C6C6C6]`}
                  placeholder="Enter your feature Name"
                />
              </div>
              <Button
                type="submit"
                loading={createACarFeatureLoading}
                // onClick={(e) => {
                //   setVisible(true);
                //   hide(e);
                //   route.push("/dashboard");
                // }}
                className="bg-[#11975D] w-full rounded-[20px] focus:ring-0 mt-5 font-[400] text-[12px] font-square text-white py-[14px] px-[24px] hover:bg-[#3A494F] flex items-center justify-center gap-2"
              >
                Create New Feature <Plus width={14} />
              </Button>
            </form>
          </div>
        )}
      ></Dialog>
    </div>
  );
};

export default NewFeaturePop;
