import {promises as fs} from 'fs';
import path from 'path';

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
    const data = await fs.readFile(path.join(process.cwd(), 'json/data.json'), 'utf-8');

    return JSON.parse(data) as { products: Product[] };
}