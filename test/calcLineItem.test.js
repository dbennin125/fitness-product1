// IMPORT MODULES under test here:
// import example from '../src/example.js';
//import findById from '../ultils.js';
const test = QUnit.test;
import { calcLineTotal } from '../utils.js';
//import itemsSold from '../data.js';


test('Testing to see if calucations works for items', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    let proteinPrice = 20;
    let proteinQuanity = 2;

    const total = 40;
     
    //Act 
    // Call the function you're testing and set the result to a const
    const result = calcLineTotal(proteinPrice, proteinQuanity);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, total);
});
 
test('Testing to see if calucations works for items', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    let preWorkOutPrice = 25;
    let preWorkoutQuanity = 2;

    const total = 50;
     
    //Act 
    // Call the function you're testing and set the result to a const
    const result = calcLineTotal(preWorkOutPrice, preWorkoutQuanity);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, total);
});
 