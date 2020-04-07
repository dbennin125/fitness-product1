import itemsSold from '.data/'; //importing the data from data array
import createItems from './DOMRender';//importing the DOM render

//creating our name for container and getting element from HTML
const productCotainer = document.getElementById('container');

for (let i = 0; i <itemsSold.length; i++) {
    const product = itemsSold [i];
    const listOfItems = createItems(itemsSold);

    productCotainer.appendChild(listOfItems);
}


