import { FormikProps } from "formik";
import { Asterisk } from "lucide-react";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import React from "react";
import { updateCarFormikInputType } from "../../_types/CarType";
import { InputNumber } from "primereact/inputnumber";
import { Calendar } from "primereact/calendar";

const VehicleInformation = ({
  newCarFormik,
}: {
  newCarFormik: FormikProps<updateCarFormikInputType>;
}) => {
  return (
    <div className={`w-full flex flex-col gap-[20px]`}>
      <h3
        className={`font-inter font-[600] text-[14px] leading-[22px] tracking-[0.25px] text-[#777777]`}
      >
        ADD VEHICLE INFORMATION
      </h3>
      <div className={`flex flex-col gap-[20px]`}>
        <div className={`flex gap-[12px] items-center`}>
          <div className="flex flex-col w-full gap-[10px]">
            <label htmlFor="vehicleName" className="flex">
              Enter vehicle name <Asterisk color="red" width={8} />
            </label>
            <InputText
              type="text"
              name="vehicleName"
              id="vehicleName"
              value={newCarFormik.values.vehicleName}
              onChange={newCarFormik.handleChange}
              onBlur={newCarFormik.handleBlur}
              variant="outlined"
              className={`p-inputtext-sm py-[12px] 
              hover:border hover:border-[#474747] focus:border focus:border-[#474747] focus:ring-0 px-[14px] rounded-[20px] border border-[#C6C6C6]`}
              placeholder="Enter vehicle name"
            />
          </div>
          {/* ${
                loginFormik.values.email &&
                loginFormik.touched.email &&
                !loginFormik.errors.email &&
                `bg-[#DDE4E6]`
              } 
              ${
                loginFormik.touched.email &&
                loginFormik.errors.email &&
                `bg-[#FFD5C9]`
              }  */}
          <div className="flex flex-col w-full gap-[10px]">
            <label htmlFor="vehiclePrice" className="flex">
              Enter vehicle price <Asterisk color="red" width={8} />
            </label>
            <div
              className={`p-inputgroup flex-1 rounded-[20px] overflow-hidden hover:border hover:border-[#474747] border border-[#C6C6C6] focus-within:border focus-within:border-[#474747]`}
            >
              <InputNumber
                inputClassName={`w-full py-[5px] focus:ring-0 px-[14px] rounded-[20px]`}
                name="vehicleRentalPrice"
                id="vehicleRentalPrice"
                value={newCarFormik.values.vehicleRentalPrice}
                onChange={newCarFormik.handleChange}
                onBlur={newCarFormik.handleBlur}
                variant="outlined"
                className={`p-inputtext-sm py-[12px] 
              .hover:border .hover:border-[#474747] .focus:border .focus:border-[#474747] focus:ring-0 px-[14px] .rounded-[20px] .border .border-[#C6C6C6]`}
                placeholder="Enter vehicle price"
              />
              <span className={`p-inputgroup-addon bg-[#fff]`}>/day</span>
            </div>
          </div>
        </div>
        <div className={`flex gap-[12px] items-center`}>
          <div className="flex flex-col w-full gap-[10px]">
            <label htmlFor="vehicleLocation" className="flex">
              Enter vehicle location
              <Asterisk color="red" width={8} />
            </label>
            <InputText
              type="text"
              name="vehicleLocation"
              id="vehicleLocation"
              value={newCarFormik.values.vehicleLocation}
              onChange={newCarFormik.handleChange}
              onBlur={newCarFormik.handleBlur}
              variant="outlined"
              className={`p-inputtext-sm py-[12px] 
               
              hover:border hover:border-[#474747] focus:border focus:border-[#474747] focus:ring-0 px-[14px] rounded-[20px] border border-[#C6C6C6]`}
              placeholder="Enter vehicle location"
            />
          </div>
          {/* ${
                loginFormik.values.email &&
                loginFormik.touched.email &&
                !loginFormik.errors.email &&
                `bg-[#DDE4E6]`
              } 
              ${
                loginFormik.touched.email &&
                loginFormik.errors.email &&
                `bg-[#FFD5C9]`
              }  */}
          <div className="flex flex-col w-full gap-[10px]">
            <label htmlFor="vehicleID" className="flex">
              Vehicle ID
            </label>
            <InputText
              type="text"
              name="vehicleID"
              id="vehicleID"
              value={newCarFormik.values.vehicleId}
              onChange={newCarFormik.handleChange}
              onBlur={newCarFormik.handleBlur}
              variant="outlined"
              disabled
              className={`p-inputtext-sm py-[12px] 
               
              hover:border hover:border-[#474747] focus:border focus:border-[#474747] focus:ring-0 px-[14px] rounded-[20px] border border-[#C6C6C6]`}
              placeholder="MR3466654"
            />
          </div>
        </div>
        <div className={`flex gap-[12px] items-center`}>
          <div className="flex flex-col w-full gap-[10px]">
            <label htmlFor="vehicleName" className="flex">
              Select vehicle year <Asterisk color="red" width={8} />
            </label>
            <Calendar
              view="year"
              dateFormat="yy"
              value={new Date(2022)}
              inputClassName={`w-full py-[5px] focus:ring-0 px-[14px] rounded-[20px]`}
              // newCarFormik.values.vehicleYear
              onChange={newCarFormik.handleChange}
              onBlur={newCarFormik.handleBlur}
              placeholder="Select vehicle year"
              name="vehicleYear"
              id="vehicleYear"
              className={`p-inputtext-sm py-[12px] 
                  hover:border hover:border-[#474747] focus:border focus:border-[#474747] focus:ring-0 px-[14px] rounded-[20px] border border-[#C6C6C6]`}
            />
          </div>
          {/* ${
                loginFormik.values.email &&
                loginFormik.touched.email &&
                !loginFormik.errors.email &&
                `bg-[#DDE4E6]`
              } 
              ${
                loginFormik.touched.email &&
                loginFormik.errors.email &&
                `bg-[#FFD5C9]`
              }  */}
          <div className="flex flex-col w-full gap-[10px]">
            <label htmlFor="vehiclePrice" className="flex">
              Select vehicle condition
            </label>
            <Dropdown
              value={newCarFormik.values.vehicleCondition}
              onChange={newCarFormik.handleChange}
              onBlur={newCarFormik.handleBlur}
              options={["Good", "Bad"]}
              optionLabel="Select vehicle condition"
              placeholder="Select vehicle condition"
              name="vehicleCondition"
              id="vehicleCondition"
              className={`p-inputtext-sm py-[12px] 
                  hover:border hover:border-[#474747] focus:border focus:border-[#474747] focus:ring-0 px-[14px] rounded-[20px] border border-[#C6C6C6]`}
            />
          </div>
        </div>
        <div className={`flex gap-[12px] items-center`}>
          <div className="flex flex-col w-full gap-[10px]">
            <label htmlFor="vehicleDescription" className="flex">
              Enter vehicle description <Asterisk color="red" width={8} />
            </label>
            <InputTextarea
              name="vehicleDescription"
              id="vehicleDescription"
              rows={8}
              value={newCarFormik.values.vehicleDescription}
              onChange={newCarFormik.handleChange}
              onBlur={newCarFormik.handleBlur}
              variant="outlined"
              className={`p-inputtext-sm py-[12px] 
              hover:border hover:border-[#474747] resize-none focus:border focus:border-[#474747] focus:ring-0 px-[14px] rounded-[20px] border border-[#C6C6C6]`}
              placeholder="Enter vehicle description"
            />
          </div>
          {/* ${
                loginFormik.values.email &&
                loginFormik.touched.email &&
                !loginFormik.errors.email &&
                `bg-[#DDE4E6]`
              } 
              ${
                loginFormik.touched.email &&
                loginFormik.errors.email &&
                `bg-[#FFD5C9]`
              }  */}
        </div>
      </div>
    </div>
  );
};

export default VehicleInformation;