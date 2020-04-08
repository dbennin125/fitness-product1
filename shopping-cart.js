import cartItems from './cart.js'; //importing the data from data array
import productsSold from './data.js'; //my products
import { findById, calcOrderTotal, } from './utils.js';
//import { calcLineTotal } from './utils.js';
import makeTable from './CartDOMRender.js';//importing the DOM render


//creating our name for container and getting element from HTML
const myTbody = document.querySelector('tbody');
const finalTotal = document.getElementById('tfoot');

//creating the button
//const buyButton = document.getElementById('buyItem');
//going through the cart
for (let i = 0; i < cartItems.length; i++) {
    //going through cart array to find info
    const boughtItem = cartItems[i];
    //going through products array to get a match
    const boughtProduct = findById(productsSold, boughtItem.id);
    //making a table with the match
    const result = makeTable(boughtProduct, boughtItem);
    
    const orderTotal = calcOrderTotal(cartItems, productsSold);
    finalTotal.textContent = orderTotal;
    //console.log(orderTotal, 'orderTotal');
    //console.log(boughtProduct, 'boughtProduct');
    myTbody.appendChild(result);
}


