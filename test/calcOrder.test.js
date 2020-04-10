import { calcOrderTotal } from '../utils.js';
import itemsSold from '../data.js';
//import { calcLineTotal } from '../utils.js';
import cartItems from '../cart.js';

const test = QUnit.test;

test('Test to find if calcOrderTotal works', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    

    const expected = 90;
    //Act 
    // Call the function you're testing and set the result to a const
    
   // const lineTotal =
    const result = calcOrderTotal(cartItems, itemsSold);
   
       
                                                                                                                                                                 
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
});
 