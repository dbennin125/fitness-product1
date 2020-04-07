export default function createItems(products) {
    //time to create the elements to export
    const productList = document.createElement('li'); 
    //creating list to send return

    const categoryList = document.createElement('ol');
    categoryList.textContent = `Category: ${products.category}`;
    
    //creating my name via h3 element
    const nameHeader = document.createElement('h2'); 
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
    
    //creating your prices with h4 element
    const price = document.createElement('p');
    //giving the price 
    price.textContent = `$ ${products.price}`; //learned this trick from Joey. Thanks JOEY!!

    
    //creating the lists of products named up above by
    //appending child to the parent
    productList.appendChild(nameHeader);
    productList.appendChild(images);
    productList.appendChild(price);
    productList.appendChild(itemDescription);
    productList.appendChild(categoryList);
    //I believe you can add togeter with li.appendChild(nameHeader, images, price, itemDescription, categoryList);
    return productList;
}