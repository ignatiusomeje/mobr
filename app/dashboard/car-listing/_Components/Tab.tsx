import { Button } from 'primereact/button'
import React from 'react'

const Tab = ({name, selected}:{name:string, selected:boolean}) => {
  return (
    <Button className={`font-inter text-[12px] font-[500] rounded-[16px] py-[12px] px-[24px] ${selected ? 'bg-[#1B2E35] text-[#C6C6C6]': "bg-[#E8E8E8] text-[#1B2E35]"}`}>
      {name}
    </Button>
  )
}

export default Tab