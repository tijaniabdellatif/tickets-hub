import React from 'react'
import {twJoin} from "tailwind-merge"
type Props = {}

const PolicyPage = (props: Props) => {

  const isClass = false;
  return (
    <div className={twJoin(
        "text-black",
        isClass && "bg-red-500 h-[80px]"
      
    )}>

      <h2>Hello world</h2>
    </div>
  )
}

export default PolicyPage