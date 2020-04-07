// IMPORT MODULES under test here:
// import example from '../src/example.js';
//import findById from '../ultils.js';
const test = QUnit.test;
import { findById } from '../utils.js';
import itemsSold from '../data.js';

test('Test findById whole object Protein', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const protein = { //expected
        id: 'protein',
        name: 'Protein powder',
        image: 'protein.jpeg', //placeholder
        description:'This protein powder will get your swole!',
        category: 'Product',
        price:  20.00
        
    };
    //Act 
    // Call the function you're testing and set the result to a const
    const result = findById(itemsSold, 'protein');
    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(result, protein);
});
 
test('Test function FindbyId for preworkout', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const preWorkout = { //expected
        id: 'preWorkout',
        name: 'Pre workout',
        image: 'preWorkout.jpeg', //placeholder
        description:'This will get you pumped up!',
        category: 'Product',
        price:  25.00
        
    };
    //Act 
    // Call the function you're testing and set the result to a const
    const result = findById(itemsSold, 'preWorkout');
    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(result, preWorkout); //needed help with the deepequal
});

