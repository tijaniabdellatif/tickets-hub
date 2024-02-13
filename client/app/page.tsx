import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-around align-middle">
          
          <Link href="/about">About</Link> 
          <Link href="/products">Products</Link> 
    </main>
  );
}
