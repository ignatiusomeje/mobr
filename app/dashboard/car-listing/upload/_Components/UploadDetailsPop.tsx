import { ArrowLeft, Bookmark, Check, Eye, EyeOff, X } from "lucide-react";
import { Dialog } from "primereact/dialog";
import React, { useState } from "react";
import VehicleInformation from "./VehicleInformation";
import VehicleFeatures from "./VehicleFeatures";
import SuccessPop from "./SuccessPop";
import { uploadDetailsPopType } from "../../_types/CarType";
import { Button } from "primereact/button";

const UploadDetailsPop = ({
  setVisible,
  visible,
  newCarFormik,
}: uploadDetailsPopType) => {
  // const [visible, setVisible] = useState(false);
  const [success, setSuccess] = useState<{
    visible: boolean;
    isDraft: boolean;
  }>({
    visible: false,
    isDraft: false,
  });
  return (
    <Dialog
      visible={visible}
      // visible
      className={`rounded-[20px] max-h-lvh .flex .justify-center .items-center h-full mb-10 mt-10 max-w-[1100px] w-full`}
      modal
      onHide={() => {
        if (!visible) return;
        setVisible(false);
      }}
      content={({ hide }) => (
        <div
          className={`rounded-[20px] px-[32px] h-max flex flex-col gap-[20px] bg-[#F9F9F9] pt-[32px] pb-[60px] border border-[#C6C6C6]`}
        >
          <div className={`flex justify-between items-center`}>
            <p
              className={`text-[#11975D] flex items-center gap-3 font-square text-[14px] font-[700] leading-[22px] tracking-[0.25px]`}
            >
              <ArrowLeft
                onClick={() => setVisible(true)}
                width={16}
                className={`cursor-pointer`}
              />{" "}
              ADD NEW CAR
            </p>
            <div className={`flex gap-[40px] items-center`}>
              <p
                className={`gap-[4px] cursor-pointer border-b border-b-[#F9F9F9] hover:border-b-[#222B2E] hover:rounded-b-sm flex items-center`}
              >
                Make car {true ? `invisible ` : `visible `}{" "}
                {true ? <EyeOff width={12} /> : <Eye width={12} />}
              </p>
              <X
                className={`cursor-pointer`}
                width={16}
                color="#8D1510"
                onClick={(e) => hide(e)}
              />
            </div>
          </div>
          <div
            className={`flex .gap-[32px] flex-grow flex-col h-full flex-1 overflow-y-scroll noScroll`}
          >
            <VehicleInformation newCarFormik={newCarFormik} />
            <VehicleFeatures />
            <Button
              className={`.text-[#8D1510] w-max h-max text-white font-square font-[400] text-[14px] leading-[22px] tracking-[0.25px]`}
            >
              DELETE CAR
            </Button>
            <div className={`flex items-center gap-[8px] .p-[24px]`}>
              <Button
                className={`w-full flex justify-center items-center focus:ring-0 rounded-[20px] border border-[#11975D] gap-[8px] py-[8px] px-[14px] text-[#11975D] font-[400] font-square text-[10px] leading-[18px] tracking-[0.4px]`}
                onClick={() =>
                  setSuccess((prev) => ({
                    ...prev,
                    visible: true,
                    isDraft: true,
                  }))
                }
              >
                SAVE TO DRAFT <Bookmark width={14} />
              </Button>
              <Button
                className={`w-full flex justify-center items-center focus:ring-0 gap-[8px] py-[8px] px-[14px] rounded-[20px] bg-[#11975D] hover:bg-[#3A494F] text-[#FFFFFF] font-[400] font-square text-[10px] leading-[18px] tracking-[0.4px]`}
                onClick={() =>
                  setSuccess((prev) => ({
                    ...prev,
                    visible: true,
                    isDraft: false,
                  }))
                }
              >
                PUBLISH <Check width={14} />
              </Button>
            </div>
          </div>
          <SuccessPop visible={success} setVisible={setSuccess} />
        </div>
      )}
    ></Dialog>
  );
};

export default UploadDetailsPop;
