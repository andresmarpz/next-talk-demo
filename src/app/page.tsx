import { getProducts } from "../../lib/get-products";
import ProductItem from "./product";


export default async function Home() {
  const { products } = await getProducts();

  return (
    <main className="container mx-auto mt-20">
      <h1 className="text-3xl font-bold">Products</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map(product => <ProductItem product={product} />)}
      </ul>
    </main>
  )
}
