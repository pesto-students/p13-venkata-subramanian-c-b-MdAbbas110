const productViews = new WeakMap()

const cartItems = new WeakSet()

function incrementProductViews (productId){
    if(productViews.has(productId)){
        const viewCount = productViews.get(productId)
        productViews.set(productId, viewCount + 1)
    } else {
        productViews.set(productId, 1)
    }
    return productViews.get(productId)
}

function addToCart (productId){
    if(!cartItems.has(productId)){
        cartItems.add(productId) //use add to add the weakSet
        return `Product added to cart`
    } else {
        return `Product already in added`
    }
}

// Test Case 1: Increment product views
console.log(incrementProductViews(123)); // Output: 1 (Product ID 123 is viewed for the first time)
console.log(incrementProductViews(123)); // Output: 2 (Product ID 123 is viewed for the second time)

// Test Case 2: Add products to cart
console.log(addToCart(456)); // Output: "Product added to cart" (Adding Product ID 456 to the cart)
console.log(addToCart(789)); // Output: "Product added to cart" (Adding Product ID 789 to the cart)
console.log(addToCart(456)); // Output: "Product already in cart" (Product ID 456 is already in the cart)
console.log(addToCart(101)); // Output: "Product added to cart" (Adding Product ID 101 to the cart)
