import itemsSold from './data.js'; //importing the data from data array
import createItems from './ProductDOMRender.js';//importing the DOM render

//creating our name for container and getting element from HTML
const productCotainer = document.getElementById('myList');


for (let i = 0; i < itemsSold.length; i++) {
    const product = itemsSold [i];
    
    const listOfItems = createItems(product);
    
    productCotainer.appendChild(listOfItems);
}

