import { Column } from "primereact/column";
import { DataTable, DataTableValueArray } from "primereact/datatable";
import { Skeleton } from "primereact/skeleton";
import React from "react";

const BookingsLoader = () => {
  const items = Array.from({ length: 10 }, (v, i) => i);
  return (
    <div>
      <DataTable
        value={items as unknown as DataTableValueArray}
        className="p-datatable-striped"
      >
        <Column
          field="id"
          header="#"
          style={{ width: "5%" }}
          body={<Skeleton />}
        ></Column>
        <Column
          field="start"
          header="START DATE"
          style={{ width: "11%" }}
          body={<Skeleton />}
        ></Column>
        <Column
          field="return"
          header="RETURN DATE"
          style={{ width: "11%" }}
          body={<Skeleton />}
        ></Column>
        <Column
          field="vehicleId"
          header="VEHICLE ID"
          style={{ width: "11%" }}
          body={<Skeleton />}
        ></Column>
        <Column
          field="customer"
          header="CUSTOMERS"
          style={{ width: "11%" }}
          body={<Skeleton />}
        ></Column>
        <Column
          field="phone"
          header="PHONE"
          style={{ width: "11%" }}
          body={<Skeleton />}
        ></Column>
        <Column
          field="email"
          header="EMAIL"
          style={{ width: "11%" }}
          body={<Skeleton />}
        ></Column>
        <Column
          field="status"
          header="STATUS"
          dataType="string"
          body={<Skeleton />}
          style={{ width: "5%" }}
        ></Column>
        <Column
          // field="representative.name"
          header="ACTION"
          style={{ width: "5%" }}
          body={<Skeleton />}
        ></Column>
      </DataTable>
    </div>
  );
};

export default BookingsLoader;
