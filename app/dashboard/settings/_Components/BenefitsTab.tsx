import { Asterisk, Plus } from "lucide-react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import React from "react";
import BenefitForm from "./BenefitForm";
import { benefitTabTypes } from "../_types/settingsTypes";

const BenefitsTab = ({
  benefitFormik,
  createBenefit,
  newBenefit,
  setNewBenefit,
  benefits,
  createBenefitLoading,
}: benefitTabTypes) => {
  return (
    <div className={`flex flex-col gap-[32px] w-full`}>
      <div className={`flex flex-col gap-[20px]`}>
        <h3
          className={`text-[#777777] font-inter font-[600] text-[14px] leading-[22px] tracking-[0.25px]`}
        >
          BENEFIT INFORMATION
        </h3>
        <div className={`w-full flex flex-wrap gap-3`}>
          {benefits.map((benefit) => (
            <BenefitForm
              benefitId={benefit.benefitId}
              benefitTitle={benefit.benefitTitle}
              benefitWriteUp={benefit.benefitWriteUp}
              key={benefit.benefitId}
            />
          ))}
          <div className="flex flex-col gap-[10px] max-w-[572px] w-full">
            {!newBenefit && (
              <Button
                className={`text-[#222B2E] flex items-center gap-1 font-square font-[700] text-[14px] focus:ring-0 leading-[22px] tracking-[0.25px] border-b border-b-[white] px-1 hover:border-b-[#222B2E] max-w-[170px] w-full rounded-b-md`}
                onClick={() => setNewBenefit(true)}
              >
                ADD NEW BENEFIT <Plus width={12} color="#222B2E" />
              </Button>
            )}

            {newBenefit && (
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
                    name={`benefitTitle`}
                    id="benefitTitle"
                    onChange={benefitFormik.handleChange}
                    onBlur={benefitFormik.handleBlur}
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
                    name={`benefitWriteUp`}
                    id="benefitWriteUp"
                    onChange={benefitFormik.handleChange}
                    onBlur={benefitFormik.handleBlur}
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
                <div className={`flex gap-[12px] ms-auto`}>
                  <Button
                    disabled={createBenefitLoading}
                    className={`border border-[#8D1510] text-[#8D1510] font-square font-[400] text-[12px] leading-[16px] focus:ring-0 tracking-[0.3px] rounded-[20px] py-[8px] px-[16px]`}
                    onClick={() => {
                      setNewBenefit(false);
                      benefitFormik.resetForm();
                    }}
                  >
                    CANCEL
                  </Button>
                  <Button
                    loading={createBenefitLoading}
                    className={`border border-[#11975D] text-[#11975D] font-square font-[400] text-[12px] leading-[16px] focus:ring-0 tracking-[0.3px] rounded-[20px] py-[8px] px-[16px] flex gap-2 `}
                    onClick={() => createBenefit()}
                  >
                    ADD <Plus color="#11975D" width={14} />
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
        {/* <Button
          // loading={true}
          // onClick={() => setVisible(true)}
          className="bg-[#11975D] w-full rounded-[20px] focus:ring-0 mt-4 font-[400] text-[12px] font-square text-white py-[14px] px-[24px] hover:scale-105 flex items-center justify-center gap-2 leading-[16px] tracking-[0.3px]"
        >
          PUBLISH <ArrowRight />
        </Button> */}
      </div>
    </div>
  );
};

export default BenefitsTab;
