import { CircleGauge, PencilLine, X } from "lucide-react";
import Image from "next/image";
import { Button } from "primereact/button";
import React, { useState } from "react";
import CarImageShow from "./CarImageShow";
import { useRouter } from "next/navigation";
import { VehiclesCardType } from "../../car-listing/_types/CarType";
import {
  useDeleteACarMutation,
  useLazyGetACarByIdQuery,
  useLazyGetAllCarFeatureQuery,
} from "../../car-listing/_Data/CarAPI";
import moment from "moment";
import CarViewPop from "../../car-listing/_Components/carViewPop";
import { useAppDispatch } from "@/store/hooks";
import { clearMoreInfoPop } from "../../car-listing/_Data/CarSlice";

const VehicleCard = ({ vehicle }: VehiclesCardType) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [showVehicle, setShowVehicle] = useState<boolean>(false);
  const [deleteACarMutation, deleteACar] = useDeleteACarMutation();
  const [GetACarByIdTrigger, GetACarById] = useLazyGetACarByIdQuery();
  const [GetAllCarFeatureTrigger, GetAllCarFeature] =
    useLazyGetAllCarFeatureQuery();
  const router = useRouter();
  const dispatch = useAppDispatch();
  return (
    <div
      className={`.max-w-[300px] hover:border-2 hover:border-[#C6C6C6] bg-[#F9F9F9] border-2 border-[#E2E2E2] rounded-[12px] flex flex-col w-full py-[16px] px-[18px] vehicleCard`}
    >
      <div className="h-[140px] .max-w-[260px] overflow-hidden w-full rounded-[8px] relative mb-2">
        <Image
          src={`${
            vehicle.vehicleImages[0].vehicleImageUrl || `/images/acura.jpg`
          }`}
          alt="vehicle name"
          height={260}
          width={140}
          className={`w-full cursor-pointer aspect-[16/11]`}
          onClick={() => setVisible(true)}
        />
        <span className="absolute flex items-center justify-center m-2 h-[22px] w-[49px] top-0 right-0 bg-[#E8E8E8] border border-[#C6C6C6] rounded-[16px] p-[6px] text-[8px] font-[400] font-inter">
          Compact
        </span>
      </div>

      <div className="flex justify-between">
        <div className={`.max-w-[160px] w-full`}>
          <h3 className={`text-[#303030] font-inter text-[14px] font-[600] `}>
            {vehicle.vehicleName ? vehicle.vehicleName : `N/A`}
          </h3>
          <p className={`flex items-center gap-2`}>
            <CircleGauge width={14} />{" "}
            <span
              className={`text-[#303030] font-inter text-[12px] font-[400]`}
            >
              {vehicle.transmissionType ? vehicle.transmissionType : `N/A`}
            </span>
          </p>
          <p className="text-[#777777] text-[14px] font-[400] font-inter">
            Available from{" "}
            {vehicle.vehicleAvaliableDate
              ? moment(vehicle.vehicleAvaliableDate).format("MMM D, YYYY")
              : `N/A`}
            {/* {new Date(vehicle.vehicleAvaliableDate).toLocaleDateString()} */}
          </p>
          <Button
            onClick={() => {
              setShowVehicle(true);
              GetACarByIdTrigger({ vehicleId: vehicle.vehicleId });
              GetAllCarFeatureTrigger({ vehicleId: vehicle.vehicleId });
            }}
            className={`font-square focus:ring-0 p-1 px-2 mt-2 text-[12px] font-[400] text-[#222B2E]`}
          >
            View Vehicle
          </Button>
        </div>
        <p className={`font-square text-[12px] font-[400] text-[#222B2E]`}>
          <span className={`font-bold`}>${vehicle.vehicleRentalPrice}</span>/day
        </p>
      </div>

      <div className={`flex gap-2 pt-[16px] mt-auto w-full justify-between`}>
        <Button
          disabled={deleteACar.isLoading}
          loading={deleteACar.isLoading}
          outlined
          className={`border border-[#8D1510] text-[#8D1510] py-[8px] px-[14px] rounded-[12px] text-[10px] font-[400] focus:ring-0 font-square w-full .w-[125px] flex justify-center items-center gap-3`}
          onClick={() => deleteACarMutation({ vehicleId: vehicle.vehicleId })}
        >
          DELETE <X width={14} />
        </Button>
        <Button
          disabled={deleteACar.isLoading}
          className={`btnChange border bg-[#11975D] text-white w-full .w-[125px] py-[8px] px-[14px] rounded-[12px] focus:ring-0 text-[10px] font-[400] font-square flex justify-center items-center gap-3`}
          onClick={() =>{
            dispatch(clearMoreInfoPop())
            router.push(`/dashboard/car-listing/${vehicle?.vehicleId}/`)
          }
          }
        >
          EDIT
          <PencilLine width={14} />
        </Button>
      </div>
      <CarImageShow
        visible={visible}
        setVisible={setVisible}
        images={vehicle.vehicleImages.map((image) => image.vehicleImageUrl)}
      />
      <CarViewPop
        showVehicle={showVehicle}
        setShowVehicle={() => setShowVehicle(false)}
        GetACarById={GetACarById.isFetching}
        GetAllCarFeature={GetAllCarFeature.isFetching}
      />
    </div>
  );
};

export default VehicleCard;
