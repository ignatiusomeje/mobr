import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Booking } from "@/types/Bookings";
// import { OverlayPanel } from "primereact/overlaypanel";
// import { Button } from "primereact/button";

const DashboardBookings = () => {
  // const options = useRef<OverlayPanel>(null);
  const data = [
    {
      id: 1,
      start: Date.now().toString(),
      return: Date.now().toString(),
      vehicleId: "MB3456788",
      customer: "Ogechi Helen",
      phone: `(+234) 7065432953`,
      email: `sample@gmail.com`,
      status: "booked",
    },
    {
      id: 2,
      start: Date.now().toString(),
      return: Date.now().toString(),
      vehicleId: "MB3456788",
      customer: "Ogechi Helen",
      phone: `(+234) 7065432953`,
      email: `sample@gmail.com`,
      status: "abandoned",
    },
    {
      id: 3,
      start: Date.now().toString(),
      return: Date.now().toString(),
      vehicleId: "MB3456788",
      customer: "Ogechi Helen",
      phone: `(+234) 7065432953`,
      email: `sample@gmail.com`,
      status: "booked",
    },
    {
      id: 4,
      start: Date.now().toString(),
      return: Date.now().toString(),
      vehicleId: "MB3456788",
      customer: "Ogechi Helen",
      phone: `(+234) 7065432953`,
      email: `sample@gmail.com`,
      status: "cancelled",
    },
  ];

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

  // const actionSketch = () => (
  //   <div className="relative">
  //     <Button
  //       className={`focus:ring-0`}
  //       icon="pi pi-ellipsis-v"
  //       onClick={(e) => options?.current?.toggle(e)}
  //     />
  //     <OverlayPanel
  //       ref={options}
  //       closeOnEscape
  //       dismissable={true}
  //       className={` bg-[#F1F1F1]v max-w-[131px] w-full`}
  //     >
  //       <a
  //         className={`text-[#222B2E] hover:bg-[#DDE4E6] hover:cursor-pointer block font-square text-[16px] font-[400] py-[10px] px-[12px]`}
  //       >
  //         View
  //       </a>
  //       <a
  //         className={`text-[#8D1510] block hover:bg-[#DDE4E6] hover:cursor-pointer font-square text-[16px] font-[400] py-[10px] px-[12px]`}
  //       >
  //         Block
  //       </a>
  //     </OverlayPanel>
  //   </div>
  // );

  return (
    <div className={`gap-[12px]`}>
      <DataTable
        value={data}
        // rowHover={true}
        // paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        tableStyle={{ minWidth: "50rem" }}
        // selectionMode="single"
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
