import cartItems from './cart.js'; //importing the data from data array
import makeTable from './CartDOMRender.js';//importing the DOM render

//creating our name for container and getting element from HTML
const tableCountainer = document.getElementById('table');
const buyButton = document.getElementById('buyItem');

for (let i = 0; i < cartItems.length; i++) {
    const boughtItem = cartItems [i];
    
    const table = makeTable(boughtItem);

    tableCountainer.appendChild(table);
}

buyButton.value = '';
