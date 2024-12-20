import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Image from "next/image";
import { Dialog } from "primereact/dialog";
import React from "react";
import { showLicense } from "../_Data/BookingSlice";
import { X } from "lucide-react";

const LicensePop = () => {
  const dispatch = useAppDispatch();
  const show = useAppSelector((state) => state.bookings.showLicense);
  const licenseURL = useAppSelector((state) => state.bookings.licenseURL);
  return (
    <Dialog
      className={`mx-5 rounded-[10px]`}
      visible={show}
      modal
      onHide={() => {
        if (!show) return;
        dispatch(showLicense({ show: false }));
      }}
      content={({ hide }) => (
        <div
          className={`bg-white overflow-hidden rounded-[10px] p-3 relative`}
        >
          <div className={`flex justify-end pb-2 items-center`}>
            
            <X
              className={`cursor-pointer`}
              width={16}
              color="#8D1510"
              onClick={(e) => hide(e)}
            />
          </div>
          {/* <X
            onClick={(e) => hide(e)}
            className={`ms-auto cursor-pointer bg-white absolute hover:scale-125  top-1 end-1 text-red-700 .translate-x-1/2`}
          /> */}

          <Image
            src={licenseURL}
            priority
            alt="license"
            width={424}
            height={424}
          />
        </div>
      )}
    ></Dialog>
  );
};

export default LicensePop;
