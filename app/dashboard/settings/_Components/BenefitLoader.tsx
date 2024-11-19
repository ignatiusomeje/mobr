import React from 'react'
import BenefitFormLoader from './BenefitFormLoader'

const BenefitLoader = () => {
  return (
    <div className={`flex flex-col gap-[32px] w-full`}>
      <div className={`flex flex-col gap-[20px]`}>
        <h3
          className={`text-[#777777] font-inter font-[600] text-[14px] leading-[22px] tracking-[0.25px]`}
        >
          BENEFIT INFORMATION
        </h3>
        <div className={`w-full flex flex-wrap gap-3`}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9,0].map((benefit) => (
            <BenefitFormLoader key={benefit} />
          ))}
          
        </div>
      </div>
    </div>
  )
}

export default BenefitLoader