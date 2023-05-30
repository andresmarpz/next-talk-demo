export interface Product {
    id: number;
    name: string;
    brand: string;
    gender: string;
    category: string;
    price: number;
    is_in_inventory: boolean;
    items_left: number;
    imageURL: string;
    slug: string;
    featured: number;
}

export async function getProducts(){
    const data = await fetch('https://raw.githubusercontent.com/andresmarpz/next-talk-demo/main/json/data.json')

    return await data.json() as { products: Product[] };
}