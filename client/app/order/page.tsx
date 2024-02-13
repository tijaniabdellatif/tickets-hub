"use client"
import { useRouter } from "next/navigation"

export default function Order(){

    const router = useRouter();

    const handleClick = () => {
        console.log('placing the order');
        router.push('/');
    }
     return(
        <>
        <h1>Order Product fields</h1>
        <button onClick={handleClick}>Place order</button>
        </>
     )
}