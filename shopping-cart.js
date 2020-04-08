import cartItems from './cart.js'; //importing the data from data array
import itemsSold from './data.js'; //my products
import { findById } from './utils.js';
//import { calcLineTotal } from './utils.js';
import makeTable from './CartDOMRender.js';//importing the DOM render


//creating our name for container and getting element from HTML
const tableCountainer = document.getElementById('table');


//creating the button
const buyButton = document.getElementById('buyItem');
//going through the cart
for (let i = 0; i < cartItems.length; i++) {
    //going through cart array to find info
    const boughtItem = cartItems [i];
    //going through products array to get a match
    const boughtProduct = findById(itemsSold, boughtItem);
    //making a table with the match
    const table = makeTable(boughtProduct);

    tableCountainer.appendChild(table);
}

buyButton.value = '';
