// import { indexInput } from "@/types/indexPage";
import { X } from "lucide-react";
import { Dialog } from "primereact/dialog";
import React from "react";
// import UserInfo from "./UserInfo";
// import CarInfo from "./CarInfo";
import CarInfo from "./CarInfo";
// import CarInfo from "../../bookings/_Components/CarInfo";
// import { showBookingPop } from "../_Data/BookingSlice";

const CarViewPop = ({
  // GetOneCustomer,
  showVehicle,
  GetACarById,
  GetAllCarFeature,
  setShowVehicle,
}: {
  showVehicle: boolean;
  GetACarById: boolean;
  // GetOneCustomer: boolean;
  GetAllCarFeature: boolean;
  setShowVehicle: () => void;
}) => {
  // const dispatch = useAppDispatch()
  // showBookingHistory
  // showBookingPop
  return (
    <Dialog
      visible={showVehicle}
      // visible
      className={`rounded-[20px] .max-h-lvh .h-full mb-10 mt-10 max-w-[790px] w-full`}
      modal
      onHide={() => {
        if (!showVehicle) return;
        setShowVehicle();
        // dispatch(showBookingPop({show: false}))
      }}
      content={({ hide }) => (
        <div
          className={`rounded-[20px] px-[32px] h-full noScroll overflow-y-scroll flex flex-col gap-[20px] bg-[#F9F9F9] pt-[32px] pb-[60px] border border-[#C6C6C6]`}
        >
          <div className={`flex justify-between items-center`}>
            <h4
              className={`font-square font-[700] text-[14px] leading-[22px] tracking-[0.25px] text-[#11975D]`}
            >
              {/* BOOKING HISTORY */}
            </h4>
            <X
              className={`cursor-pointer`}
              width={16}
              color="#8D1510"
              onClick={(e) => hide(e)}
            />
          </div>
          <div
            className={`flex gap-[40px] flex-grow flex-1 overflow-y-scroll noScroll`}
          >
            <CarInfo
              GetAllCarFeature={GetAllCarFeature}
              GetACarById={GetACarById}
            />
            {/* <UserInfo GetOneCustomer={GetOneCustomer} /> */}
          </div>
        </div>
      )}
    ></Dialog>
  );
};

export default CarViewPop;
