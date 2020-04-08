function makeTable(products, cartItem) {
    const table = document.createElement('tr');//creating a table row for data
    
    const nameData = document.createElement('td'); //creating a name TD element 
    nameData.textContent = products.name; //assinging it data

    const quanityData = document.createElement('td');//creating a name TD for quanity
    quanityData.textContent = cartItem.quanity;//assigning it data

    const priceData = document.createElement('td');
    priceData.textContent = products.price;

    const amountData = document.createElement('td');
    const finalPrice = (products.price * cartItem.quanity);
    amountData.textContent = finalPrice;
    
    table.appendChild(nameData);
    table.appendChild(quanityData);
    table.appendChild(priceData);
    table.appendChild(amountData);
    
    return table;
}
export default makeTable;