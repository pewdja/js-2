/**
 * inventoryManagement.js
 */

// Exported as a constant so the test suite can mutate/reset its contents
const products = ["Laptop", "Phone", "Headphones", "Monitor"];

// 1. Logs the item at index 0 to the console
const logFirstProduct = () => {
    console.log(products[0]);
};

// 2. Updates a specific index with a new string
const updateProductName = (index, newName) => {
    products[index] = newName;
};

// 3. Removes the final element from the array
const removeLastProduct = () => {
    products.pop();
};

// 4. Adds a new string to the end of the array
const addProduct = (productName) => {
    products.push(productName);
};

module.exports = {
    products,
    logFirstProduct,
    updateProductName,
    removeLastProduct,
    addProduct
};

