import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useAppSelector } from "@/store/hooks";
import { bookingResponseType, bookingState } from "../bookings/_Types/BookingTypes";
import moment from "moment";

const DashboardBookings = () => {
  const bookings = useAppSelector(
    (state) => state.bookings.bookings
  )
  const data = bookings

  const returnDateSketch = (value: bookingResponseType) => (
    <span className={`font-inter font-[400] capitalize text-[12px] `}>
      {moment(value.returnDate).format("MMM D, YYYY")}
    </span>
  );
  const startDateSketch = (value: bookingResponseType) => (
    <span className={`font-inter font-[400] capitalize text-[12px] `}>
      {moment(value.startDate).format("MMM D, YYYY")}
    </span>
  );

  const statusSketch = (value: bookingResponseType) =>
      value.bookingState === bookingState.Booked ? (
        <span
          className={`bg-[#C6EBD7] flex items-center justify-center w-[100px] text-[#00552E] rounded-[10px] p-[6px] font-inter font-[400] capitalize text-[12px] `}
        >
          {value.bookingState}
        </span>
      ) : value.bookingState === bookingState.Cancelled ? (
        <span
          className={`bg-[#FFD5C9] flex items-center justify-center w-[100px] text-[#8D1510] rounded-[10px] p-[6px] font-inter font-[400] capitalize text-[12px]`}
        >
          {value.bookingState}
        </span>
      ) : value.bookingState === bookingState.AwaitingApproval ? (
        <span
          className={`bg-[gold] flex items-center justify-center whitespace-nowrap .w-[100px] text-[#000] rounded-[10px] p-[6px] font-inter font-[400] capitalize text-[12px]`}
        >
          Awaiting Approval
        </span>
      ) : (
        <span
          className={`bg-[#E2E2E2] flex items-center justify-center w-[100px] text-[#475960] rounded-[10px] p-[6px] font-inter font-[400]- capitalize text-[12px]`}
        >
          {value.bookingState}
        </span>
      );

  return (
    <div className={`gap-[12px]`}>
      <DataTable
        value={data}
        rows={5}
        // rowsPerPageOptions={[10]}
        paginator={true}
        tableStyle={{ minWidth: "50rem" }}
        emptyMessage={
          <p className="w-full flex justify-center items-center">
            No Booking found
          </p>
        }
      >
        <Column header="#" style={{ width: "5%" }} body={(data, options) => options.rowIndex + 1}></Column>
        <Column
          field="startDate"
          header="START DATE"
          body={startDateSketch}
          style={{ width: "11%" }}
        ></Column>
        <Column
          field="returnDate"
          header="RETURN DATE"
          body={returnDateSketch}
          style={{ width: "11%" }}
        ></Column>
        <Column
          field="vehichleId"
          header="VEHICLE ID"
          style={{ width: "11%" }}
        ></Column>
        <Column
          field="customerName"
          header="CUSTOMERS"
          style={{ width: "11%" }}
        ></Column>
        <Column field="phoneNumber" header="PHONE" style={{ width: "11%" }}></Column>
        <Column field="email" header="EMAIL" style={{ width: "11%" }}></Column>
        <Column
          field="bookingState"
          header="STATUS"
          dataType="string"
          body={statusSketch}
          style={{ width: "5%" }}
        ></Column>
      </DataTable>
    </div>
  );
};

export default DashboardBookings;
