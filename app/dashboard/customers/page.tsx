"use client";
import DashboardWrapper from "@/Components/DashboardWrapper";
import React, { useRef, useState } from "react";
import CustomerTemp from "./_Components/CustomerTemp";
import NavBar from "@/Components/NavBar";
import { useGetAllCustomersQuery } from "./_Data/customerAPI";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  clearCustomerError,
  closeShowOneCustomer,
  showOneCustomer,
} from "./_Data/customerSlice";
import { Toast } from "primereact/toast";

const Page = () => {
  const dispatch = useAppDispatch();
  const [tab, setTab] = useState<string>("All");
  const toast = useRef<Toast>(null);
  const customers = useAppSelector((state) => state.customers.customers);
  const showPopUp = useAppSelector((state) => state.customers.showPopUp);
  const customer = useAppSelector((state) => state.customers.customer);
  const getAllCustomersError = useAppSelector(
    (state) => state.customers.getAllCustomersError
  );
  const getAllCustomersLoading = useAppSelector(
    (state) => state.customers.getAllCustomersLoading
  );

  // { name: "All" },
  // { name: "Verified", number: 100 },
  // { name: "Unverified", number: 50 },

  const showError = (message: string) => {
    toast.current?.show({
      severity: "error",
      summary: "Error",
      detail: message,
      life: 3000,
    });
  };

  if (getAllCustomersError) {
    showError(getAllCustomersError);
    dispatch(clearCustomerError());
  }
  useGetAllCustomersQuery(
    tab !== "All"
      ? {
          isValidated:
            tab === "Verified" ? true : tab === "Unverified" && false,
        }
      : {}
  );
  return (
    <DashboardWrapper>
      <Toast ref={toast} />
      <NavBar routeName="Customers" />
      <div className={`px-[20px] overflow-hidden mb-9`}>
        <CustomerTemp
          tab={tab}
          setTab={(tab) => setTab(tab)}
          customers={customers}
          customer={customer}
          getAllCustomersLoading={getAllCustomersLoading}
          closeShowOneCustomer={() => dispatch(closeShowOneCustomer())}
          showOneCustomer={(id) => dispatch(showOneCustomer(id))}
          showPopUp={showPopUp}
        />
      </div>
    </DashboardWrapper>
  );
};

export default Page;
