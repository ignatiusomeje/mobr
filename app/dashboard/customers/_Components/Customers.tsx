import React, { useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { OverlayPanel } from "primereact/overlaypanel";
import { Button } from "primereact/button";
// import { dataSet } from "@/utils/data";
import CustomerInfo from "./CustomerInfo";
import { customerResponse, customerType2 } from "../_types/CustomerTypes";
import moment from "moment";

const Customers = ({
  customer,
  customers,
  showPopUp,
  closeShowOneCustomer,
  showOneCustomer,
}: customerType2) => {
  const options = useRef<OverlayPanel>(null);
  // const data = dataSet;

  const statusSketch = (value: customerResponse) =>
    value.isValidated ? (
      <span
        className={`bg-[#C6EBD7] flex items-center justify-center w-[100px] text-[#00552E] rounded-[20px] p-[6px] font-inter font-[400] capitalize text-[12px] `}
      >
        verified
      </span>
    ) : (
      <span
        className={`bg-[#E2E2E2] flex items-center justify-center w-[100px] text-[#475960] rounded-[20px] p-[6px] font-inter font-[400]- capitalize text-[12px]`}
      >
        unverified
      </span>
    );

  const DateCreatedSketch = (value: customerResponse) => (
    <span>{moment(value.created).format("d MMM, YYYY")}</span>
  );

  const DateUpdatedSketch = (value: customerResponse) => (
    <span>{moment(value.created).format("d MMM, YYYY")}</span>
  );

  const actionSketch = (value: customerResponse) => (
    <div className="relative">
      <Button
        className={`focus:ring-0`}
        icon="pi pi-ellipsis-v"
        onClick={(e) => options?.current?.toggle(e)}
      />
      <OverlayPanel
        ref={options}
        closeOnEscape
        dismissable={true}
        className={` bg-[#F1F1F1]v max-w-[131px] w-full`}
      >
        <a
          className={`text-[#222B2E] hover:bg-[#DDE4E6] hover:cursor-pointer block font-square text-[16px] font-[400] py-[10px] px-[12px]`}
          onClick={() => showOneCustomer(value.id)}
        >
          View
        </a>
        {/* <a
          className={`text-[#8D1510] block hover:bg-[#DDE4E6] hover:cursor-pointer font-square text-[16px] font-[400] py-[10px] px-[12px]`}
        >
          Block
        </a> */}
      </OverlayPanel>
    </div>
  );

  return (
    <div className={`gap-[12px]`}>
      <DataTable
        value={customers}
        rowHover={true}
        onSelectionChange={(e) => showOneCustomer(e.value.id)}
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        tableStyle={{ minWidth: "50rem" }}
        selectionMode="single"
        emptyMessage={
          <p className="w-full flex justify-center items-center">
            No Customer found
          </p>
        }
      >
        <Column field="id" header="#" style={{ width: "5%" }}></Column>
        <Column
          field="created"
          header="START DATE"
          style={{ width: "11%" }}
          body={DateCreatedSketch}
        ></Column>
        <Column
          field="updated"
          header="RETURN DATE"
          style={{ width: "11%" }}
          body={DateUpdatedSketch}
        ></Column>
        <Column
          field="fullName"
          header="CUSTOMERS"
          style={{ width: "11%" }}
        ></Column>
        <Column
          field="phoneNumber"
          header="PHONE"
          style={{ width: "11%" }}
        ></Column>
        <Column field="email" header="EMAIL" style={{ width: "11%" }}></Column>
        <Column
          field="isVerified"
          header="STATUS"
          dataType="string"
          body={statusSketch}
          style={{ width: "5%" }}
        ></Column>
        <Column
          // field="representative.name"
          header="ACTION"
          style={{ width: "5%" }}
          body={actionSketch}
        ></Column>
      </DataTable>
      <CustomerInfo
        customer={customer}
        closeShowOneCustomer={closeShowOneCustomer}
        showPopUp={showPopUp}
      />
    </div>
  );
};

export default Customers;
