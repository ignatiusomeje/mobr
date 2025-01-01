import { CalendarDays, CarFront, Loader, MapPin, Timer } from "lucide-react";
import { Button } from "primereact/button";
import React, { useState } from "react";
import StatusCard from "./StatusCard";
import { getByIdFormikFormat } from "../../car-listing/_types/CarType";
import { useAppSelector } from "@/store/hooks";
import moment from "moment";
import { bookingState } from "../_Types/BookingTypes";
import Feature from "./Feature";

const VehicleInfo = ({
  carFetched,
  GetAllCarFeature,
}: {
  carFetched: getByIdFormikFormat;
  GetAllCarFeature: boolean;
}) => {
  const selectedBooking = useAppSelector(
    (state) => state.bookings.currentBooking
  );
  const location = useAppSelector((state) => state.bookings.location);
  const [showFeatures, setShowFeatures] = useState<boolean>(false);
  const features = useAppSelector((state) => state.bookings.features);
  const [showMore, setShowMore] = useState<boolean>(false);
  return (
    <div>
      <div
        className={`py-[16px] border-b border-b-[#E2E2E2] flex flex-col gap-[8px]`}
      >
        <h5
          className={`text-[#1B2E35] font-inter text-[12px] font-[600] leading-[20px] tracking-[0.3px]`}
        >
          VEHICLE ID
        </h5>
        <p
          className={`text-[#777777] font-inter text-[10px] font-[400] leading-[14px] tracking-[0.4px] `}
        >
          {carFetched?.vehicleId}
        </p>
      </div>
      <div
        className={`py-[16px] border-b border-b-[#E2E2E2] flex flex-col gap-[8px]`}
      >
        <h5
          className={`text-[#1B2E35] font-inter text-[12px] font-[600] leading-[20px] tracking-[0.3px]`}
        >
          VEHICLE YEAR
        </h5>
        <p
          className={`text-[#777777] font-inter text-[10px] font-[400] leading-[14px] tracking-[0.4px] `}
        >
          {carFetched?.vehicleYear}
        </p>
      </div>
      <div
        className={`py-[16px] border-b border-b-[#E2E2E2] flex flex-col gap-[8px]`}
      >
        <h5
          className={`text-[#1B2E35] font-inter text-[12px] font-[600] leading-[20px] tracking-[0.3px]`}
        >
          CONDITION
        </h5>
        <p
          className={`text-[#777777] font-inter text-[10px] font-[400] leading-[14px] tracking-[0.4px] `}
        >
          {carFetched?.vehicleCondition}
        </p>
      </div>
      <div
        className={`py-[16px] border-b border-b-[#E2E2E2] flex flex-col gap-[8px]`}
      >
        <h5
          className={`text-[#1B2E35] font-inter text-[12px] font-[600] leading-[20px] tracking-[0.3px]`}
        >
          DESCRIPTION
        </h5>
        <p
          className={`text-[#777777]  ${
            !showMore && `text-ellipsis line-clamp-4`
          } font-inter text-[10px] font-[400] leading-[14px] tracking-[0.4px] `}
        >
          {carFetched?.vehicleDescription}
        </p>
        {showMore ? (
          <Button
            onClick={() => setShowMore(false)}
            className={`text-[#11975D] focus:ring-0 max-w-[65px] w-full font-inter text-[10px] font-[500] leading-[16px] tracking-[0.4px]`}
          >
            Read less
          </Button>
        ) : (
          <Button
            onClick={() => setShowMore(true)}
            className={`text-[#11975D] focus:ring-0 max-w-[65px] w-full font-inter text-[10px] font-[500] leading-[16px] tracking-[0.4px]`}
          >
            Read more
          </Button>
        )}
      </div>
      <div
        className={`py-[16px] border-b border-b-[#E2E2E2] flex flex-col gap-[8px]`}
      >
        <h5
          className={`text-[#303030] font-inter text-[12px] font-[600] leading-[20px] tracking-[0.3px]`}
        >
          TRIP DATES
        </h5>
        <div className={`flex gap-[8px] text-[#303030]`}>
          <CalendarDays width={14} color="#474747" />
          <div className={`flex flex-col gap-[12px]`}>
            <div className={`flex gap-[12px] items-center`}>
              <div className={`font-inter font-[400]`}>
                <p className={`text-[14px] tracking-[0.25px] leading-[22px]`}>
                  {moment(selectedBooking?.startDate).format("MMM D, YYYY")}
                </p>
                {/* <p
                  className={`text-[12px] tracking-[0.3px] leading-[20px] text-center`}
                >
                  7:00am
                </p> */}
              </div>
              <span
                className={`font-inter text-[12px] font-[600] leading-[20px] tracking-[0.3px]`}
              >
                to
              </span>
              <div className={`font-inter font-[400]`}>
                <p className={`text-[14px] tracking-[0.25px] leading-[22px]`}>
                  {moment(selectedBooking?.returnDate).format("MMM D, YYYY")}
                </p>
                {/* <p
                  className={`text-[12px] tracking-[0.3px] leading-[20px] text-center`}
                >
                  9:00am
                </p> */}
              </div>
            </div>
            <p className={`flex items-center gap-1`}>
              <Timer width={10} color="#474747" />{" "}
              <span
                className={`font-inter font-[400] text-[12px] tracking-[0.3px] leading-[20px]`}
              >
                {moment(selectedBooking?.startDate).to(
                  moment(selectedBooking?.returnDate, true)
                )}
                {/* 5days */}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div
        className={`py-[16px] border-b border-b-[#E2E2E2] text-[#303030] flex flex-col gap-[8px]`}
      >
        <h5
          className={`font-inter text-[12px] font-[600] leading-[20px] tracking-[0.3px]`}
        >
          LOCATION
          {/* PICKUP LOCATION */}
        </h5>
        <div className={`flex gap-[8px]`}>
          <MapPin width={14} color="#474747" />
          <div className={`flex flex-col gap-[12px]`}>
            <div className={`flex gap-2 items-center`}>
              <h6
                className={`font-inter font-[400] text-[14px] leading-[22px] tracking-[0.25px]`}
              >
                {location?.pickupLocationName}
              </h6>
              <span
                className={`font-inter text-[12px] font-[600] leading-[20px] tracking-[0.3px]`}
              >
                to
              </span>
              <h6
                className={`font-inter font-[400] text-[14px] leading-[22px] tracking-[0.25px]`}
              >
                {location?.destinationLocationName}
              </h6>
            </div>
            <p className={`flex items-center gap-1`}>
              <CarFront width={10} />{" "}
              <span
                className={`font-inter font-[400] text-[12px] tracking-[0.3px] leading-[20px]`}
              >
                {selectedBooking.totalDistance.toFixed(2)}km
              </span>
            </p>
          </div>
        </div>
      </div>
      <div
        className={`py-[16px] text-[#303030] border-b border-b-[#E2E2E2] flex flex-col gap-[8px]`}
      >
        <div
          className={`py-[16px] text-[#303030] border-b-[#E2E2E2] flex items-center justify-between gap-[8px]`}
        >
          <h5
            className={`font-inter text-[12px] font-[600] leading-[20px] tracking-[0.3px]`}
          >
            CAR FEATURES
          </h5>
          {!showFeatures ? (
            <Button
              onClick={() => setShowFeatures(true)}
              className={`text-[#3A494F] font-inter focus:ring-0 text-[12px] font-[500] leading-[20px] tracking-[0.3px] `}
            >
              View all
            </Button>
          ) : (
            <Button
              onClick={() => setShowFeatures(false)}
              className={`text-[#3A494F] font-inter focus:ring-0 text-[12px] font-[500] leading-[20px] tracking-[0.3px] `}
            >
              View less
            </Button>
          )}
        </div>
        {GetAllCarFeature ? (
          <div>
            <Loader className={`animate-spin h-[20px] w-[20px]`} />
          </div>
        ) : (
          showFeatures && (
            <div>
              {features?.length > 0 ? (
                features?.map((feat) => (
                  <Feature
                    title={feat.featureTitle}
                    value={feat.features[0].featureName}
                    key={feat.featureTitle}
                  />
                ))
              ) : (
                <div
                  className={`font-inter font-[400] text-[12px] leading-[20px] tracking-[0.3px] text-[#3A494F]`}
                >
                  No Feature Added to this Vehicle
                </div>
              )}
            </div>
          )
        )}
      </div>
      <div
        className={`py-[16px] border-b border-b-[#E2E2E2] text-[#303030] flex flex-col gap-[8px]`}
      >
        <h5
          className={`font-inter text-[12px] font-[600] leading-[20px] tracking-[0.3px]`}
        >
          PAYMENT DETAILS
        </h5>
        <div className={`flex justify-between items-center gap-[8px]`}>
          <div>
            <h3
              className={`font-square font-[700] text-[16px] leading-[24px] tracking-[0.25px]`}
            >
              ${selectedBooking.amountToPay}
              {/* $450 */}
            </h3>
            {selectedBooking.bookingState === bookingState.Booked && (
              <p
                className={`font-inter font-[400] text-[12px] leading-[20px] tracking-[0.3px] text-[#3A494F]`}
              >
                Paid with card
              </p>
            )}
          </div>

          <StatusCard name={selectedBooking.bookingState} />
        </div>
      </div>
    </div>
  );
};

export default VehicleInfo;
