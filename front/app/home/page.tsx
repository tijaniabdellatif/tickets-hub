import React from 'react';
import Header from '@/components/Header';
type Props = {}

const HomePage = (props: Props) => {
  return (
    <section className='h-full'>
       <div className='h-[80px]  fixed inset-y-0 w-full z-50'>
      <Header />
    </div>
    </section>
   
  )
}

export default HomePage