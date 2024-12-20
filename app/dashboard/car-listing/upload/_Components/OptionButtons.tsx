import { X } from "lucide-react";
import React from "react";
import { createACarFeatureResponseTypes } from "../../_types/CarType";
import { useDeleteACarFeatureMutation } from "../../_Data/CarAPI";

const OptionButtons = ({
  feature,
  selected,
  onValueChangeEvent,
}: {
  feature: createACarFeatureResponseTypes;
  selected: boolean;
  onValueChangeEvent: (e: createACarFeatureResponseTypes) => void;
}) => {
  const [DeleteACarFeatureMutation] = useDeleteACarFeatureMutation();
  return (
    <div className={`w-max h-min relative`}>
      <span
        onClick={() => onValueChangeEvent(feature)}
        className={`rounded-[10px] focus:ring-0 border ${
          selected ? `bg-[#1B2E35] text-white` : `bg-[#E8E8E8]`
        } border-[#C6C6C6] cursor-pointer py-[7px] capitalize my-[4px] px-[12px] .bg-[#E8E8E8]`}
      >
        {feature?.featureName}
      </span>
      <X
        onClick={() =>
          DeleteACarFeatureMutation({ featureId: feature.featureId.toString() })
        }
        className={`cursor-pointer absolute -top-1 -translate-y-[50%] translate-x-[50%] right-1`}
      />
    </div>
  );
};

export default OptionButtons;
