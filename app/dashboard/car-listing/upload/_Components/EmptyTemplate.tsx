import { ImageIcon } from "lucide-react";
import React from "react";
import { DropzoneInputProps } from "react-dropzone";

const EmptyTemplate = (
  {btnUpload}:{btnUpload: <T extends DropzoneInputProps>(props?: T) => T}
) => {
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
          <label
            htmlFor="upload"
            className={`text-[#11975D] cursor-pointer font-square text-[16px] font-[400] leading-[24px] tracking-[0.25px]`}
          >
            Browse
            <input
              name="upload"
              type="file"
              id="upload"
              accept="image/*"
              multiple
              {...btnUpload()}
              className={`hidden`}
            />
          </label>
        </p>
        <p
          className={`text-[#777777] font-inter text-[14px] font-[400] leading-[22px] tracking-[0.25px]`}
        >
          Note: Image must be maximum of 20mb.
        </p>
      </div>
    </div>
  );
};

export default EmptyTemplate;
