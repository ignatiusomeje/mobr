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
      className={`mx-5`}
      visible={show}
      modal
      onHide={() => {
        if (!show) return;
        dispatch(showLicense({ show: false }));
      }}
      content={({ hide }) => (
        <div className={`bg-transparent relative`}>
          <X
            onClick={(e) => hide(e)}
            className={`ms-auto cursor-pointer absolute hover:scale-125  top-[-.8rem] end-0 translate-x-1/2`}
          />

          <Image src={licenseURL} priority alt="license" width={424} height={424} />
        </div>
      )}
    ></Dialog>
  );
};

export default LicensePop;
