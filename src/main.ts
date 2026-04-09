import { fetchProducts } from "./services/apiService.js";
import { DataError, NetworkError } from "./utils/errorHandler.js";
import { Product } from "./models/Product.js";
import { calculateDiscount } from "./utils/discountCalculator.js"
import { calculateTax } from "./utils/taxCalculator.js"

//Type for product data
type productApiData = {
      id: number;
      title: string;
      category: string;
      price: number;
      discountPercentage: number;
      sku: string;
}

async function main() {
      try {
            // Fetch product data from the API
            const result = await fetchProducts();

            // Convert raw API data into Product class objects
            const products: Product[] = result.map((item: productApiData) => {
                  return new Product(
                        item.id,
                        item.title,
                        item.category,
                        item.price,
                        item.discountPercentage,
                        item.sku
                  );
            });
            products.forEach(product => {
                  console.log(product.displayDetails());
                  console.log(`Discount Amount:  $${calculateDiscount(product).toFixed(2)}`);
                  console.log(`Price After Discount:  $${product.getPriceWithDiscount().toFixed(2)}`);
                  console.log(`Tax Amount: $${calculateTax(product).toFixed(2)}`);
                  const finalPrice = product.getPriceWithDiscount() + calculateTax(product);
                  console.log(`Final Price: $${finalPrice.toFixed(2)}`);
                  console.log("=========================================================");
            });

      } catch (error) {
            //handling custom errors and unexpected errors
            if (error instanceof NetworkError) {
                  console.log("Network Error:", error.message);
            } else if (error instanceof DataError) {
                  console.log("Data Error:", error.message)
            } else {
                  console.log("Unexpected Error:", error);
            }

      }

}

main();
