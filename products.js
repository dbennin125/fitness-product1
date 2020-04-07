import itemsSold from './data.js'; //importing the data from data array
import createItems from './DOMRender.js';//importing the DOM render

//creating our name for container and getting element from HTML
const productCotainer = document.getElementById('myList');
const addButton = document.getElementById('add');

for (let i = 0; i < itemsSold.length; i++) {
    const product = itemsSold [i];
    
    const listOfItems = createItems(product);

    productCotainer.appendChild(listOfItems);
}

addButton.value = 'workoutHour';
