import React from 'react';
import Image from 'next/image';

type Props = {
    height:number,
    width:number,
    alt:string,
    src:string,
    text?:string
}

const Logo = ({height,width,alt,src,text}:Props) => {
  return (
    <div className='flex align-baseline items-center'>
     <Image
     height={height}
     width={width}
     alt={alt}
     src={src}
     />
     <p className='px-2 font-semibold text-2xl text-slate-600'>{text}</p>
    </div>
    
  )
}

export default Logo