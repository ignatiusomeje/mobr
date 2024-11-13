"use client";
import React, { useState } from "react";
import EmptyTemplate from "./_Components/EmptyTemplate";
import HeaderTemplate from "./_Components/HeaderTemplate";
import { Button } from "primereact/button";
import { ArrowRight, PlusCircle } from "lucide-react";
import { useDropzone } from "react-dropzone";
import SingleImage from "./_Components/SingleImage";
import UploadDetailsPop from "./_Components/UploadDetailsPop";

type FileWithPreview = File & {
  preview: string;
}

const Page = () => {
  const [filesToUpload, setFilesToUpload] = useState<FileWithPreview[]>([]);

  // const onDrop = useCallback((acceptedFiles) => {

  // },[]);
  console.log(filesToUpload[0], "heyyyyy")
  console.log(typeof filesToUpload, "heyyyyy")
  const { getInputProps, getRootProps } = useDropzone({
    accept: {
      "images/*": [],
    },
    onDrop: (acceptedImages) => {
      setFilesToUpload((prev) =>
        prev.length === 0
          ? acceptedImages.map((file) =>
              Object.assign(file, { preview: URL.createObjectURL(file) })
            )
          : [
              ...prev,
              ...acceptedImages.map((file) =>
                Object.assign(file, { preview: URL.createObjectURL(file) })
              ),
            ]
      );
    },
    maxSize: 20000000,
    noClick: true,
  });

  return (
    <div className={`flex flex-col h-screen p-[20px]`}>
      <HeaderTemplate total={filesToUpload.length} />
      <div
        {...getRootProps({
          className: `flex-grow flex-1 overflow-y-scroll pb-7 noScroll`,
        })}
      >
        {filesToUpload.length === 0 ? (
          <EmptyTemplate btnUpload={getInputProps} />
        ) : (
          <div className={`flex flex-wrap items-center gap-[16px] mt-3`}>
            {filesToUpload.map((file) => (
              <SingleImage key={file.name} src={file.preview} />
            ))}
            <label
              htmlFor="uploadImage"
              className={`flex justify-center items-center w-full max-w-[218px] h-[182px] rounded-[8px] cursor-pointer bg-[#E2E2E2]`}
            >
              <PlusCircle width={32} />
              <input
                name="uploadImage"
                type="file"
                id="uploadImage"
                accept="image/*"
                multiple
                {...getInputProps()}
                className={`hidden`}
              />
            </label>
          </div>
        )}
      </div>

      <Button
        disabled={false}
        className={`disabled:bg-[#C6C6C6] bg-[#11975D] rounded-[20px] py-[8px] flex items-center justify-center w-full gap-[8px] px-[14px] font-square font-[400] text-[10px] leading-[18px] tracking-[0.4px] text-[#FFFFFF]`}
      >
        Continue <ArrowRight width={14} />
      </Button>
      <UploadDetailsPop />
    </div>
  );
};

export default Page;
