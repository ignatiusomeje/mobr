import { ArrowLeft, Bookmark, Check, Eye, EyeOff, X } from "lucide-react";
import { Dialog } from "primereact/dialog";
import React, { useState } from "react";
import VehicleInformation from "./VehicleInformation";
import VehicleFeatures from "./VehicleFeatures";
// import SuccessPop from "./SuccessPop";
// import { uploadDetailsPopType } from "../../_types/CarType";
import { Button } from "primereact/button";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
// import { clearLoading, clearMoreInfoPop } from "../../_Data/CarSlice";
import BackDialog from "./BackDialog";
import { useRouter } from "next/navigation";
import { uploadDetailsPopType } from "@/app/dashboard/car-listing/_types/CarType";
import { useGetAllCarFeatureForDisplayQuery } from "@/app/dashboard/car-listing/_Data/CarAPI";
import { clearLoading, clearMoreInfoPop } from "@/app/dashboard/car-listing/_Data/CarSlice";
// import { useGetAllCarFeatureForDisplayQuery } from "../../_Data/CarAPI";

const UploadDetailsPop = ({
  // setVisible,
  newCarFormik,
  submit,
  publishLoading,
  addFeatureLoading,
  visible,
}: uploadDetailsPopType) => {
  const moreInfoPop = useAppSelector((state) => state.cars.moreInfoPop);
  const dispatch = useAppDispatch();
  const [internalVisible, setInternalVisible] = useState<boolean>(false);
  useGetAllCarFeatureForDisplayQuery({});
  const router = useRouter();
  // const [success, setSuccess] = useState<{
  //   visible: boolean;
  //   isDraft: boolean;
  // }>({
  //   visible: false,
  //   isDraft: false,
  // });
  return (
    <Dialog
      visible={moreInfoPop}
      // visible
      className={`rounded-[20px] max-h-lvh .flex .justify-center .items-center h-full mb-10 mt-10 max-w-[1100px] w-full`}
      modal
      onHide={() => {
        if (!moreInfoPop) return;
        // setInternalVisible(true)
        // dispatch(clearMoreInfoPop())
        // setVisible({ isdraft: null, open: false });
      }}
      content={() => (
        <div
          className={`rounded-[20px] px-[32px] h-full flex flex-col gap-[20px] bg-[#F9F9F9] pt-[32px] pb-[60px] border border-[#C6C6C6]`}
        >
          <div className={`flex justify-between items-center`}>
            <p
              className={`text-[#11975D] flex items-center gap-3 font-square text-[14px] font-[700] leading-[22px] tracking-[0.25px]`}
            >
              <ArrowLeft
                onClick={() => setInternalVisible(true)}
                width={16}
                className={`cursor-pointer`}
              />{" "}
              ADD NEW CAR
            </p>
            <div className={`flex gap-[40px] items-center`}>
              <p
                className={`gap-[4px] cursor-pointer border-b border-b-[#F9F9F9] hover:border-b-[#222B2E] hover:rounded-b-sm flex items-center`}
              >
                Make car {true ? `invisible ` : `visible `}{" "}
                {true ? <EyeOff width={12} /> : <Eye width={12} />}
              </p>
              <X
                className={`cursor-pointer`}
                width={16}
                color="#8D1510"
                onClick={() => setInternalVisible(true)}
              />
            </div>
          </div>
          <div
            className={`flex .gap-[32px] flex-grow flex-col h-full flex-1 overflow-y-scroll noScroll`}
          >
            <VehicleInformation newCarFormik={newCarFormik} />
            <VehicleFeatures newCarFormik={newCarFormik} />
            {/* <Button
              className={`.text-[#8D1510] w-max h-max text-white font-square font-[400] text-[14px] leading-[22px] tracking-[0.25px]`}
            >
              DELETE CAR
            </Button> */}
            <div className={`flex mt-auto items-center gap-[8px] .p-[24px]`}>
              <Button
                type="submit"
                className={`w-full flex justify-center items-center focus:ring-0 rounded-[20px] border border-[#11975D] gap-[8px] py-[8px] px-[14px] text-[#11975D] font-[400] font-square text-[10px] leading-[18px] tracking-[0.4px]`}
                loading={(publishLoading || addFeatureLoading) && visible}
                disabled={publishLoading || addFeatureLoading}
                onClick={
                  async () => {
                    // await setVisible(true);
                    // await newCarFormik.submitForm();
                    await submit(true)
                  }
                  // setSuccess((prev) => ({
                  //   ...prev,
                  //   visible: true,
                  //   isDraft: true,
                  // }))
                }
              >
                SAVE TO DRAFT <Bookmark width={14} />
              </Button>
              <Button
              type="button"
                loading={(publishLoading || addFeatureLoading) && !visible}
                disabled={publishLoading || addFeatureLoading}
                className={`w-full flex justify-center items-center focus:ring-0 gap-[8px] py-[8px] px-[14px] rounded-[20px] bg-[#11975D] hover:bg-[#3A494F] text-[#FFFFFF] font-[400] font-square text-[10px] leading-[18px] tracking-[0.4px]`}
                onClick={
                  async () => {
                    // await setVisible(false);
                    await submit(false);
                  }
                  // setSuccess((prev) => ({
                  //   ...prev,
                  //   visible: true,
                  //   isDraft: false,
                  // }))
                }
              >
                PUBLISH <Check width={14} />
              </Button>
            </div>
          </div>
          {/* setVisible({ isdraft: null, open: false }) */}
          {/* <SuccessPop visible={success} setVisible={setSuccess} /> */}
          <BackDialog
            visible={internalVisible}
            setVisible={(e) => setInternalVisible(e)}
            router={async () => {
              await newCarFormik.submitForm();
              await dispatch(clearMoreInfoPop());
              await dispatch(clearLoading());
              await router.push("/dashboard/drafts");
            }}
          />
        </div>
      )}
    ></Dialog>
  );
};

export default UploadDetailsPop;
