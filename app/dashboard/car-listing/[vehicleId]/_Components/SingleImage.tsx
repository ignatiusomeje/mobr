import { Trash } from "lucide-react";
import Image from "next/image";
import React from "react";

const SingleImage = ({
  src,
  id,
  deleteACarImageMutation,
}: {
  src: string;
  id: number;
  deleteACarImageMutation: (id: number) => void;
}) => {
  return (
    <div className={`flex relative flex-col gap-[10px]`}>
      <Image
        src={src}
        alt="car Image"
        height={160}
        width={220}
        className={`rounded-[8px] block max-w-[220] w-full h-[160px]`}
      />
      <Trash
        width={12}
        onClick={() => deleteACarImageMutation(id)}
        className={`mx-auto cursor-pointer`}
        color="#8D1510"
      />
    </div>
  );
};

export default SingleImage;
