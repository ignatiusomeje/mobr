import React from "react";
import Tab from "./Tab";
import Customers from "./Customers";
import CustomersLoader from "./CustomersLoader";
import { Skeleton } from "primereact/skeleton";
import { customerType } from "../_types/CustomerTypes";
import { useAppSelector } from "@/store/hooks";

const CustomerTemp = ({
  customers,
  customer,
  getAllCustomersLoading,
  tab,
  setTab,
  showOneCustomer,
  closeShowOneCustomer,
  showPopUp
}: customerType) => {
  const blockOneCustomerLoading = useAppSelector(state => state.customers.blockOneCustomerLoading)
  const validateOneCustomerLoading = useAppSelector(state => state.customers.validateOneCustomerLoading)
  return (
    <div
      className={`h-full flex-grow flex-1 overflow-y-scroll noScroll py-[18px] px-[20px]`}
    >
      {getAllCustomersLoading || blockOneCustomerLoading ||validateOneCustomerLoading ? (
        <div className="flex gap-5">
          {[1, 2, 3].map((btn) => (
            <Skeleton width="100px" height="37px" key={btn} />
          ))}
        </div>
      ) : (
        <div className="flex gap-5">
          {[
            { name: "All" },
            { name: "Verified", number: 100 },
            { name: "Unverified", number: 50 },
          ].map((btn) => (
            <Tab tab={tab} key={btn.name} name={btn.name} setTab={setTab} />
          ))}
        </div>
      )}
      <div className={`flex flex-col gap-[24px] mt-5`}>
        {getAllCustomersLoading || blockOneCustomerLoading || validateOneCustomerLoading ? (
          <CustomersLoader />
        ) : (
          <Customers
            showOneCustomer={showOneCustomer}
            closeShowOneCustomer={closeShowOneCustomer}
            customers={customers}
            customer={customer}
            showPopUp={showPopUp}
          />
        )}
      </div>
    </div>
  );
};

export default CustomerTemp;
