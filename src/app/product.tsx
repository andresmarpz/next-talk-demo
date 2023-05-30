import Image from "next/image";
import { Product } from "../../lib/get-products";

export default function ProductItem({ product }: { product: Product }) {
    return (
        <li className="border rounded-lg p-4 flex flex-col justify-between">
            <div>
                <h2 className="text-lg font-bold">{product.name}</h2>
                <p className="text-gray-500">{product.brand}</p>
                <p className="text-gray-700 font-bold">${product.price}</p>
            </div>
            <div className="rounded-md overflow-hidden w-48 h-48 mx-auto relative">
                <Image src={product.imageURL} width={192} height={192} alt={product.name} />
            </div>
        </li>
    );
}