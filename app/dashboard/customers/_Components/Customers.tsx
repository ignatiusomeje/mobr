import React, { useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { OverlayPanel } from "primereact/overlaypanel";
import { Button } from "primereact/button";
// import { dataSet } from "@/utils/data";
import CustomerInfo from "./CustomerInfo";
import { customerResponse, customerType2 } from "../_types/CustomerTypes";
import moment from "moment";
import {
  useBlockOneCustomerMutation,
  useValidateOneCustomerMutation,
} from "../_Data/customerAPI";

const Customers = ({
  customer,
  customers,
  showPopUp,
  closeShowOneCustomer,
  showOneCustomer,
}: customerType2) => {
  const options = useRef<OverlayPanel>(null);
  const options2 = useRef<OverlayPanel>(null);
  const [ValidateOneCustomerMutation] = useValidateOneCustomerMutation();
  const [BlockOneCustomerMutation] = useBlockOneCustomerMutation();
  // const data = dataSet;

  const statusSketch = (value: customerResponse) =>
    !value.isActive ? (
      <span
        className={`bg-[#8D1510] flex items-center justify-center w-[100px] text-white rounded-[20px] p-[6px] font-inter font-[400] capitalize text-[12px] `}
      >
        Blocked
      </span>
    ) : value.isValidated ? (
      <span
        className={`bg-[#C6EBD7] flex items-center justify-center w-[100px] text-[#00552E] rounded-[20px] p-[6px] font-inter font-[400] capitalize text-[12px] `}
      >
        Verified
      </span>
    ) : (
      <span
        className={`bg-[#E2E2E2] flex items-center justify-center w-[100px] text-[#475960] rounded-[20px] p-[6px] font-inter font-[400]- capitalize text-[12px]`}
      >
        Unverified
      </span>
    );

  const DateCreatedSketch = (value: customerResponse) => (
    <span>{moment(value.created).format("d MMM, YYYY")}</span>
  );

  const DateUpdatedSketch = (value: customerResponse) => (
    <span>{moment(value.created).format("d MMM, YYYY")}</span>
  );

  const actionSketch = (value: customerResponse) =>
    !value.isValidated ? (
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
          className={` bg-[#F1F1F1] text-center max-w-[131px] w-full`}
        >
          <a
            className={`text-[#222B2E] hover:bg-[#DDE4E6] hover:cursor-pointer block font-square text-[16px] font-[400] py-[10px] px-[12px]`}
            onClick={() => showOneCustomer(value.id)}
          >
            View
          </a>
          {/* {!value.isValidated && ( */}
          <a
            className={`text-[#222B2E] block hover:bg-[#DDE4E6] hover:cursor-pointer font-square text-[16px] font-[400] py-[10px] px-[12px]`}
            onClick={() => ValidateOneCustomerMutation({ id: value.id })}
          >
            Verify
          </a>
          {/* )} */}
          {/* {value.isValidated &&
            (value.isActive ? (
              <a
                className={`text-[#8D1510] block hover:bg-[#DDE4E6] hover:cursor-pointer font-square text-[16px] font-[400] py-[10px] px-[12px]`}
                onClick={() =>
                  BlockOneCustomerMutation({ id: value.id, blockState: false })
                }
              >
                Block
              </a>
            ) : (
              <a
                className={`text-[#8D1510] block hover:bg-[#DDE4E6] hover:cursor-pointer font-square text-[16px] font-[400] py-[10px] px-[12px]`}
                onClick={() =>
                  BlockOneCustomerMutation({ id: value.id, blockState: true })
                }
              >
                Unblock
              </a>
            ))} */}
        </OverlayPanel>
      </div>
    ) : (
      <div className="relative">
        <Button
          className={`focus:ring-0`}
          icon="pi pi-ellipsis-v"
          onClick={(e) => options2?.current?.toggle(e)}
        />
        <OverlayPanel
          ref={options2}
          closeOnEscape
          dismissable={true}
          className={` bg-[#F1F1F1] text-center max-w-[131px] w-full`}
        >
          <a
            className={`text-[#222B2E] hover:bg-[#DDE4E6] hover:cursor-pointer block font-square text-[16px] font-[400] py-[10px] px-[12px]`}
            onClick={() => showOneCustomer(value.id)}
          >
            View
          </a>
          {/* {!value.isValidated && (
            <a
              className={`text-[#222B2E] block hover:bg-[#DDE4E6] hover:cursor-pointer font-square text-[16px] font-[400] py-[10px] px-[12px]`}
              onClick={() => ValidateOneCustomerMutation({ id: value.id })}
            >
              Verify
            </a>
          )} */}
          {value.isValidated &&
            (value.isActive ? (
              <a
                className={`text-[#8D1510] block hover:bg-[#DDE4E6] hover:cursor-pointer font-square text-[16px] font-[400] py-[10px] px-[12px]`}
                onClick={() =>
                  BlockOneCustomerMutation({ id: value.id, blockState: true })
                }
              >
                Block
              </a>
            ) : (
              <a
                className={`text-[#11975D] block hover:bg-[#DDE4E6] hover:cursor-pointer font-square text-[16px] font-[400] py-[10px] px-[12px]`}
                onClick={() =>
                  BlockOneCustomerMutation({ id: value.id, blockState: false })
                }
              >
                Unblock
              </a>
            ))}
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
        <Column header="#" style={{ width: "5%" }} body={(data, options) => options.rowIndex + 1}></Column>
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
          // field="isValidated"
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
