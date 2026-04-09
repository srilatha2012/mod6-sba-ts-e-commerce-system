import { Product } from "../models/Product.js"

// Calculate the discount amount based on product price and discount percentage
export function calculateDiscount(product: Product): number {
    return product.price * (product.discountPercentage / 100);
}
