/* eslint-disable  @typescript-eslint/no-explicit-any */
import { FormikProps } from "formik";
import { Asterisk } from "lucide-react";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import React from "react";
import {
  googleFetchReponseType,
  updateCarFormikInputType,
} from "../../_types/CarType";
import { InputNumber } from "primereact/inputnumber";
import titleCase from "@/utils/MakeTitleCase";
import { useAppDispatch } from "@/store/hooks";
import { setFormikValue } from "@/store/FormikSlice";
import {
  AutoComplete,
  AutoCompleteChangeEvent,
  AutoCompleteCompleteEvent,
} from "primereact/autocomplete";
import axios from "axios";
// import { Calendar } from "primereact/calendar";

const VehicleInformation = ({
  newCarFormik,
}: {
  newCarFormik: FormikProps<updateCarFormikInputType>;
}) => {
  const dispatch = useAppDispatch();

  const [locations, setLocations] = React.useState<string[]>([]);

  async function handleFetch(event: AutoCompleteCompleteEvent) {
    await axios
      .post(
        `https://places.googleapis.com/v1/places:searchText`,
        {
          textQuery: event.query,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-Goog-Api-Key": process.env.NEXT_PUBLIC_API_KEY,
            "X-Goog-FieldMask": "places.formattedAddress",
          },
        }
      )
      .then((response: any) => {
        setLocations(
          response.data?.places?.map(
            (place: googleFetchReponseType) => place.formattedAddress
          )
        );
      });
  }

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
              value={newCarFormik.values.vehicleName?.toUpperCase()}
              onChange={(e) => {
                newCarFormik.handleChange(e);
                dispatch(
                  setFormikValue({ vehicleName: e.target.value.toUpperCase() })
                );
              }}
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
                inputClassName={`w-full py-[12px] focus:ring-0 px-[14px] .rounded-[20px]`}
                name="vehicleRentalPrice"
                id="vehicleRentalPrice"
                value={newCarFormik.values.vehicleRentalPrice}
                onChange={(e) => {
                  newCarFormik.setFieldValue("vehicleRentalPrice", e.value);
                  dispatch(setFormikValue({ vehicleRentalPrice: e.value }));
                }}
                onBlur={newCarFormik.handleBlur}
                variant="outlined"
                className={`p-inputtext-sm .py-[12px] 
              .hover:border .hover:border-[#474747] .focus:border .focus:border-[#474747] focus:ring-0 .px-[14px] .rounded-[20px] .border .border-[#C6C6C6]`}
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
            <AutoComplete
              // type="text"
              // field="formattedAddress"
              delay={500}
              completeMethod={handleFetch}
              name="vehicleLocation"
              id="vehicleLocation"
              suggestions={locations}
              value={newCarFormik.values.vehicleLocation}
              onChange={(e: AutoCompleteChangeEvent) => {
                newCarFormik.handleChange(e.value === null ? "" : e.value);
                dispatch(
                  setFormikValue({
                    vehicleLocation: e.value === null ? "" : e.value,
                  })
                );
              }}
              forceSelection
              onBlur={newCarFormik.handleBlur}
              variant="outlined"
              className={`p-inputtext-sm .py-[12px] w-full
                          hover:border hover:border-[#474747] focus:border focus:border-[#474747] focus:ring-0 .px-[14px] rounded-[20px] border border-[#C6C6C6]`}
              inputClassName={`p-inputtext-sm py-[12px] w-full
                          .hover:border .hover:border-[#474747] .focus:border .focus:border-[#474747] focus:ring-0 px-[14px] rounded-[20px] .border .border-[#C6C6C6]`}
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
              onChange={(e) => {
                newCarFormik.handleChange(e);
                dispatch(setFormikValue({ vehicleID: e.target.value }));
              }}
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
            <InputNumber
              inputClassName={`w-full py-[12px] focus:ring-0 px-[14px] .rounded-[20px]`}
              useGrouping={false}
              name="vehicleYear"
              id="vehicleYear"
              value={newCarFormik.values.vehicleYear}
              onChange={(e) => {
                newCarFormik.setFieldValue("vehicleYear", e.value);
                dispatch(setFormikValue({ vehicleYear: e.value }));
              }}
              onBlur={newCarFormik.handleBlur}
              variant="outlined"
              className={`p-inputtext-sm .py-[12px] 
              hover:border hover:border-[#474747] focus:border focus:border-[#474747] focus:ring-0 .px-[14px] rounded-[20px] overflow-hidden border border-[#C6C6C6]`}
              placeholder="Enter vehicle year"
            />
            {/* <Calendar
              view="year"
              dateFormat="yy"
              value={newCarFormik.values.vehicleYear}
              inputClassName={`w-full py-[5px] focus:ring-0 px-[14px] rounded-[20px]`}
              // newCarFormik.values.vehicleYear
              onChange={newCarFormik.handleChange}
              onBlur={newCarFormik.handleBlur}
              placeholder="Select vehicle year"
              name="vehicleYear"
              id="vehicleYear"
              className={`p-inputtext-sm py-[12px] 
                  hover:border hover:border-[#474747] focus:border focus:border-[#474747] focus:ring-0 px-[14px] rounded-[20px] border border-[#C6C6C6]`}
            /> */}
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
              onChange={(e) => {
                newCarFormik.handleChange(e);
                dispatch(setFormikValue({ vehicleCondition: e.value }));
              }}
              onBlur={newCarFormik.handleBlur}
              options={["Good", "Bad"]}
              optionLabel="Select vehicle condition"
              placeholder="Select vehicle condition"
              name="vehicleCondition"
              id="vehicleCondition"
              className={`p-inputtext-sm py-[4px] 
                  hover:border hover:border-[#474747] focus:border focus:border-[#474747] focus-within:ring-0 px-[14px] rounded-[20px] border border-[#C6C6C6]`}
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
              value={titleCase(newCarFormik.values.vehicleDescription)}
              onChange={(e) => {
                newCarFormik.handleChange(e);
                dispatch(
                  setFormikValue({ vehicleDescription: e.target.value })
                );
              }}
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
