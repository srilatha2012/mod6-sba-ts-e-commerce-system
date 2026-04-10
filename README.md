## e-commerce-system
This project is a simple e-commerce system built using TypeScript. It uses Object Oriented programming concepts along with handling API data, performing calculations like discounts and taxes, and managing asynchronous programming

## Features
- Fetch Product data from an API
- Create Product objects using TypeScript classes
- Calcualte discount and findal price
- Apply tax calculations
- Display product details in a structured formate
- Error handling for API and data issues

## Technologies used
. TypeScript
. JavaScript
. Fetch API
. Node.js

## Project Structure
. src/models - contains Product class
. src/services - handle API calls
. src/utils -Discount and tax calcualtion 
. main.ts - entry point of the applicaiton


## Reflection
1. How you implemented TypeScript features and OOP principles.
I used TypeScript features to define clear types for products, including properties like id, name, price, category, and discount. This helped to ensure that the data was consistent and reduced errors during development. I also used classes to represent the Product and its related behavior, such as displaying details and calculating price after discount and tax. This follows OOP principles like encapsulation, where data and methods are grouped together.

2. The challenges you encountered and how you overcame them.
one of the main challenge was handling type related errors, especially when working with API data.Sometimes the datastructure did not exactly match my Typescript definition, so, I rosloved this by carefully defining types

3. How you handled asynchronous operations and error management.
for asynchronous operations, I used async and await to fetch product data from API. this made the code easier to read and understand compared to traditonal promise chains. I handled errors using try-catch blocks to manage issues.

Overall, using Typescript and OOP priniciple helped me create a well-structured and maintainable e-commerce-system