import { successPopType } from "@/types/carlisting";
import { CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import React from "react";
import { clearLoading } from "../../_Data/CarSlice";
import { useAppDispatch } from "@/store/hooks";

const SuccessPop = ({ visible, setVisible }: successPopType) => {
  const router = useRouter();
  const dispatch = useAppDispatch()
  return (
    <Dialog
      visible={visible.visible}
      // visible
      className={`rounded-[20px] max-w-[520px] w-full`}
      modal
      onHide={() => {
        if (!visible) return;
        setVisible(() => ({isDraft: false, visible: false }));
      }}
      content={({ hide }) => (
        <div
          className={`rounded-[20px] p-[32px] h-full flex flex-col gap-[32px] bg-[#F9F9F9] border border-[#C6C6C6]`}
        >
          <div className={`flex flex-col items-center gap-[12px]`}>
            <CheckCircle color="#11975D" />
            <div className={`flex flex-col items-center gap-[12px]`}>
              <h5
                className={`font-square font-[700] text-[16px] leading-[19.27px] -tracking-[0.1px] text-[#11975D]`}
              >
                {visible.isDraft ? `SAVED TO DRAFT!` : `PUBLISH SUCCESSFUL!`}
              </h5>
              <p
                className={`text-[#1B1B1B] font-inter font-[400] text-[12px] leading-[20px] tracking-[0.3px]`}
              >
                {visible.isDraft
                  ? `Your progress has been successfully saved to draft.`
                  : `Vehicle has been published successfully.`}
              </p>
            </div>
          </div>
          <Button
            onClick={(e) => {
              hide(e);
              const url = visible.isDraft
                ? "/dashboard/drafts"
                : "/dashboard/car-listing";
              router.push(url);
              dispatch(clearLoading())
            }}
            className={`text-[#11975D] mx-auto focus:ring-0 font-square text-[14px] font-[400] leading-[22px] tracking-[0.25px]`}
          >
            Ok
          </Button>
        </div>
      )}
    ></Dialog>
  );
};

export default SuccessPop;
