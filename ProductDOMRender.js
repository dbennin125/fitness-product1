import { findById } from './utils.js';

function createItems(products) {
    //time to create the elements to export
    const li = document.createElement('li'); 
    //creating list to send return

    const categoryList = document.createElement('ol');
    categoryList.textContent = `Category: ${products.category}`;
    
    //creating my name via h1 element
    const nameHeader = document.createElement('h1'); 
    //assigning the nameHeader to the the objects name key
    nameHeader.textContent = products.name; 
    
    //creating images
    const images = document.createElement('img'); 
    //assigning new variable to a source
    images.src = 'https://pbs.twimg.com/profile_images/713412468748328960/TbZI9Fvt.jpg';
    //NOTE!!!!this image is place holder unil the assests folder is filled...
    
    //creating the description
    const itemDescription = document.createElement('p');
    //now assigning my new variable to products descrition
    itemDescription.textContent = products.description;
    
    //creating your prices with p element
    const p = document.createElement('p');
    //const price = document.createElement('p');
    //giving the price 
    p.textContent = `$ ${products.price}`; //learned this string trick from Joey. Thanks JOEY!!

    const addButton = document.createElement ('button');//creating the add button
    addButton.textContent = 'Add item'; //text content of the button
    addButton.value = products.id;
    addButton.addEventListener('click', () => {

        let json = localStorage.getItem('CART');//intinalizing the cart
        let cart; //place holder for cart
        if (json) {//if statemet for seeing if you have a cart
            cart = JSON.parse(json); //great put it in the cart
        } else {//oh no, no cart
            cart = [];//getting the cart
        }

        let lineItem = findById(cart, products.id); //when you click, you'll find the product by id, add it to cart

        if (!lineItem) { //if there isn't already an item in cart then..
            lineItem = {
                id: products.id, //let's find the product by ID
                quantity: 1 //add one of it to the cart
            };
        

            cart.push(lineItem); //pushing the product.id with quanity of 1 into cart
        

        }
        else {
            lineItem.quantity++;//if you've already added it to the cart then add increment
        }

        json = JSON.stringify(cart); //we're getting ready to send it to the CART but it needs to be a string for local storage
        localStorage.setItem('CART', json); //you're seting the stringfied cart to 
        alert('1 ' + products.name + 'added to cart');//an alert tells you item added to cart to confirm.
    });
    
    p.appendChild(addButton);//your sending your created buttons to be displayed as dynamic
    //creating the lists of products named up above by
    //appending child to the parent
    li.appendChild(nameHeader);
    li.appendChild(images);
    li.appendChild(itemDescription);
    li.appendChild(p);
    li.appendChild(categoryList);
    //I believe you can add togeter with li.appendChild(nameHeader, images, price, itemDescription, categoryList);
    return li;
}
export default createItems; //we're exporting this to be used later.