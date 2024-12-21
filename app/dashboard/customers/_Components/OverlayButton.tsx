import { Button } from "primereact/button";
import { OverlayPanel } from "primereact/overlaypanel";
import React, { useRef } from "react";
import { customerResponse } from "../_types/CustomerTypes";
import {
  useBlockOneCustomerMutation,
  useValidateOneCustomerMutation,
} from "../_Data/customerAPI";

const OverlayButton = ({
  value,
  showOneCustomer,
}: {
  value: customerResponse;
  showOneCustomer: (id: number) => void;
}) => {
  const options = useRef<OverlayPanel>(null);
  const [ValidateOneCustomerMutation] = useValidateOneCustomerMutation();
  const [BlockOneCustomerMutation] = useBlockOneCustomerMutation();
  return (
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
        {!value.isValidated && (
          <a
            className={`text-[#222B2E] block hover:bg-[#DDE4E6] hover:cursor-pointer font-square text-[16px] font-[400] py-[10px] px-[12px]`}
            onClick={() => ValidateOneCustomerMutation({ id: value.id })}
          >
            Verify
          </a>
        )}
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
              className={`text-[#8D1510] block hover:bg-[#DDE4E6] hover:cursor-pointer font-square text-[16px] font-[400] py-[10px] px-[12px]`}
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
};

export default OverlayButton;
