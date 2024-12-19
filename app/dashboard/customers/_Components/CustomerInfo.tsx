// import { indexInput } from "@/types/indexPage";
import { X } from "lucide-react";
import Image from "next/image";
import { Dialog } from "primereact/dialog";
import React from "react";
import { CustomerInfoTypes } from "../_types/CustomerTypes";
import moment from "moment";
import { Button } from "primereact/button";
import { showLicense } from "../../bookings/_Data/BookingSlice";
import { useAppDispatch } from "@/store/hooks";
import LicensePop from "../../bookings/_Components/LicensePop";

const CustomerInfo = ({
  customer,
  closeShowOneCustomer,
  showPopUp,
}: CustomerInfoTypes) => {
  const dispatch = useAppDispatch();
  return (
    <Dialog
      visible={showPopUp}
      className={`rounded-[20px] max-w-[600px] w-full`}
      modal
      onHide={() => {
        if (!showPopUp) return;
        closeShowOneCustomer();
      }}
      content={({ hide }) => (
        <div
          className={`rounded-[20px] flex flex-col gap-[20px] bg-[#F9F9F9] p-[32px] border border-[#C6C6C6]`}
        >
          <div className={`flex justify-between items-center`}>
            <h4
              className={`font-square font-[700] text-[14px] leading-[22px] tracking-[0.25px] text-[#11975D]`}
            >
              CUSTOMER INFORMATION
            </h4>
            <X
              className={`cursor-pointer`}
              width={16}
              color="#8D1510"
              onClick={(e) => hide(e)}
            />
          </div>
          <div className={`flex flex-col gap-[32px]`}>
            <div
              className={`w-[100px] h-[100px] border border-[#1B2E35] overflow-hidden shadow-md rounded-full`}
            >
              <Image
                src={customer.profileImageUrl || `/images/customer.png`}
                alt={`${customer.fullName} picture"`}
                width={500}
                height={500}
                priority
              />
            </div>
            <div className={`flex flex-col gap-[16px]`}>
              <h5
                className={`font-square font-[700] text-[12px] leading-[16px] tracking-[0.3px] text-[#11975D]`}
              >
                CUSTOMER PROFILE:
              </h5>
              <div className={`grid grid-cols-3 gap-[18px]`}>
                <div>
                  <p
                    className={`font-inter font-[400] text-[14px] leading-[22px] tracking-[0.25px] text-[#777777]`}
                  >
                    Full Name:
                    {/* First name: */}
                  </p>
                  <p
                    className={`font-inter break-words font-[500] text-[14px] leading-[22px] tracking-[0.25px] text-[#1B1B1B]`}
                  >
                    {customer.fullName ? customer.fullName : `N/A`}
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
                </div>
                <div>
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
                {/* <div>
                  <p
                    className={`font-inter font-[400] text-[14px] leading-[22px] tracking-[0.25px] text-[#777777]`}
                  >
                    Country code:
                  </p>
                  <p
                    className={`font-inter font-[500] text-[14px] leading-[22px] tracking-[0.25px] text-[#1B1B1B]`}
                  >
                    {customer.countryCode}
                    Nigeria (+234)
                  </p>
                </div> */}
                <div>
                  <p
                    className={`font-inter font-[400] text-[14px] leading-[22px] tracking-[0.25px] text-[#777777]`}
                  >
                    Phone Number:
                  </p>
                  <p
                    className={`font-inter break-words font-[500] text-[14px] leading-[22px] tracking-[0.25px] text-[#1B1B1B]`}
                  >
                    {customer.phoneNumber ? customer.phoneNumber : `N/A`}
                  </p>
                </div>
                <div>
                  <p
                    className={`font-inter font-[400] text-[14px] leading-[22px] tracking-[0.25px] text-[#777777]`}
                  >
                    Email:
                  </p>
                  <p
                    className={`font-inter break-words font-[500] text-[14px] leading-[22px] tracking-[0.25px] text-[#1B1B1B]`}
                  >
                    {customer.email ? customer.email : `N/A`}
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
              <div className={`grid grid-cols-3 gap-[18px]`}>
                <div>
                  <p
                    className={`font-inter font-[400] text-[14px] leading-[22px] tracking-[0.25px] text-[#777777]`}
                  >
                    Date of Birth:
                  </p>
                  <p
                    className={`font-inter font-[500] text-[14px] leading-[22px] tracking-[0.25px] text-[#1B1B1B]`}
                  >
                    {customer.dob !== null ?
                      moment(customer.dob).format("MMM D, YYYY") : `N/A`}
                    {/* {customer.dob?} */}
                  </p>
                </div>
                <div>
                  <p
                    className={`font-inter font-[400] text-[14px] leading-[22px] tracking-[0.25px] text-[#777777]`}
                  >
                    License Front:
                  </p>
                  {customer.frontDriverLisenceImageUrl ? (
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
                  ): <span className={`font-inter font-[500] text-[14px] leading-[22px] tracking-[0.25px] text-[#1B1B1B]`}>N/A</span>}
                </div>
                <div>
                  <p
                    className={`font-inter font-[400] text-[14px] leading-[22px] tracking-[0.25px] text-[#777777]`}
                  >
                    License Back:
                  </p>
                  {customer.backDriverLisenceImageUrl  ? (
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
                  ): <span className={`font-inter font-[500] text-[14px] leading-[22px] tracking-[0.25px] text-[#1B1B1B]`}>N/A</span> }
                </div>
              </div>
            </div>
            <div className={`flex flex-col gap-[16px]`}>
              <h5
                className={`font-square font-[700] text-[12px] leading-[16px] tracking-[0.3px] text-[#11975D]`}
              >
                BILLING ADDRESS:
              </h5>
                <div className={`grid grid-cols-3 gap-[18px]`}>
                  <div>
                    <p
                      className={`font-inter font-[400] text-[14px] leading-[22px] tracking-[0.25px] text-[#777777]`}
                      >
                      Street Address:
                    </p>
                      
                    <p
                      className={`font-inter break-words font-[500] text-[14px] leading-[22px] tracking-[0.25px] text-[#1B1B1B]`}
                    >
                      {customer.streetAddress ?customer.streetAddress:`N/A` }
                    </p>
                  </div>
                  {/* <div> */}
                    {/* <p
                      className={`font-inter font-[400] text-[14px] leading-[22px] tracking-[0.25px] text-[#777777]`}
                    >
                      Region:
                    </p> */}
                    {/* <p
                      className={`font-inter break-words font-[500] text-[14px] leading-[22px] tracking-[0.25px] text-[#1B1B1B]`}
                    >
                     
                      Lyons
                    </p> */}
                  {/* </div> */}
                  {/* <div> */}
                    {/* <p
                      className={`font-inter font-[400] text-[14px] leading-[22px] tracking-[0.25px] text-[#777777]`}
                    >
                      City:
                    </p> */}
                    {/* <p
                      className={`font-inter break-words font-[500] text-[14px] leading-[22px] tracking-[0.25px] text-[#1B1B1B]`}
                    >
                      Paris
                    </p> */}
                  {/* </div> */}
                  {/* <div> */}
                    {/* <p
                      className={`font-inter font-[400] text-[14px] leading-[22px] tracking-[0.25px] text-[#777777]`}
                    >
                      Postal code:
                    </p> */}
                    {/* <p
                      className={`font-inter font-[500] text-[14px] leading-[22px] tracking-[0.25px] text-[#1B1B1B]`}
                    >
                      098031
                    </p> */}
                  {/* </div> */}
                </div>
              
            </div>
          </div>
          <LicensePop />
        </div>
      )}
    ></Dialog>
  );
};

export default CustomerInfo;
