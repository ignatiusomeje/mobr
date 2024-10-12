import { ArrowRight, Asterisk, Plus } from "lucide-react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import React from "react";

const BenefitsTab = () => {
  return (
    <div className={`flex flex-col gap-[32px] w-full`}>
      <div className={`flex flex-col gap-[20px]`}>
        <h3
          className={`text-[#777777] font-inter font-[600] text-[14px] leading-[22px] tracking-[0.25px]`}
        >
          BENEFIT INFORMATION
        </h3>
        <div className="flex flex-col gap-[10px] max-w-[572px] w-full">
          <Button
            className={`text-[#222B2E] flex items-center gap-1 font-square font-[700] text-[14px] leading-[22px] tracking-[0.25px] border-b border-b-[white] px-1 hover:border-b-[#222B2E] max-w-[170px] w-full rounded-b-md`}
          >
            ADD NEW BENEFIT <Plus width={12} color="#222B2E" />
          </Button>
          <form action="" className={`flex flex-col gap-[18px]`}>
            <div className="flex flex-col gap-[10px]">
              <label htmlFor="title" className={`text-[#1B1B1B] font-inter font-[600] text-[10px] leading-[16px] tracking-[0.4px] flex items-center`}>
                Title <Asterisk color="red" width={14} />
              </label>
              <InputText
                type="text"
                variant="outlined"
                className="p-inputtext-sm py-[12px] focus:ring-0 px-[14px] rounded-[20px] border border-[#C6C6C6]"
                placeholder="Enter title"
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <label htmlFor="description" className={`text-[#1B1B1B] font-inter font-[600] text-[10px] leading-[16px] tracking-[0.4px] flex items-center`}>
                Enter description <Asterisk color="red" width={14} />
              </label>
              <InputTextarea
              rows={5}
                variant="outlined"
                className="p-inputtext-sm py-[12px] focus:ring-0 px-[14px] rounded-[20px] border border-[#C6C6C6] resize-none"
                placeholder="Enter description"
              />
            </div>
            <div className={`flex gap-[12px] ms-auto`}>
              <Button
                className={`border border-[#8D1510] text-[#8D1510] font-square font-[400] text-[12px] leading-[16px] tracking-[0.3px] rounded-[20px] py-[8px] px-[16px]`}
              >
                CANCEL
              </Button>
              <Button
                className={`border border-[#11975D] text-[#11975D] font-square font-[400] text-[12px] leading-[16px] tracking-[0.3px] rounded-[20px] py-[8px] px-[16px] flex gap-2 `}
              >
                ADD <Plus color="#11975D" width={14} />
              </Button>
            </div>
          </form>
        </div>
          <Button
            // loading={true}
            // onClick={() => setVisible(true)}
            className="bg-[#11975D] w-full rounded-[20px] focus:ring-0 mt-4 font-[400] text-[12px] font-square text-white py-[14px] px-[24px] hover:scale-105 flex items-center justify-center gap-2 leading-[16px] tracking-[0.3px]"
          >
            PUBLISH <ArrowRight />
          </Button>
      </div>
    </div>
  );
};

export default BenefitsTab;
