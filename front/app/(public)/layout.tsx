import React from 'react';
import Header from '@/components/Header';

type Props = {

    children: React.ReactNode
}

const PublicLayout = ({children}:Props) => {
  return (
    <div className=''>

<Header />
        
        {children}
        
        </div>
  )
}

export default PublicLayout;