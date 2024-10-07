import { ImageIcon } from "lucide-react";
import { Button } from "primereact/button";
// import { FileUploadProps } from "primereact/fileupload";
// import { FileUploadHeaderTemplateOptions } from "primereact/fileupload";
import React from "react";

const EmptyTemplate = () => {
  // Props: FileUploadProps
  // const { chooseOptions } = Props;
  // options: FileUploadHeaderTemplateOptions

  return (
    <div
      className={`flex flex-col size-full items-center justify-center gap-9`}
    >
      <ImageIcon width={64} height={64} />
      <div className="">
        <p
          className={`text-[#1B2E35] font-inter text-[18px] font-[400] leading-[26px] tracking-[0.20000000298023224px]`}
        >
          Drag and drop images. Or{" "}
          {/* <span onClick={(e)=> }>check</span> */}
          {/* <label
            htmlFor="upload"
            className={`text-[#11975D] font-square text-[16px] font-[400] leading-[24px] tracking-[0.25px]`}
          > */}
            {/* Browse */}
            {/* <input name="upload" type="file"
          id="upload"
          accept="image/*" multiple className={`hidden`} onChange={(e) => Props && Props?.onSelect && Props.onSelect({originalEvent: e})} /> */}
            {/* {chooseButton} */}
          {/* </label> */}
        </p>
        <p
          className={`text-[#777777] font-inter text-[14px] font-[400] leading-[22px] tracking-[0.25px]`}
        >
          Note: Image must be maximum of 20mb.
        </p>
      </div>
      <Button
        type="button"
        disabled
        className={`w-full focus:ring-0 font-square text-[10px] font-[400] leading-[18px] tracking-[0.4000000059604645px]  bg-[#C6C6C6] flex justify-center items-center mt-auto py-[8px] px-[14px] rounded-[20px]`}
      >
        Continue
      </Button>
    </div>
  );
};

export default EmptyTemplate;
