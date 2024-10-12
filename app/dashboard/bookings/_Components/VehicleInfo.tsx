import { CalendarDays, CarFront, MapPin, Timer } from "lucide-react";
import { Button } from "primereact/button";
import React from "react";
import StatusCard from "./StatusCard";

const VehicleInfo = () => {
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
          MB567876545
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
          2022
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
          Must be 18+
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
          className={`text-[#777777] text-ellipsis line-clamp-4 font-inter text-[10px] font-[400] leading-[14px] tracking-[0.4px] `}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam labore
          consequatur corporis voluptas delectus odio, fuga, sint itaque totam
          eligendi culpa perspiciatis sed explicabo aliquid, quibusdam nihil
          velit illo exercitationem!
        </p>
        <Button
          className={`text-[#11975D] focus:ring-0 max-w-[65px] w-full font-inter text-[10px] font-[500] leading-[16px] tracking-[0.4px]`}
        >
          Read more
        </Button>
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
                  19th Aug
                </p>
                <p
                  className={`text-[12px] tracking-[0.3px] leading-[20px] text-center`}
                >
                  7:00am
                </p>
              </div>
              <span
                className={`font-inter text-[12px] font-[600] leading-[20px] tracking-[0.3px]`}
              >
                to
              </span>
              <div className={`font-inter font-[400]`}>
                <p className={`text-[14px] tracking-[0.25px] leading-[22px]`}>
                  23rd Aug
                </p>
                <p
                  className={`text-[12px] tracking-[0.3px] leading-[20px] text-center`}
                >
                  9:00am
                </p>
              </div>
            </div>
            <p className={`flex items-center gap-1`}>
              <Timer width={10} color="#474747" />{" "}
              <span
                className={`font-inter font-[400] text-[12px] tracking-[0.3px] leading-[20px]`}
              >
                5days
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
          PICKUP LOCATION
        </h5>
        <div className={`flex gap-[8px]`}>
          <MapPin width={14} color="#474747" />
          <div className={`flex flex-col gap-[12px]`}>
            <h6
              className={`font-inter font-[400] text-[14px] leading-[22px] tracking-[0.25px]`}
            >
              Jeu Maloches
            </h6>
            <p className={`flex items-center gap-1`}>
              <CarFront width={10} />{" "}
              <span
                className={`font-inter font-[400] text-[12px] tracking-[0.3px] leading-[20px]`}
              >
                30000km
              </span>
            </p>
          </div>
        </div>
      </div>
      <div
        className={`py-[16px] text-[#303030] border-b border-b-[#E2E2E2] flex items-center justify-between gap-[8px]`}
      >
        <h5
          className={`font-inter text-[12px] font-[600] leading-[20px] tracking-[0.3px]`}
        >
          CAR FEATURES
        </h5>
        <Button
          className={`text-[#3A494F] font-inter focus:ring-0 text-[12px] font-[500] leading-[20px] tracking-[0.3px] `}
        >
          View all
        </Button>
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
            <h3 className={`font-square font-[700] text-[16px] leading-[24px] tracking-[0.25px]`}>$450</h3>
            <p className={`font-inter font-[400] text-[12px] leading-[20px] tracking-[0.3px] text-[#3A494F]`}>Paid with card</p>
          </div>
          
          <StatusCard name="Booked" />
        </div>
      </div>

      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default VehicleInfo;
