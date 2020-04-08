import makeTable from '../CartDOMRender.js';
//import { findById } from '../utils.js';

// IMPORT MODULES under test here:
// import example from '../src/example.js';
const test = QUnit.test;
//import { calcLineTotal } from '../utils.js';
//import itemsSold from '../data.js';
//import cartItems from '../cart.js';
//

test('Testing the DOM render for HTML function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    
    const protein = {
        id: 'protein',
        name: 'Protein powder',
        image: 'protein.jpeg', //placeholder
        description:'This protein powder will get your swole!',
        category: 'Product',
        price: 20.00
      
    };
    
    const cartItem = { //cart item expected
        id: 'protein',
        quantity: 2,
    };
   
    
    const expected = '<tr><td>Protein powder</td><td>2</td><td>20</td><td>40</td></tr>';
    //Act 
    // Call the function you're testing and set the result to a const
    const domCart = makeTable(protein, cartItem);
    const html = domCart.outerHTML;
    
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(html, expected);
});

//test works!