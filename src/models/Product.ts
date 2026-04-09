import {calculateDiscount} from "../utils/discountCalculator.js"
export class Product {
    id: number;
    title: string;
    category: string;
    price: number;
    discountPercentage: number;
    sku: string;

    //constructor to initialize product details
    constructor(id: number, title: string, category: string ,price: number, discountPercentage: number, sku: string) {
        this.id = id;
        this.title = title;
        this.category = category;
        this.price = price;
        this.discountPercentage = discountPercentage;
        this.sku = sku;
    }
    //Returns product details as a formatted string
    displayDetails(): string {
        return `ID: ${this.id}, Title: ${this.title}, Category: ${this.category}, Price: ${this.price}, DiscountPercentage: ${this.discountPercentage}, SKU: ${this.sku} `;
    }
    
    //Returna product price with discount
    getPriceWithDiscount(): number {
        return this.price - calculateDiscount(this);
    }
    
}
