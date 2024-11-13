import { RotateCw } from 'lucide-react'
import React from 'react'

const Loading = () => {
  return (
    <div className={`absolute top-0 bottom-0 left-0 right-0 bg-[#000000c7]  flex items-center justify-center`}>
      <RotateCw className={`animate-spin`} color='#000' />
    </div>
  )
}

export default Loading