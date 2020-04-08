
function makeTable(products, cartItem) {
    const tr = document.createElement('tr');//creating a table row for data
    
    const nameData = document.createElement('td'); //creating a name TD element 
    nameData.textContent = products.name; //assinging it data
    
    const quanityData = document.createElement('td');//creating a name TD for quanity
    quanityData.textContent = cartItem.quantity;//assigning it data
    
    const priceData = document.createElement('td');
    priceData.textContent = typeof(products.price);
    
    const amountData = document.createElement('td');
    const finalPrice = (products.price * cartItem.quantity);
    amountData.textContent = finalPrice;
    
    tr.appendChild(nameData);
    tr.appendChild(quanityData);
    tr.appendChild(priceData);
    tr.appendChild(amountData);
    
    return tr;
}
export default makeTable;

//was passing no long is passing