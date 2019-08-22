
//======================================== Hoisting lecture =======================================

//Global Execution Context vv

calcAge(1990);

 function calcAge(year) { //Function Declaration
    console.log( 2016 - year);
 }
 //calcAge(1990);



//retirement(1990); does not work

let retirement = function(year) {//Function Expression
    console.log(64 - (2016 - year));
};

 //retirement(1990); works


console.log(age); // this returns UNDEFINED/ERROR
let age = 20; //defined in Variable Object in a (Global Context)
console.log(age);

function foo() { //gets its own Execution Context Object and gets a variable
    console.log(age); // this returns UNDEFINED because it is used before being Declared
    let age = 30; //defined (Locally)
    console.log(age)// this gets stored in the Global Execution Context
}
foo();
console.log(age);

//Variable age is treated as a completely different variable from each other


//Global Execution Context ^^