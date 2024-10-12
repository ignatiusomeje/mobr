import { X } from 'lucide-react';
import { Dialog } from 'primereact/dialog';
import React, { useState } from 'react'
import DamageReportCard from './DamageReportCard';

const DamageReportPop = () => {
  const [visible, setVisible] = useState<boolean>(false)
  return (
    <Dialog
      visible={false}
      // visible
      className={`rounded-[20px] max-h-lvh h-full mb-10 mt-10 max-w-[790px] w-full`}
      modal
      onHide={() => {
        if (!visible) return;
        setVisible(false);
      }}
      content={({ hide }) => (
        <div
          className={`rounded-[20px] px-[32px] h-full flex flex-col gap-[20px] bg-[#F9F9F9] pt-[32px] pb-[60px] border border-[#C6C6C6]`}
        >
          <div className={`flex justify-between items-center`}>
            <h4
              className={`font-square font-[700] text-[14px] leading-[22px] tracking-[0.25px] text-[#11975D]`}
            >
              DAMAGE REPORT
            </h4>
            <X
              className={`cursor-pointer`}
              width={16}
              color="#8D1510"
              onClick={(e) => hide(e)}
            />
          </div>
          <div className={`flex gap-[40px] flex-col flex-grow flex-1 overflow-y-scroll noScroll`}>
            {[1,2,3,4,5,6,7,8,9,10].map(index => <DamageReportCard key={index} />)}
          </div>
        </div>
      )}
    ></Dialog>
  )
}

export default DamageReportPop