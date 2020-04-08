export function findById(products, cartId) {
    // loop the array
    for (let i = 0; i < products.length; i++) {
        const product = products[i]; 

        // check the id against item.id
        if (product.id === cartId) {
            return product;
        }
    }

    // loop done, nothing found
    return null;
}

export function toUSD(number) {
    return number.toLocaleString('en-US', { 
        style: 'currency', 
        currency: 'USD' 
    });
}

export function calcLineTotal(quantity, price) {
    const amount = quantity * price;
    return roundCurrency(amount);
}

// fun with JavaScript maths and floating point numbers!
function roundCurrency(amount) {
    return Math.round(amount * 100) / 100;
}

export function calcOrderTotal(cart, products) {
    let orderTotal = 0;

    for (let i = 0; i < cart.length; i++) {
        const lineItem = cart[i];
        const product = findById(products, lineItem.id);
        const lineTotal = calcLineTotal(lineItem.quantity, product.price);
        orderTotal += lineTotal;
    }

    return roundCurrency(orderTotal);
}