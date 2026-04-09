import { Product } from "../models/Product.js";

// Calculate the tax amount based on product price and category
export function calculateTax(product: Product): string {
    // default tax rate for most products
    let taxRate = 4.75;
    if (product.category === 'groceries') {
        taxRate = 3;
    }
    const taxAmount = product.price * (taxRate / 100)

    // Return the formatted tax amount with a dollar sign
    return `$${taxAmount.toFixed(2)}`;
}