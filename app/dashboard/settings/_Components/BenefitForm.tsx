import { Asterisk, Check, PenLine } from "lucide-react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import React, { useRef, useState } from "react";
import {
  useDeleteBenefitMutation,
  useEditBenefitMutation,
} from "../_Data/BenefitApi";
import { benefitInternalResponseType } from "../_types/settingsTypes";
import * as yup from "yup";
import { useFormik } from "formik";
import { Toast } from "primereact/toast";

const BenefitForm = ({
  benefitId,
  benefitTitle,
  benefitWriteUp,
}: benefitInternalResponseType) => {
  const [dontEdit, setdontEdit] = useState<boolean>(true);
  const toast = useRef<Toast>(null);
  const [editBenefitMutation, editBenefit] = useEditBenefitMutation();
  const [deleteBenefitMutation,{isLoading}] = useDeleteBenefitMutation();

  const validate = yup.object().shape({
    benefitTitle: yup.string().trim().required(),
    benefitWriteUp: yup.string().trim().required(),
  });

  const benefitFormik = useFormik({
    initialValues: {
      benefitId: benefitId,
      benefitTitle: benefitTitle,
      benefitWriteUp: benefitWriteUp,
    },
    enableReinitialize: true,
    validationSchema: validate,
    onSubmit: (values) => {
      editBenefitMutation(values)
        .unwrap()
        .then(() => {
          setdontEdit(true);
          showSuccess("Benefit edited successfully");
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

  return (
    <div className="flex flex-col gap-[10px] max-w-[572px] w-full">
      <Toast ref={toast} />
      {/* <Button
        className={`text-[#222B2E] flex items-center gap-1 font-square font-[700] text-[14px] leading-[22px] tracking-[0.25px] border-b border-b-[white] px-1 hover:border-b-[#222B2E] max-w-[170px] w-full rounded-b-md`}
      >
        ADD NEW BENEFIT <Plus width={12} color="#222B2E" />
      </Button> */}

      <form
        action=""
        onSubmit={benefitFormik.handleSubmit}
        className={`flex flex-col gap-[18px]`}
      >
        <div className="flex flex-col gap-[10px]">
          <label
            htmlFor="title"
            className={`text-[#1B1B1B] font-inter font-[600] text-[10px] leading-[16px] tracking-[0.4px] flex items-center`}
          >
            Title <Asterisk color="red" width={14} />
          </label>
          <InputText
            readOnly={dontEdit}
            name={`benefitTitle`}
            id="benefitTitle"
            onChange={benefitFormik.handleChange}
            onBlur={benefitFormik.handleBlur}
            value={benefitFormik.values.benefitTitle}
            type="text"
            variant="outlined"
            className={`p-inputtext-sm py-[12px] focus:ring-0 px-[14px] rounded-[20px] border border-[#C6C6C6] ${
              benefitFormik.values.benefitTitle &&
              benefitFormik.touched.benefitTitle &&
              !benefitFormik.errors.benefitTitle &&
              `bg-[#DDE4E6]`
            } ${
              benefitFormik.touched.benefitTitle &&
              benefitFormik.errors.benefitTitle
                ? `bg-[#FFD5C9]`
                : ``
            }`}
            placeholder="Enter title"
          />
        </div>
        <div className="flex flex-col gap-[10px]">
          <label
            htmlFor="description"
            className={`text-[#1B1B1B] font-inter font-[600] text-[10px] leading-[16px] tracking-[0.4px] flex items-center`}
          >
            Enter description <Asterisk color="red" width={14} />
          </label>
          <InputTextarea
            readOnly={dontEdit}
            name={`benefitWriteUp`}
            id="benefitWriteUp"
            onChange={benefitFormik.handleChange}
            onBlur={benefitFormik.handleBlur}
            value={benefitFormik.values.benefitWriteUp}
            rows={5}
            variant="outlined"
            className={`p-inputtext-sm py-[12px] focus:ring-0 px-[14px] rounded-[20px] border border-[#C6C6C6] resize-none ${
              benefitFormik.values.benefitWriteUp &&
              benefitFormik.touched.benefitWriteUp &&
              !benefitFormik.errors.benefitWriteUp &&
              `bg-[#DDE4E6]`
            } ${
              benefitFormik.touched.benefitWriteUp &&
              benefitFormik.errors.benefitWriteUp
                ? `bg-[#FFD5C9]`
                : ``
            }`}
            placeholder="Enter description"
          />
        </div>
        {dontEdit && <div className={`flex gap-[12px] ms-auto`}>
          <Button
            disabled={editBenefit.isLoading}
            loading={isLoading}
            className={`border border-[#8D1510] text-[#8D1510] font-square font-[400] text-[12px] focus:ring-0 gap-2 leading-[16px] tracking-[0.3px] rounded-[20px] py-[8px] px-[16px] uppercase`}
            onClick={() =>
              deleteBenefitMutation({
                benefitId: benefitFormik.values.benefitId,
              })
            }
          >
            Delete
          </Button>
          <Button
            disabled={isLoading}
            loading={editBenefit.isLoading}
            className={`border border-[#11975D] text-[#11975D] font-square font-[400] text-[12px] leading-[16px] tracking-[0.3px] rounded-[20px] py-[8px] px-[16px] focus:ring-0 flex gap-2 uppercase`}
            onClick={() => setdontEdit(false)}
          >
            Edit <PenLine color="#11975D" width={14} />
          </Button>
        </div>}
        {!dontEdit && <div className={`flex gap-[12px] ms-auto`}>
          <Button
            disabled={editBenefit.isLoading}
            loading={isLoading}
            className={`border border-[#8D1510] text-[#8D1510] font-square font-[400] text-[12px] focus:ring-0 leading-[16px] tracking-[0.3px] rounded-[20px] py-[8px] px-[16px] uppercase`}
            onClick={() =>
              setdontEdit(true)
            }
          >
            cancel
          </Button>
          <Button
            disabled={isLoading}
            loading={editBenefit.isLoading}
            className={`border border-[#11975D] text-[#11975D] font-square font-[400] text-[12px] leading-[16px] tracking-[0.3px] rounded-[20px] py-[8px] px-[16px] focus:ring-0 flex gap-2 uppercase`}
            onClick={() => benefitFormik.submitForm()}
          >
            Save <Check color="#11975D" width={14} />
          </Button>
        </div>}
      </form>
    </div>
  );
};

export default BenefitForm;
