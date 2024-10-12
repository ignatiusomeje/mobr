import React, { useRef, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { OverlayPanel } from "primereact/overlaypanel";
import { Button } from "primereact/button";
import { CustomersType } from "@/types/Customers";
import { dataSet } from "@/utils/data";
import CustomerInfo from "./CustomerInfo";

const Customers = () => {
  const options = useRef<OverlayPanel>(null);
  const [visible, setVisible] = useState<boolean>(false);
  const data = dataSet;

  const statusSketch = (value: CustomersType) =>
    value.status === "verified" ? (
      <span
        className={`bg-[#C6EBD7] flex items-center justify-center w-[100px] text-[#00552E] rounded-[20px] p-[6px] font-inter font-[400] capitalize text-[12px] `}
      >
        {value.status}
      </span>
    ) : (
      value.status === "unverified" && (
        <span
          className={`bg-[#E2E2E2] flex items-center justify-center w-[100px] text-[#475960] rounded-[20px] p-[6px] font-inter font-[400]- capitalize text-[12px]`}
        >
          {value.status}
        </span>
      )
    );

  const actionSketch = () => (
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
          onClick={()=>setVisible(true)}
        >
          View
        </a>
        <a
          className={`text-[#8D1510] block hover:bg-[#DDE4E6] hover:cursor-pointer font-square text-[16px] font-[400] py-[10px] px-[12px]`}
        >
          Block
        </a>
      </OverlayPanel>
    </div>
  );

  return (
    <div className={`gap-[12px]`}>
      <DataTable
        value={data}
        rowHover={true}
        onSelectionChange={()=> setVisible(true)}
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        tableStyle={{ minWidth: "50rem" }}
        selectionMode="single"
      >
        <Column field="id" header="#" style={{ width: "5%" }}></Column>
        <Column
          field="start"
          header="START DATE"
          style={{ width: "11%" }}
        ></Column>
        <Column
          field="return"
          header="RETURN DATE"
          style={{ width: "11%" }}
        ></Column>
        <Column
          field="customer"
          header="CUSTOMERS"
          style={{ width: "11%" }}
        ></Column>
        <Column field="phone" header="PHONE" style={{ width: "11%" }}></Column>
        <Column field="email" header="EMAIL" style={{ width: "11%" }}></Column>
        <Column
          field="status"
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
      <CustomerInfo visible={visible} setVisible={setVisible} />
    </div>
  );
};

export default Customers;
