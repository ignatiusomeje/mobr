import React, { useState } from "react";
import Tab from "./Tab";
import AccountTab from "./AccountTab";
import BenefitsTab from "./BenefitsTab";
import { SettingsTempTypes } from "../_types/settingsTypes";
import BenefitLoader from "./BenefitLoader";

const SettingsTemp = ({
  email,
  benefitFormik,
  createBenefit,
  newBenefit,
  setNewBenefit,
  benefits,
  benefitsLoading,
  fetchAllBenefits,
  createBenefitLoading,
  changePasswordFormik,
  changePasswordLoading
}: SettingsTempTypes) => {
  const [selected, setSelected] = useState<string>("Account");

  return (
    <div
      className={`h-full flex-grow flex-1 gap-[28px] flex flex-col overflow-y-scroll noScroll py-[18px] px-[20px]`}
    >
      <div className="flex gap-5">
        {["Account", "Benefits"].map((btn) => (
          <Tab
            key={btn}
            name={btn}
            selected={selected === btn ? true : false}
            handleOnclick={() => {
              setSelected(btn);
              fetchAllBenefits();
            }}
          />
        ))}
      </div>
      {selected === "Account" ? (
        <AccountTab changePasswordLoading={changePasswordLoading} changePasswordFormik={changePasswordFormik} email={email}/>
      ) : benefitsLoading ? (
        <BenefitLoader />
      ) : (
        <BenefitsTab
          benefitFormik={benefitFormik}
          createBenefit={createBenefit}
          benefits={benefits}
          newBenefit={newBenefit}
          setNewBenefit={setNewBenefit}
          benefitsLoading={benefitsLoading}
          createBenefitLoading={createBenefitLoading}
        />
      )}
    </div>
  );
};

export default SettingsTemp;
