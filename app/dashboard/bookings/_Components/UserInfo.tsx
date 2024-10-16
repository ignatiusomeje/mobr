import Image from 'next/image'
import { Button } from 'primereact/button'
import React from 'react'

const UserInfo = () => {
  return (
        <div
          className={`rounded-[20px] max-w-[260px] h-max w-full flex flex-col gap-[32px] bg-[#F9F9F9] py-[20px] px-[24px] border border-[#C6C6C6]`}
        >
          <div className={`flex flex-col gap-[32px]`}>
            <div
              className={`w-[100px] h-[100px] border border-[#1B2E35] overflow-hidden shadow-md rounded-full`}
            >
              <Image
                src={`/images/customer.jpg`}
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
                    First name:
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
                </div>
                <div>
                  <p
                    className={`font-inter font-[400] text-[14px] leading-[22px] tracking-[0.25px] text-[#777777]`}
                  >
                    Country code:
                  </p>
                  <p
                    className={`font-inter font-[500] text-[14px] leading-[22px] tracking-[0.25px] text-[#1B1B1B]`}
                  >
                    Nigeria (+234)
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
                    7035829240
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
                    sample@gmail.com
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
                    12-02-2000
                  </p>
                </div>
                <div>
                  <p
                    className={`font-inter font-[400] text-[14px] leading-[22px] tracking-[0.25px] text-[#777777]`}
                  >
                    License number:
                  </p>
                  <p
                    className={`font-inter font-[500] text-[14px] leading-[22px] tracking-[0.25px] text-[#1B1B1B]`}
                  >
                    3456789831243678
                  </p>
                </div>
                <div>
                  <p
                    className={`font-inter font-[400] text-[14px] leading-[22px] tracking-[0.25px] text-[#777777]`}
                  >
                    License expiry date:
                  </p>
                  <p
                    className={`font-inter font-[500] text-[14px] leading-[22px] tracking-[0.25px] text-[#1B1B1B]`}
                  >
                    12-02-2028
                  </p>
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
                    No. 12 Gare
                  </p>
                </div>
                <div>
                  <p
                    className={`font-inter font-[400] text-[14px] leading-[22px] tracking-[0.25px] text-[#777777]`}
                  >
                    Region:
                  </p>
                  <p
                    className={`font-inter font-[500] text-[14px] leading-[22px] tracking-[0.25px] text-[#1B1B1B]`}
                  >
                    Lyons
                  </p>
                </div>
                <div>
                  <p
                    className={`font-inter font-[400] text-[14px] leading-[22px] tracking-[0.25px] text-[#777777]`}
                  >
                    City:
                  </p>
                  <p
                    className={`font-inter font-[500] text-[14px] leading-[22px] tracking-[0.25px] text-[#1B1B1B]`}
                  >
                    Paris
                  </p>
                </div>
                <div>
                  <p
                    className={`font-inter font-[400] text-[14px] leading-[22px] tracking-[0.25px] text-[#777777]`}
                  >
                    Postal code:
                  </p>
                  <p
                    className={`font-inter font-[500] text-[14px] leading-[22px] tracking-[0.25px] text-[#1B1B1B]`}
                  >
                    098031
                  </p>
                </div>
              </div>
            </div>
            <Button className={`text-[#8D1510] font-square text-[14px] font-[400] leading-[22px] tracking-[0.25px]`}>BLOCK USER</Button>
          </div>
        </div>
  )
}

export default UserInfo