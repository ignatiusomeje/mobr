import { Button } from "primereact/button";
import { OverlayPanel } from "primereact/overlaypanel";
import React, { useRef } from "react";
import {
  bookingResponseType,
  bookingState,
  getDestinationLocationInput,
} from "../_Types/BookingTypes";
import { useAppDispatch } from "@/store/hooks";
import { setCurrentBooking, showBookingPop } from "../_Data/BookingSlice";
import { customerIDInputType } from "@/app/(Login)/_types/loginTypes";
import {
  deleteCarInputType,
  getAllCarFeatureInputTypes,
} from "../../car-listing/_types/CarType";
import { useChangeBookingStateMutation } from "../_Data/BookingAPI";

const OverlayButton = ({
  value,
  GetACarByIdTrigger,
  GetOneCustomerTrigger,
  GetAllCarFeatureTrigger,
  GetDestinationLocationQuery,
}: {
  value: bookingResponseType;
  GetACarByIdTrigger: (info: deleteCarInputType) => void;
  GetOneCustomerTrigger: (info: customerIDInputType) => void;
  GetAllCarFeatureTrigger: (info: getAllCarFeatureInputTypes) => void;
  GetDestinationLocationQuery: (info: getDestinationLocationInput) => void;
}) => {
  const options = useRef<OverlayPanel>(null);
  const [ChangeBookingStateMutation] = useChangeBookingStateMutation();
  const dispatch = useAppDispatch();

  return (
    <div className="relative">
      <Button
        className={`focus:ring-0`}
        icon="pi pi-ellipsis-v"
        onClick={(e) => options?.current?.toggle(e)}
      />
      <OverlayPanel
        ref={options}
        closeOnEscape
        dismissable={true}
        className={` bg-[#F1F1F1] max-w-[131px] w-full`}
      >
        <Button
          onClick={() => {
            dispatch(showBookingPop({ show: true }));
            dispatch(setCurrentBooking(value));
            GetACarByIdTrigger({ vehicleId: value.vehichleId });
            GetOneCustomerTrigger({ id: value.customerId });
            GetAllCarFeatureTrigger({ vehicleId: value.vehichleId });
            GetDestinationLocationQuery({ locationId: value.geolocationId });
          }}
          className={`text-[#222B2E] w-full hover:bg-[#DDE4E6] hover:cursor-pointer block font-square focus:ring-0 text-[16px] font-[400] py-[10px] px-[12px]`}
        >
          View
        </Button>
        {value.isPaid && value.bookingState !== bookingState.Booked && (
          <Button
            className={`text-[#222B2E] w-full hover:bg-[#DDE4E6] hover:cursor-pointer block font-square focus:ring-0 text-[16px] font-[400] py-[10px] px-[12px]`}
            onClick={() =>
              ChangeBookingStateMutation({
                bookingState: bookingState.Booked,
                bookingId: value.bookingId,
                vehichleId: value.vehichleId,
              })
            }
          >
            Approve
          </Button>
        )}
        {value.bookingState !== bookingState.Cancelled && (
          <Button
            className={`text-[#8D1510] w-full block hover:bg-[#DDE4E6] hover:cursor-pointer font-square focus:ring-0 text-[16px] font-[400] py-[10px] px-[12px]`}
            onClick={() =>
              ChangeBookingStateMutation({
                bookingState: bookingState.Cancelled,
                bookingId: value.bookingId,
                vehichleId: value.vehichleId,
              })
            }
          >
            Cancel
          </Button>
        )}
      </OverlayPanel>
    </div>
  );
};

export default OverlayButton;
