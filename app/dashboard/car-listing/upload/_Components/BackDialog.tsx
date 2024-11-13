// import { indexInput } from "@/types/indexPage";
import { Button } from "primereact/button";
// import { Button } from 'primereact/button';
import { Dialog } from "primereact/dialog";
import React from "react";

const BackDialog = ({ visible, setVisible }: {visible: boolean;
  setVisible: (e: boolean) => void;}) => {
  return (
    // <div className=".card .flex .justify-content-center">
    <Dialog
      visible={visible}
      modal
      className="rounded-[20px]"
      onHide={() => {
        if (!visible) return;
        setVisible(false);
      }}
      content={({ hide }) => (
        <div className="bg-white max-w-[520px] w-full p-[32px] rounded-[20px]">
          <h2
            className={`font-square text-[#350F04] leading-[21.68px] text-[18px] font-[700] tracking-[-0.10000000149011612px] text-center`}
          >
            ARE YOU SURE YOU WANT TO EXIT?
          </h2>
          <p
            className={`font-inter text-center text-[#1B1B1B] text-[14px] font-[400] tracking-[0.25px] leading-[22px]`}
          >
            Your progress/changes won’t be saved. Click on ‘cancel’ to go back
            and save your progress/changes.
          </p>
          <div className={`flex mt-5 gap-[8px] items-center text-center`}>
            <Button
              onClick={(e) => hide(e)}
              className={`border focus:ring-0 flex items-center justify-center font-square text-[12px] font-[400] leading-[16px] tracking-[0.30000001192092896px] text-[#8D1510] max-w-[224px] w-full border-[#8D1510] py-[8px] px-[14px] rounded-[20px]`}
            >
              Cancel
            </Button>
            <Button
              onClick={(e) => hide(e)}
              className={`font-square flex items-center justify-center text-[12px] font-[400] leading-[16px] tracking-[0.30000001192092896px] text-[#FFFFFF] max-w-[224px] w-full bg-[#8D1510] py-[8px] px-[14px] focus:ring-0 rounded-[20px]`}
            >
              Yes, Exit
            </Button>
          </div>
        </div>
      )}
    ></Dialog>
    // </div>
  );
};

export default BackDialog;
