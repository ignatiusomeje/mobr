// "use client";
// import {
//   FileUpload,
//   // FileUploadFile,
//   // FileUploadProps,
//   ItemTemplateOptions,
// } from "primereact/fileupload";
// import React, { useRef } from "react";
// // import EmptyTemplate from './_Components/EmptyTemplate'
// import HeaderTemplate from "./_Components/HeaderTemplate";
// import { Button } from "primereact/button";
// import { ImageIcon, Trash } from "lucide-react";
// import Image from "next/image";

// const Page = () => {
//   const fileUploadRef = useRef<FileUpload>(null);

//   console.log(fileUploadRef, 'heyyyyyyyy')

//   const EmptyTemplate = () => {
//     // Props: FileUploadProps
//     // const { chooseButton } = options;
//     // options: FileUploadHeaderTemplateOptions

//     return (
//       <div
//         className={`flex flex-col size-full items-center justify-center gap-9`}
//       >
//         <ImageIcon width={64} height={64} />
//         <div className="">
//           <p
//             className={`text-[#1B2E35] font-inter text-[18px] font-[400] leading-[26px] tracking-[0.20000000298023224px]`}
//           >
//             Drag and drop images. Or{" "}
//             {/* <span onClick={()=> fileUploadRef && fileUploadRef.current?.setUploadedFiles() }>hello</span> */}
//             <label
//               htmlFor="upload"
//               className={`text-[#11975D] font-square text-[16px] font-[400] leading-[24px] tracking-[0.25px]`}
//               onClick={() => fileUploadRef?.current && fileUploadRef.current.getInput().click()}
//             >
//               Browse
//               {/* <input name="upload" type="file"
//             id="upload"
//             accept="image/*" multiple className={`hidden`} onChange={e => fileUploadRef && fileUploadRef.current?.onFileSelect({originalEvent:e})} /> */}
//               {/* {chooseButton} */}
//             </label>
//           </p>
//           <p
//             className={`text-[#777777] font-inter text-[14px] font-[400] leading-[22px] tracking-[0.25px]`}
//           >
//             Note: Image must be maximum of 20mb.
//           </p>
//         </div>
//         <Button
//           type="button"
//           disabled
//           className={`w-full focus:ring-0 font-square text-[10px] font-[400] leading-[18px] tracking-[0.4000000059604645px]  bg-[#C6C6C6] flex justify-center items-center mt-auto py-[8px] px-[14px] rounded-[20px]`}
//         >
//           Continue
//         </Button>
//       </div>
//     );
//   };

//   const ItemTemplate = (inFile: object, prop: ItemTemplateOptions) => {
//     const file = inFile as unknown as File;
//     // {console.log(prop., 'another one')}
//     return (
//       <div
//         className={`flex flex-col rounded-[8px] .h-[182px] max-w-[218px] w-full .items-center justify-center gap-9`}
//       >
//         <div
//           className={`h-[160px] rounded-[8px] max-w-[218px] w-full shadow-sm`}
//         >
//           <Image
//             alt={file.name}
//             src={file?.objectURL}
//             width={218}
//             height={160}
//             className="w-full rounded-[8px]"
//           />
//         </div>
        
//         <span></span>
//         <Trash color="red" width={18} className="mx-auto cursor-pointer" onClick={(e) => prop.onRemove(e)} />
//       </div>
//     );
//   };

//   return (
//     <div className={`p-[20px]`}>
//       <FileUpload
//       ref={fileUploadRef}
//         accept="image/*"
//         emptyTemplate={EmptyTemplate}
//         headerTemplate={HeaderTemplate}
//         maxFileSize={2000000}
//         multiple
//         itemTemplate={ItemTemplate}
//         contentClassName={`flex gap-5`}
//       />
//       <Button></Button>
//       <div>
//       <Button>Sav</Button>
//       <Button></Button>
//       </div>
//     </div>
//   );
// };

// export default Page;
