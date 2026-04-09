import { Product } from "../models/Product.js";

// Calculate the tax amount based on product price and category
export function calculateTax(product: Product): number {
    // default tax rate for most products
    let taxRate = 4.75;
    if (product.category === 'groceries') {
        taxRate = 3;
    }
   return product.price * (taxRate / 100)
 
}