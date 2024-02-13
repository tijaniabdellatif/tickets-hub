import Link from "next/link";
import { productData } from "../../data/data";

export default function Products() {
  const productID = 100;

  return (
    <>
      <h1>Product list</h1>

      <ul className="flex justify-evenly">
        {productData.map((item) => {
          return (
            <li key={item.id}>
              <Link href={`products/${item.id}`} replace>{item.title}</Link>
            </li>
          );
        })}
      </ul>

      <p>
        <Link href="/">Go back Home</Link>
      </p>
    </>
  );
}
