import { DataError,NetworkError } from "../utils/errorHandler.js";


const BASE_URL = "https://dummyjson.com/products";

// Fetches all products from the DummyJSON API
async function fetchProducts() {
  try {
    const response = await fetch(BASE_URL);

    // Check if the API request is successful
    if (!response.ok) {
      throw new NetworkError("Failed to fetch products");
    }
    const data = await response.json();
    
    //check if the products field is missing in the API response
    if (!data.products) {
      throw new DataError("Product data is missing");
    }

    //check if the products field is not returned as Array
    if (!Array.isArray(data.products)) {
      throw new DataError("Invalid product data format");
    }
    
    // Check if the products array is empty
    if (data.products.length === 0) {
      throw new DataError("Product list is empty");
    }
    return data.products;

  } catch (error) {
    if (error instanceof NetworkError) {
      console.log("Network Error:", error.message);
    } else if (error instanceof DataError) {
      console.log("Data Error:", error.message)
    } else {
      console.log("Unexpected Error:", error);
    }
    return [];
  }

}
async function showResult() {
  const result = await fetchProducts();
  console.log("result", result);
}
//showResult();


