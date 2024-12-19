import { ArrowLeft, ArrowRight, X } from "lucide-react";
import Image from "next/image";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Galleria } from "primereact/galleria";
import React, { useState } from "react";
import { damageImage } from "../_Types/BookingTypes";

const DamageImageShow = ({
  visible,
  setVisible,
  reportImages
}: {
  visible: boolean;
  setVisible: (e: boolean) => void;
  reportImages:damageImage[]
}) => {
  const [prevEnd, setPrevEnd] = useState<boolean>(true);
  const [nextEnd, setNextEnd] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const next = () => {
    return setActiveIndex((nextState) => {
      if (nextState === reportImages.length - 1) {
        return nextState;
      } else {
        if (nextState + 1 === reportImages.length - 1) {
          setNextEnd(true);
          setPrevEnd(false);
        } else {
          setNextEnd(false);
          setPrevEnd(false);
        }
        return nextState + 1;
      }
    });
  };

  const prev = () => {
    return setActiveIndex((prevState) => {
      if (prevState === 0) {
        return prevState;
      } else {
        if (prevState - 1 === 0) {
          setPrevEnd(true);
          setNextEnd(false);
        } else {
          setPrevEnd(false);
          setNextEnd(false);
        }
        return prevState - 1;
      }
    });
  };

  const ItemTemplate = (item: string) => (
    <div
      className={`.max-h-[360px] .max-w-[600px] overflow-hidden h-full w-full`}
    >
      <Image
        src={item}
        alt="car name"
        width={600}
        height={360}
        className={`.object-cover w-full aspect-video`}
      />
    </div>
  );
  const images = reportImages.map(image => image.damageImageUrl)
  return (
    <Dialog
      visible={visible}
      // visible
      className={`rounded-[12px] .max-h-[480px] .h-full max-w-[600px] w-full`}
      modal
      onHide={() => {
        if (!visible) return;
        setVisible(false);
      }}
      content={({ hide }) => (
        <div
          className={`rounded-[12px] h-full  flex flex-col gap-[20px] bg-[#F9F9F9] py-[12px] border border-[#C6C6C6]`}
        >
          <div className={`flex .ms-auto items-center px-[32px]`}>
            <X
              className={`cursor-pointer ms-auto`}
              width={16}
              color="#1B1B1B"
              onClick={(e) => hide(e)}
            />
          </div>
          <div className={``}>
            <Galleria
              value={images}
              showThumbnails={false}
              onItemChange={() => {}}
              activeIndex={activeIndex}
              item={ItemTemplate}
            />
            <div
              className={`bg-[#FFFFFF] py-[12px] flex items-center justify-center gap-[11px]`}
            >
              <Button
                disabled={prevEnd || reportImages.length === 1}
                onClick={prev}
                className={`py-[10px] px-[16px] focus:ring-0 rounded-[5px] ${
                  prevEnd || reportImages.length === 1 ? `bg-[#C6C6C6]` : `bg-[#11975D]`
                }`}
              >
                <ArrowLeft color="#FFFFFF" width={14} />
              </Button>
              <Button
                onClick={next}
                disabled={nextEnd || reportImages.length === 1}
                className={`py-[10px] px-[16px] focus:ring-0 rounded-[5px] ${
                  nextEnd || reportImages.length === 1 ? `bg-[#C6C6C6]` : `bg-[#11975D]`
                }`}
              >
                <ArrowRight color="#FFFFFF" width={14} />
              </Button>
            </div>
          </div>
        </div>
      )}
    ></Dialog>
  );
};

export default DamageImageShow;
