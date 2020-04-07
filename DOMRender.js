export default function createItems(products) {
    //time to create the elements to export
    const li = document.createElement('li'); //creating lists
    //assinging lists for category and product descriptions
    //categorylist.className = products.category;
    
    const nameHeader = document.createElement('h3'); //creating headers (which is the name of the product)
    //assigning the head to the text name
    nameHeader.textContent = products.name; 
    
    //creating images
    const images = document.createElement('img'); 
    //assigning it to a source
    images.src = 'https://pbs.twimg.com/profile_images/713412468748328960/TbZI9Fvt.jpg';
    //this image is place holder unil the assests folder is filled...
    
    //creating the description
    const itemDescription = document.createElement('p');
    //now assigning my variable to products descrition
    itemDescription.textContent = products.description;
    
    //creating your prices
    const price = document.createElement('h4');
    //giving the price 
    price.textContent = products.price;

    li.classlist.add('products');
    //creating the list of products named in the parameters
    //appending child to the parent
    li.appendChild(nameHeader);
    li.appendChild(images);
    li.appendChild(price);
    li.appendChild(itemDescription);
    //li.appendChild(categoryList),
    return li;
}