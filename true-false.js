//const age = -4; //works fine
//const age = 0; //returns false cause 0 means empty

//const name = "Solaiman"; //truthy
//const name = ""; //falsy cause empty string
//const name = " "; //truthy cause white space means an entry

//let name; // name is not set so falsy
//let name = null; //falsy
//let name = NaN; //Not a number falsy

//Falsy - 0 "" undefined null NaN false
//Truthy - '0' ' ' [] "false"

//let name = false; //falsy

let name = 0;

console.log(name);


if(name || name == 0){
    console.log('Condition is true.');
}

else{
    console.log("Condition is false.");
}