import { Loader, X } from "lucide-react";
import { Dialog } from "primereact/dialog";
import React from "react";
import DamageReportCard from "./DamageReportCard";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { showDamageReportPop } from "../_Data/BookingSlice";

const DamageReportPop = () => {
  const showDamageReport = useAppSelector(
    (state) => state.bookings.showDamageReport
  );
  const vehicleDamageReport = useAppSelector(
    (state) => state.bookings.vehicleDamageReport
  );
  const getAVehicleDamageReportLoading = useAppSelector(
    (state) => state.bookings.getAVehicleDamageReportLoading
  );

  const dispatch = useAppDispatch();
  return (
    <Dialog
      visible={showDamageReport}
      // visible
      className={`rounded-[20px] max-h-lvh h-full mb-10 mt-10 max-w-[790px] w-full`}
      modal
      onHide={() => {
        if (!showDamageReport) return;
        dispatch(showDamageReportPop({ show: false }));
      }}
      content={({ hide }) => (
        <div
          className={`rounded-[20px] px-[32px] h-full flex flex-col gap-[20px] bg-[#F9F9F9] pt-[32px] pb-[60px] border border-[#C6C6C6]`}
        >
          <div className={`flex justify-between items-center`}>
            <h4
              className={`font-square font-[700] text-[14px] leading-[22px] tracking-[0.25px] text-[#11975D]`}
            >
              DAMAGE REPORT
            </h4>
            <X
              className={`cursor-pointer`}
              width={16}
              color="#8D1510"
              onClick={(e) => hide(e)}
            />
          </div>
          {getAVehicleDamageReportLoading ? (
            <div
              className={`w-full h-full flex justify-center items-center`}
            >
              <Loader className={`animate-spin w-[50px] h-[50px]`} />
            </div>
          ) : vehicleDamageReport.length > 0 ? (
            <div
              className={`flex gap-[40px] flex-col flex-grow flex-1 overflow-y-scroll noScroll`}
            >
              {vehicleDamageReport.map((report) => (
                <DamageReportCard report={report} key={report.damageReportId} />
              ))}
            </div>
          ) : (
            <div>No Damage Report for this Booking</div>
          )}
        </div>
      )}
    ></Dialog>
  );
};

export default DamageReportPop;
