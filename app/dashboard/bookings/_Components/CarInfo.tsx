import React from "react";
import CarImages from "./CarImages";
import VehicleInfo from "./VehicleInfo";
import { Button } from "primereact/button";
import { ArrowRight, Loader } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  showBookingHistory,
  showBookingPop,
  showDamageReportPop,
} from "../_Data/BookingSlice";
import {
  useLazyGetAllBookingsByAUserQuery,
  useLazyGetAVehicleDamageReportQuery,
} from "../_Data/BookingAPI";

const CarInfo = ({
  GetACarById,
  GetAllCarFeature,
  GetDestinationLocation,
}: {
  GetACarById: boolean;
  GetAllCarFeature: boolean;
  GetDestinationLocation: boolean;
}) => {
  const carFetched = useAppSelector((state) => state.bookings.carFetchedById);
  const selectedBooking = useAppSelector(
    (state) => state.bookings.currentBooking
  );
  const [GetAllBookingsByAUserTrigger] = useLazyGetAllBookingsByAUserQuery();
  const [GetAVehicleDamageReportQuery] = useLazyGetAVehicleDamageReportQuery();
  const dispatch = useAppDispatch();
  // const slides = [
  //   "/images/acura.jpg",
  //   "/images/customer.jpg",
  //   "/images/acura.jpg",
  //   "/images/acura.jpg",
  // ];
  return GetACarById || GetDestinationLocation ? (
    <div
      className={`max-w-[430px] w-full h-full flex justify-center items-center`}
    >
      <Loader className={`animate-spin w-[50px] h-[50px]`} />
    </div>
  ) : (
    <div className={`max-w-[430px] w-full`}>
      <CarImages
        carFetched={carFetched}
        images={carFetched.vehicleImages.map((image) => image.vehicleImageUrl)}
      />
      <VehicleInfo
        GetAllCarFeature={GetAllCarFeature}
        carFetched={carFetched}
      />
      <Button
        onClick={() => {
          GetAVehicleDamageReportQuery({
            BookingId: selectedBooking.bookingId,
          });
          dispatch(showDamageReportPop({ show: true }));
          dispatch(showBookingPop({ show: false }));
        }}
        className={`text-[#350F04] flex items-center gap-[4px] py-[12px] focus:ring-0 font-square font-[400] text-[14px] leading-[22px] tracking-[0.25px]`}
      >
        View car damage reports <ArrowRight color="#350F04" width={12} />
        {/* (5) */}
      </Button>
      <Button
        onClick={() => {
          GetAllBookingsByAUserTrigger({
            accountId: selectedBooking.customerId.toString(),
          });
          dispatch(showBookingHistory({ show: true }));
          dispatch(showBookingPop({ show: false }));
        }}
        className={`text-[#350F04] py-[12px] flex items-center gap-[4px] focus:ring-0 font-square font-[400] text-[14px] leading-[22px] tracking-[0.25px]`}
      >
        View customer booking history <ArrowRight color="#350F04" width={12} />
      </Button>
    </div>
  );
};

export default CarInfo;
