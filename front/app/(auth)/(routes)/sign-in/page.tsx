"use client";
import { Button } from '@/components/ui/button'
import { useRefreshTokenQuery } from '@/scoope/features/api/apiSlice';
import axios from 'axios';
import { error } from 'console';
import { useEffect } from 'react';



export default  function Home(){

const {data,isLoading,error,isUninitialized} = useRefreshTokenQuery({});


console.log(data,isLoading,error);
  return(

      <>
      <h1> hello world </h1>
      </>
  );
}

