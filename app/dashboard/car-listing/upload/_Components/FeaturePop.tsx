import { Dialog } from "primereact/dialog";
import React, { useState } from "react";
import { FeaturePopType } from "@/types/carlisting";
import { Button } from "primereact/button";
import { Check, Loader2 } from "lucide-react";
import { InputText } from "primereact/inputtext";
import { SelectButton } from "primereact/selectbutton";
import { Calendar } from "primereact/calendar";
// import { Nullable } from "primereact/ts-helpers";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addCarFeature, updateCarFeature } from "../../_Data/CarSlice";
import { useFormik } from "formik";
import { EnergyType, TransmissionType } from "../../_types/CarType";
import { useUpdateACarFeatureMutation } from "../../_Data/CarAPI";
import { Nullable } from "primereact/ts-helpers";
import titleCase from "@/utils/MakeTitleCase";
import { setFormikValue } from "@/store/FormikSlice";

const FeaturePop = ({
  name,
  invalid,
  visible,
  setVisible,
  getAllCar,
  newCarFormik,
}: FeaturePopType) => {
  const dispatch = useAppDispatch();
  const [updateACarFeatureMutation, updateACar] =
    useUpdateACarFeatureMutation();
  const fetchedFeatures = useAppSelector((state) => state.cars.fetchedFeatures);
  const carFeatures = useAppSelector((state) => state.cars.carFeatures);

  const handleChange = (
    inputValue: Date | Nullable<Date> | TransmissionType | EnergyType,
    inputName: string
  ) => {
    newCarFormik.setFieldValue(inputName, inputValue);
    dispatch(setFormikValue({ [inputName]: inputValue }));
    setVisible({ name: "", active: false });
  };

  const [open, setOpen] = useState<boolean>(false);
  // const [val, setVal] = useState<string>("");
  // const [date, setDate] = useState<Nullable<Date>>(null);

  const updateFeatureFormik = useFormik({
    initialValues: {
      featureTitle: name,
      featureName: "",
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      updateACarFeatureMutation(values)
        .unwrap()
        .then(() => {
          setVisible({ name: "", active: false });
        });
    },
  });

  return (
    <Dialog
      visible={visible}
      dismissableMask
      // visible
      className={`rounded-[20px] ${
        name.toLowerCase() === "availability"
          ? `max-w-[440px]`
          : `max-w-[420px]`
      } w-full`}
      modal
      onHide={() => {
        if (!visible) return;
        setVisible(() => ({ active: false, name: "" }));
      }}
      content={() => (
        <div
          className={`rounded-[20px] px-[18px] pt-[18px] pb-[40px] h-full flex flex-col gap-[16px] ${
            name.toLowerCase() === "availability"
              ? `bg-[#FFFFFF]`
              : `bg-[#F9F9F9]`
          }`}
        >
          <h3
            className={`text-[#11975D] uppercase font-square text-[14px] font-[700] leading-[22px] tracking-[0.25px]`}
          >
            SELECT {name}
          </h3>
          <div className={`flex flex-col gap-[20px]`}>
            {name.toLowerCase() === "availability" ? (
              <Calendar
                dateFormat="dd/mm/yy"
                // selectOtherMonths={true}
                value={newCarFormik.values.vehicleAvaliableDate}
                onChange={(e) => handleChange(e.value, "vehicleAvaliableDate")}
                onBlur={newCarFormik.handleBlur}
                name="vehicleAvaliableDate"
                inline
                pt={{
                  container: { className: `w-full` },
                  title: {
                    className: `flex items-center gap-2 text-[#11975D] font-inter text-[14px] font-[600] leading-[22px] tracking-[0.25px] `,
                  },
                  monthTitle: { className: "uppercase" },
                  tableHeaderRow: {
                    className: `text-[#777777] uppercase font-inter text-[12px] font-[400] leading-[20px] tracking-[0.3px] opacity-50`,
                  },
                  tableBody: {
                    className: `font-inter text-[14px] font-[400] leading-[22px] tracking-[0.25px]`,
                  },
                }}
              />
            ) : name.toLowerCase() === "transmissiontype" ? (
              <SelectButton
                // multiple={name.toLowerCase() === "other features" && true}
                pt={{
                  root: { className: `flex flex-wrap gap-[4px]` },
                  button: {
                    className: `rounded-[16px] focus:ring-0 border border-[#C6C6C6] py-[7px] capitalize my-[4px] px-[12px] bg-[#E8E8E8]`,
                  },
                }}
                options={[TransmissionType.Auto, TransmissionType.Manual]}
                // optionLabel={`featureName`}
                name="transmissionType"
                value={newCarFormik.values.transmissionType}
                onChange={(e) => handleChange(e.value, "transmissionType")}
                onBlur={newCarFormik.handleBlur}
              />
            ) : name.toLowerCase() === "energytype" ? (
              <SelectButton
                // multiple={name.toLowerCase() === "other features" && true}
                pt={{
                  root: { className: `flex flex-wrap gap-[4px]` },
                  button: {
                    className: `rounded-[16px] focus:ring-0 border border-[#C6C6C6] py-[7px] capitalize my-[4px] px-[12px] bg-[#E8E8E8]`,
                  },
                }}
                options={[
                  EnergyType.Diesel,
                  EnergyType.Electric,
                  EnergyType.Hybrid,
                  EnergyType.Petrol,
                ]}
                name="energyType"
                // optionLabel={`featureName`}
                value={newCarFormik.values.energyType}
                onChange={(e) => handleChange(e.value, "energyType")}
                onBlur={newCarFormik.handleBlur}
              />
            ) : getAllCar ? (
              <div className="flex justify-center items-center">
                <Loader2 className={`animate-spin`} width={24} />
              </div>
            ) : invalid ? (
              <SelectButton
                // multiple={name.toLowerCase() === "other features" && true}
                pt={{
                  root: { className: `flex flex-wrap gap-[4px]` },
                  button: {
                    className: `rounded-[16px] focus:ring-0 border border-[#C6C6C6] py-[7px] capitalize my-[4px] px-[12px] bg-[#E8E8E8]`,
                  },
                }}
                options={fetchedFeatures[0]?.features}
                optionLabel={`featureName`}
                value={
                  carFeatures.find(
                    (feat) =>
                      feat?.featureTitle === fetchedFeatures[0]?.featureTitle
                  )?.featureName
                }
                onChange={(e) => dispatch(addCarFeature(e.value))}
              />
            ) : getAllCar ? (
              <div className="flex justify-center items-center">
                <Loader2 className={`animate-spin`} width={24} />
              </div>
            ) : (
              <SelectButton
                // multiple={name.toLowerCase() === "other features" && true}
                pt={{
                  root: { className: `flex flex-wrap gap-[4px]` },
                  button: {
                    className: `rounded-[16px] focus:ring-0 border border-[#C6C6C6] py-[7px] capitalize my-[4px] px-[12px] bg-[#E8E8E8]`,
                  },
                }}
                options={fetchedFeatures[0]?.features}
                optionLabel={`featureName`}
                value={
                  carFeatures.find(
                    (feat) =>
                      feat?.featureTitle === fetchedFeatures[0]?.featureTitle
                  )?.featureName
                }
                onChange={async (e) => {
                  await dispatch(updateCarFeature(e.value));
                  await setVisible({ name: "", active: false });
                }}
              />
            )}

            {!getAllCar &&
              name.toLowerCase() !== "transmissiontype" &&
              name.toLowerCase() !== "energytype" &&
              name.toLowerCase() !== "availability" &&
              name.toLowerCase() !== "" && (
                <div className={`w-full flex flex-col gap-[12px]`}>
                  <Button
                    className={`font-square font-[700] text-[12px] leading-[22px] tracking-[0.25px] text-[#222B2E] focus:ring-0`}
                    onClick={() => setOpen((prev) => !prev)}
                  >
                    INPUT MANUALLY
                  </Button>
                  <form
                    action=""
                    onSubmit={updateFeatureFormik.handleSubmit}
                    className={`overflow-hidden ease-in-out transition-all duration-100 ${
                      open ? `h-max` : `h-[0]`
                    }`}
                  >
                    <div
                      className={`p-inputgroup flex-1 rounded-[20px] overflow-hidden hover:border hover:border-[#474747] border border-[#C6C6C6] focus-within:border focus-within:border-[#474747]`}
                    >
                      <InputText
                        type="text"
                        name="featureName"
                        id="featureName"
                        value={titleCase(
                          updateFeatureFormik.values.featureName
                        )}
                        onChange={updateFeatureFormik.handleChange}
                        onBlur={updateFeatureFormik.handleBlur}
                        variant="outlined"
                        className={`p-inputtext-sm py-[12px] 
              .hover:border .hover:border-[#474747] .focus:border .focus:border-[#474747] focus:ring-0 px-[14px] .rounded-[20px] .border .border-[#C6C6C6]`}
                        placeholder="Input manually"
                      />
                      <Button
                        loading={updateACar.isLoading}
                        disabled={updateACar.isLoading}
                        type="submit"
                        className={`p-inputgroup-addon bg-[#fff]`}
                      >
                        <Check width={18} />
                      </Button>
                    </div>
                  </form>
                </div>
              )}
          </div>
          {/* <SuccessPop  /> */}
        </div>
      )}
    ></Dialog>
  );
};

export default FeaturePop;
