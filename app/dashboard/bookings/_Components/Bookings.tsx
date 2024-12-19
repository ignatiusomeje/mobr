import React, { useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
// import { Booking } from "@/types/Bookings";
import { OverlayPanel } from "primereact/overlaypanel";
import { Button } from "primereact/button";
// import { dataSet } from "@/utils/data";
import BookingHistoryPop from "./BookingHistoryPop";
import { bookingResponseType, bookingState } from "../_Types/BookingTypes";
import moment from "moment";
import {
  useLazyGetACarByIdQuery,
  useLazyGetAllCarFeatureQuery,
} from "../../car-listing/_Data/CarAPI";
import { useLazyGetOneCustomerQuery } from "../../customers/_Data/customerAPI";
import { useAppDispatch } from "@/store/hooks";
import { setCurrentBooking, showBookingPop } from "../_Data/BookingSlice";
import ListBookingHistoryPop from "./ListBookingHistoryPop";

const Bookings = ({ bookings }: { bookings: bookingResponseType[] }) => {
  const [GetACarByIdTrigger, GetACarById] = useLazyGetACarByIdQuery();
  const [GetOneCustomerTrigger, GetOneCustomer] = useLazyGetOneCustomerQuery();
  const [GetAllCarFeatureTrigger, GetAllCarFeature] =
    useLazyGetAllCarFeatureQuery();
  const dispatch = useAppDispatch();
  const options = useRef<OverlayPanel>(null);
  const data = bookings;

  const statusSketch = (value: bookingResponseType) =>
    value.bookingState === bookingState.Booked ? (
      <span
        className={`bg-[#C6EBD7] flex items-center justify-center w-[100px] text-[#00552E] rounded-[20px] p-[6px] font-inter font-[400] capitalize text-[12px] `}
      >
        {value.bookingState}
      </span>
    ) : value.bookingState === bookingState.Cancelled ? (
      <span
        className={`bg-[#FFD5C9] flex items-center justify-center w-[100px] text-[#8D1510] rounded-[20px] p-[6px] font-inter font-[400] capitalize text-[12px]`}
      >
        {value.bookingState}
      </span>
    ) : (
      <span
        className={`bg-[#E2E2E2] flex items-center justify-center w-[100px] text-[#475960] rounded-[20px] p-[6px] font-inter font-[400]- capitalize text-[12px]`}
      >
        {value.bookingState}
      </span>
    );
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

  const actionSketch = (value: bookingResponseType) => (
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
        className={` bg-[#F1F1F1] max-w-[131px] w-full`}
      >
        <Button
          onClick={() => {
            dispatch(showBookingPop({ show: true }));
            dispatch(setCurrentBooking(value));
            GetACarByIdTrigger({ vehicleId: value.vehichleId });
            GetOneCustomerTrigger({ id: value.customerId });
            GetAllCarFeatureTrigger({ vehicleId: value.vehichleId });
          }}
          className={`text-[#222B2E] w-full hover:bg-[#DDE4E6] hover:cursor-pointer block font-square focus:ring-0 text-[16px] font-[400] py-[10px] px-[12px]`}
        >
          View
        </Button>
        {value.isPaid && value.bookingState !== bookingState.Booked && (
          <Button
            className={`text-[#222B2E] w-full hover:bg-[#DDE4E6] hover:cursor-pointer block font-square focus:ring-0 text-[16px] font-[400] py-[10px] px-[12px]`}
          >
            Approve
          </Button>
        )}
        {value.isPaid &&
          value.bookingState !== bookingState.Cancelled &&
          value.bookingState !== bookingState.Booked && (
            <Button
              className={`text-[#8D1510] w-full block hover:bg-[#DDE4E6] hover:cursor-pointer font-square focus:ring-0 text-[16px] font-[400] py-[10px] px-[12px]`}
            >
              Cancel
            </Button>
          )}
      </OverlayPanel>
    </div>
  );

  return (
    <div className={`gap-[12px]`}>
      <DataTable
        value={data}
        rowHover={true}
        paginator
        onSelectionChange={(e) => {
          dispatch(showBookingPop({ show: true }));
          dispatch(setCurrentBooking(e.value));
          GetACarByIdTrigger({ vehicleId: e.value.vehichleId });
          GetOneCustomerTrigger({ id: e.value.customerId });
          GetAllCarFeatureTrigger({ vehicleId: e.value.vehichleId });
        }}
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        tableStyle={{ minWidth: "50rem" }}
        selectionMode="single"
        emptyMessage={
          <p className="w-full flex justify-center items-center">
            No Booking found
          </p>
        }
      >
        <Column field="bookingId" header="#" style={{ width: "5%" }}></Column>
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
        <Column
          field="phoneNumber"
          header="PHONE"
          style={{ width: "11%" }}
        ></Column>
        <Column field="email" header="EMAIL" style={{ width: "11%" }}></Column>
        <Column
          field="bookingState"
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
      <BookingHistoryPop
        GetACarById={GetACarById.isFetching}
        GetOneCustomer={GetOneCustomer.isFetching}
        GetAllCarFeature={GetAllCarFeature.isFetching}
        GetOneCustomerTrigger={(id)=> GetOneCustomerTrigger({id: id })}
      />
      <ListBookingHistoryPop GetOneCustomerTrigger={(id)=> GetOneCustomerTrigger({id: id })}/>
    </div>
  );
};

export default Bookings;
