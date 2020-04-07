const workoutHour = {
    id: 'workoutHour',
    name: 'One hour session',
    image: 'hour-workout.jpeg', //image: ./asset/hoursesion? I read the directions and I don't think we've done this.
    description:'A full hour of one on one coacing from our highly trained staff.',
    category: 'service',
    price:  70.00
    
};
//first one
const workoutHalf = {
    id: 'workoutHalf',
    name: 'Half hour session',
    image: 'half-workout.jpeg', //placeholder
    description: 'A half hour of personal coaching for a value price.',
    category: 'service',
    price: 35.00

};
//second one
const protein = {
    id: 'protein',
    name: 'Protein powder',
    image: 'protein.jpeg', //placeholder
    description:'This protein powder will get your swole!',
    category: 'product',
    price:  20.00
    
};
//third one
const preWorkout = {
    id: 'preWorkout',
    name: 'Pre workout',
    image: 'preWorkout.jpeg', //placeholder
    description:'This will get you pumped up!',
    category: 'product',
    price:  25.00
    
};
//fouth one
const mealPlan = {
    id: 'mealPlan',
    name: 'Meal plan',
    image: 'foodpicture.jpeg', //placeholder
    description:'You need fuel to grow, let us help you.',
    category: 'product',
    price:  25.00
    
};
//fifth one
const assesment = {
    id: 'assesment',
    name: 'Assesment',
    image: 'check.jpeg', //placeholder
    description:'Let us see where you are at and get you there',
    category: 'service',
    price:  40.00
    
};
//sixth one
const bootcamp = {
    id: 'bootcamp',
    name:'Bootcamp',
    image:'bootcamp.jpeg', //placeholder
    description:'Let us train you in group to take you to the next level.',
    category:'service',
    price: 120.00
};
//last one
//time create the array
const itemsSold = [
    workoutHour,
    workoutHalf,
    protein, 
    preWorkout,
    mealPlan,
    assesment, 
    bootcamp
];
//export the array
export default itemsSold;