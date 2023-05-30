import { getProducts } from "../../../../lib/get-products";

export async function GET() {
    const products = await getProducts()

    return new Response(
        JSON.stringify(products), 
        { 
            status: 200, 
            headers: { 
                'Content-Type': 'application/json', 
                'Cache-Control': 'public, max-age=31536000, immutable' 
            } 
        }
    )
}