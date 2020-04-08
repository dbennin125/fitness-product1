import cartItems from './cart.js'; //importing the data from data array
import productsSold from './data.js'; //my products
import { findById } from './utils.js';
//import { calcLineTotal } from './utils.js';
import makeTable from './CartDOMRender.js';//importing the DOM render


//creating our name for container and getting element from HTML
const myTbody = document.querySelector('tbody');


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
    
    
    myTbody.appendChild(result);
}

