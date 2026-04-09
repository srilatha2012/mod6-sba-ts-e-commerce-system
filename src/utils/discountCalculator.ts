import { Product } from "../models/Product.js"

// Calculate the discount amount based on product price and discount percentage
export function calculateDiscount(product: Product): string {
    const discountAmount = product.price * (product.discountPercentage / 100);
    
    //return the formatted discount amount witha a dollar sign
    return `$${discountAmount.toFixed(2)}`;
}
