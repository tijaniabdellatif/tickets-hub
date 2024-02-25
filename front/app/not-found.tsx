"use client";
import { usePathname } from "next/navigation"

export default function NotFound(){

    const pathname = usePathname();
    
    return <>

        <h1>Page not found</h1>
        <p>the Url <span className="text-xl  text-black font-bold">
        {`https://tickets.dev${pathname}`} 
            </span>does not exist</p>
    </> 
}