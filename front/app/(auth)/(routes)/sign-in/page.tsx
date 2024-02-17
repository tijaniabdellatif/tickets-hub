"use client"
import { Button } from '@/components/ui/button'
import React, { useEffect } from 'react'
import { useRefreshTokenQuery } from '@/scoope/features/api/apiSlice'

type Props = {}

const Home = (props: Props) => {

  const {isLoading,data} = useRefreshTokenQuery({});

    useEffect(() => {
         if(!isLoading){



             console.log(data);
         }
       
    },[data]);
  
  return (
    <div className='text-3xl font-medium text-sky-700'>

        <h2>This is a protected page</h2>
        <Button variant={'destructive'}>Click me</Button>
    </div>
  )
}

export default Home;