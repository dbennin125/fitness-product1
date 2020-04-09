//import cartItems from './cart.js'; //this is no longer needed as we will be getting the CART from browsers local storage
import productsSold from './data.js'; //my products
import { findById, calcOrderTotal, } from './utils.js';
//import { calcLineTotal } from './utils.js';
import makeTable from './CartDOMRender.js';//importing the DOM render


//creating our name for container and getting element from HTML
const myTbody = document.querySelector('tbody');
const finalTotal = document.getElementById('tfoot');
//this is where our appened order button will go back to the element in HTML
const orderButton = document.getElementById('buyItem'); 

//we will no longer need our cartItem because the data is in local storage
//we will get the local storage by const
const json = localStorage.getItem('CART'); //grabbing the contents of cart with getItem command
let cart; //we are intializing the cart, the let means it will change
if (json) { //the data we have is in a string,  so a parse is needed to use the data
    cart = JSON.parse(json); //we are bring the string back to be used as and object
} else {
    cart = []; //we are a robot and need to check if there is cart, if there isn't we make one
}


for (let i = 0; i < cart.length; i++) {
    //going through the NOW dynmaic CART array which we destringifed to use
    const boughtItem = cart[i];
    //going through products array to get a match from the dynamic CART and list of products
    const boughtProduct = findById(productsSold, boughtItem.id);
    //making a table with the match
    const result = makeTable(boughtProduct, boughtItem);
    
    //console.log(orderTotal, 'orderTotal');
    //console.log(boughtProduct, 'boughtProduct');
    myTbody.appendChild(result);
}

const orderTotal = calcOrderTotal(cart, productsSold);
finalTotal.textContent = orderTotal;


if (cart.length === 0) {
    orderButton.disabled = true; //this will handled in CSS not hardcoded
} else {
    orderButton.addEventListener('click', () => {
        localStorage.removeItem('CART'); //getting rid of the stored local data after order is sent
        alert('Order place:\n' + JSON.stringify(cart, true, 2)); //give the user feed back via order item string
        window.location = '../'; //leads of back to home page completing order
    });
}
