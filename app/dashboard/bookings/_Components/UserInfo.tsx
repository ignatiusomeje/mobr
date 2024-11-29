import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Loader } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import { Button } from "primereact/button";
import React from "react";
import LicensePop from "./LicensePop";
import { showLicense } from "../_Data/BookingSlice";

const UserInfo = ({ GetOneCustomer }: { GetOneCustomer?: boolean }) => {
  const customer = useAppSelector((state) => state.bookings.customer);
  const dispatch = useAppDispatch();
  return (
    <div
      className={`rounded-[20px] max-w-[260px] h-max w-full flex flex-col gap-[32px] bg-[#F9F9F9] py-[20px] px-[24px] border border-[#C6C6C6]`}
    >
      {GetOneCustomer ? (
        <div className={`w-full h-[1024px] flex justify-center items-center`}>
          <Loader className={`animate-spin w-[50px] h-[50px]`} />
        </div>
      ) : (
        <div className={`flex flex-col gap-[32px]`}>
          <div
            className={`w-[100px] h-[100px] border border-[#1B2E35] overflow-hidden shadow-md rounded-full`}
          >
            <Image
              src={customer.profileImageUrl || `/images/customer.png`}
              alt="customer's picture"
              width={500}
              height={500}
            />
          </div>
          <div className={`flex flex-col gap-[16px]`}>
            <h5
              className={`font-square font-[700] text-[12px] leading-[16px] tracking-[0.3px] text-[#11975D]`}
            >
              CUSTOMER PROFILE:
            </h5>
            <div className={`grid grid-cols-1 gap-[18px]`}>
              <div>
                <p
                  className={`font-inter font-[400] text-[14px] leading-[22px] tracking-[0.25px] text-[#777777]`}
                >
                  Full Name:
                </p>
                <p
                  className={`font-inter font-[500] text-[14px] leading-[22px] tracking-[0.25px] text-[#1B1B1B]`}
                >
                  {customer.fullName}
                </p>
              </div>
              {/* <div>
                <p
                  className={`font-inter font-[400] text-[14px] leading-[22px] tracking-[0.25px] text-[#777777]`}
                >
                  Middle name:
                </p>
                <p
                  className={`font-inter font-[500] text-[14px] leading-[22px] tracking-[0.25px] text-[#1B1B1B]`}
                >
                  Sample
                </p>
              </div> */}
              {/* <div>
                <p
                  className={`font-inter font-[400] text-[14px] leading-[22px] tracking-[0.25px] text-[#777777]`}
                >
                  Last name:
                </p>
                <p
                  className={`font-inter font-[500] text-[14px] leading-[22px] tracking-[0.25px] text-[#1B1B1B]`}
                >
                  Sample
                </p>
              </div> */}
              <div>
                <p
                  className={`font-inter font-[400] text-[14px] leading-[22px] tracking-[0.25px] text-[#777777]`}
                >
                  Country code:
                </p>
                <p
                  className={`font-inter font-[500] text-[14px] leading-[22px] tracking-[0.25px] text-[#1B1B1B]`}
                >
                  {customer.countryCode}
                  {/* Nigeria (+234) */}
                </p>
              </div>
              <div>
                <p
                  className={`font-inter font-[400] text-[14px] leading-[22px] tracking-[0.25px] text-[#777777]`}
                >
                  Phone number:
                </p>
                <p
                  className={`font-inter font-[500] text-[14px] leading-[22px] tracking-[0.25px] text-[#1B1B1B]`}
                >
                  {customer.phoneNumber}
                  {/* 7035829240 */}
                </p>
              </div>
              <div>
                <p
                  className={`font-inter font-[400] text-[14px] leading-[22px] tracking-[0.25px] text-[#777777]`}
                >
                  Email:
                </p>
                <p
                  className={`font-inter font-[500] text-[14px] leading-[22px] tracking-[0.25px] text-[#1B1B1B]`}
                >
                  {customer.email}
                  {/* sample@gmail.com */}
                </p>
              </div>
            </div>
          </div>
          <div className={`flex flex-col gap-[16px]`}>
            <h5
              className={`font-square font-[700] text-[12px] leading-[16px] tracking-[0.3px] text-[#11975D]`}
            >
              LICENSE DETAILS:
            </h5>
            <div className={`grid grid-cols-1 gap-[18px]`}>
              <div>
                <p
                  className={`font-inter font-[400] text-[14px] leading-[22px] tracking-[0.25px] text-[#777777]`}
                >
                  Date of birth:
                </p>
                <p
                  className={`font-inter font-[500] text-[14px] leading-[22px] tracking-[0.25px] text-[#1B1B1B]`}
                >
                  {customer.dob !== null &&
                    moment(customer.dob).format("MMM D, YYYY")}
                  {/* 12-02-2000 */}
                </p>
              </div>
              <div>
                <p
                  className={`font-inter font-[400] text-[14px] leading-[22px] tracking-[0.25px] text-[#777777]`}
                >
                  License Front:
                </p>
                {customer.frontDriverLisenceImageUrl && (
                  <p
                    className={`font-inter font-[500] text-[14px] leading-[22px] tracking-[0.25px] text-[#1B1B1B]`}
                  >
                    {customer.frontDriverLisenceImageUrl && (
                      <Button
                        onClick={() =>
                          dispatch(
                            showLicense({
                              show: true,
                              url: customer.frontDriverLisenceImageUrl,
                            })
                          )
                        }
                        className={`font-square focus:ring-0  mt-2 text-[14px] font-[400] leading-[22px] tracking-[0.25px]`}
                      >
                        view front License
                      </Button>
                    )}
                  </p>
                )}
              </div>
              <div>
                <p
                  className={`font-inter font-[400] text-[14px] leading-[22px] tracking-[0.25px] text-[#777777]`}
                >
                  License Back:
                </p>
                {customer.backDriverLisenceImageUrl && (
                  <p
                    className={`font-inter font-[500] text-[14px] leading-[22px] tracking-[0.25px] text-[#1B1B1B]`}
                  >
                    {customer.backDriverLisenceImageUrl && (
                      <Button
                        onClick={() =>
                          dispatch(
                            showLicense({
                              show: true,
                              url: customer.backDriverLisenceImageUrl,
                            })
                          )
                        }
                        className={`font-square focus:ring-0 mt-2 text-[14px] font-[400] leading-[22px] tracking-[0.25px]`}
                      >
                        view back License
                      </Button>
                    )}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className={`flex flex-col gap-[16px]`}>
            <h5
              className={`font-square font-[700] text-[12px] leading-[16px] tracking-[0.3px] text-[#11975D]`}
            >
              BILLING ADDRESS:
            </h5>
            <div className={`grid grid-cols-1 gap-[18px]`}>
              <div>
                <p
                  className={`font-inter font-[400] text-[14px] leading-[22px] tracking-[0.25px] text-[#777777]`}
                >
                  Street address:
                </p>
                <p
                  className={`font-inter font-[500] text-[14px] leading-[22px] tracking-[0.25px] text-[#1B1B1B]`}
                >
                  {customer.streetAddress}
                </p>
              </div>
              <div>
                <p
                  className={`font-inter font-[400] text-[14px] leading-[22px] tracking-[0.25px] text-[#777777]`}
                >
                  Region:
                </p>
                {/* <p
                  className={`font-inter font-[500] text-[14px] leading-[22px] tracking-[0.25px] text-[#1B1B1B]`}
                >
                  Lyons
                </p> */}
              </div>
              <div>
                <p
                  className={`font-inter font-[400] text-[14px] leading-[22px] tracking-[0.25px] text-[#777777]`}
                >
                  City:
                </p>
                {/* <p
                  className={`font-inter font-[500] text-[14px] leading-[22px] tracking-[0.25px] text-[#1B1B1B]`}
                >
                  Paris
                </p> */}
              </div>
              <div>
                <p
                  className={`font-inter font-[400] text-[14px] leading-[22px] tracking-[0.25px] text-[#777777]`}
                >
                  Postal code:
                </p>
                {/* <p
                  className={`font-inter font-[500] text-[14px] leading-[22px] tracking-[0.25px] text-[#1B1B1B]`}
                >
                  098031
                </p> */}
              </div>
            </div>
          </div>
          {/* <Button
            className={`text-[#8D1510] font-square text-[14px] font-[400] leading-[22px] tracking-[0.25px]`}
          >
            BLOCK USER
          </Button> */}
        </div>
      )}
      <LicensePop />
    </div>
  );
};

export default UserInfo;
