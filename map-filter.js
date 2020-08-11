const numbers = [3, 4, 5, 6, 7, 8];
// const output = [];

//Usual way using for loop
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

//Using Map

// function square(element){
//     return element*element;

// }

// const square = element => element * element;
// const square = x => x*x;

// const result = numbers.map(function(element){
//     return element * element;
// });

//Using map shortest way
// const result = numbers.map(x => x * x);

// console.log(result);

// const bigger = numbers.filter( x => x>5 );

//Using Find instead of filter
const isThere = numbers.find(x => x>5);


console.log(isThere);