import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Booking } from "@/types/Bookings";
import { dataSet } from "@/utils/data";

const DashboardBookings = () => {
  const data = dataSet

  const statusSketch = (value: Booking) =>
    value.status === "booked" ? (
      <span
        className={`bg-[#C6EBD7] flex items-center justify-center w-[100px] text-[#00552E] rounded-[20px] p-[6px] font-inter font-[400] capitalize text-[12px] `}
      >
        {value.status}
      </span>
    ) : value.status === "cancelled" ? (
      <span
        className={`bg-[#FFD5C9] flex items-center justify-center w-[100px] text-[#8D1510] rounded-[20px] p-[6px] font-inter font-[400] capitalize text-[12px]`}
      >
        {value.status}
      </span>
    ) : (
      <span
        className={`bg-[#E2E2E2] flex items-center justify-center w-[100px] text-[#475960] rounded-[20px] p-[6px] font-inter font-[400]- capitalize text-[12px]`}
      >
        {value.status}
      </span>
    );

  return (
    <div className={`gap-[12px]`}>
      <DataTable
        value={data}
        rows={5}
        rowsPerPageOptions={[10]}
        tableStyle={{ minWidth: "50rem" }}
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
          field="vehicleId"
          header="VEHICLE ID"
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
        {/* <Column
          // field="representative.name"
          header="ACTION"
          style={{ width: "5%" }}
          body={actionSketch}
        ></Column> */}
      </DataTable>
    </div>
  );
};

export default DashboardBookings;
