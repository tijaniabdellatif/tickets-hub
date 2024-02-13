"use client"

type ErrorStack = {
  error:Error,
  reset: () => void
}
export default function ErrorBoundary({error,reset}:ErrorStack){

      return (
        <>
         <h1>{error.message}</h1> 
         <button onClick={reset}>Try again</button> 
   
        </>
      )
}