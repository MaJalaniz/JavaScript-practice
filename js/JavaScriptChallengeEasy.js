//=====================Easy Challenges on Edabit========================

/*
//Return the Sum of two numbers.

function Sum(one, two){
    return one + two;
}
Sum(5,5);
*/
//==============================================================
/*
//Return the first element in an array

var numbers = [1500,2,3,4,5,6,7,8,9];
var otherNum = [2000, 45, 34, 24];
function first(num){
    for(var i = 0; i < num.length; i++){
        if(num[i] === num[0]){
            console.log(num[i]);
        }
    }
}
first(numbers);
first(otherNum);
*/
//==============================================================

//Write a function that takes in a Base and Height and returns the
//area of a triangle.
/*
function triangle(base, height){
    return (base * height)/2;
}
triangle(20,20);
*/
//===============================================================

//Write a function that converts hours to seconds.
/*
function timeConvert(hour){
    return (hour * 60) * 60;
}
timeConvert(5);
*/
//===============================================================

//Write a function that returns the next Integer
/*
function nextInt(next){
    return next + 1;
}
nextInt(-5);
*/
//===============================================================

//Write a function that returns the Maximum edge of a triangle

/*
function nextEdge(sideOne,sideTwo){
    return (sideOne + sideTwo) - 1;
}
nextEdge(5,10);
*/
//===============================================================

//Write a function that returns the remainder of two numbers
/*
function remainder(one, two){
    return (one % two);
}
remainder(15, 4);
 */
//===============================================================

//Write a function that determines if a number is less than zero
/*
function ifZero(x){
    if (x <= 0){
        return true;
    }else{
        return false;
    }
}
ifZero(-12);

 */
//================================================================

//Write a function that returns the total number of legs on the farm
/*
function animalsLegs(one, two, three){
    var chicken= 2;
    var cow = 4;
    var pig = 4;
    return ((one * chicken) + (two * cow) + (three * pig));
}
animalsLegs(1,2,3);
*/

//================================================================

//Write a function that returns true if prob * prize > pay
/*
function ifWorthIt(prob, prize, pay){
    if ((prob * prize) > pay){
        return true;
    }else if((prob * prize) < pay){
        return false;
    }else{
        console.log("What game is this?");
    }
}
ifWorthIt(20,100, 50);
*/
//================================================================

//Write a function that returns true if number is multiple of 100

/*
function multiplesHundred(divisor){
    if (divisor % 100 === 0){
        return "This number is divisible by 100"
    }else{
        return "try again"
    }
}
multiplesHundred(1000);
*/
//=================================================================

//Write a function that returns true if number is multiple of 5
/*
function multiplesFive(divisor){
    if (divisor % 5 === 0){
        return "This number is divisible by 5"
    }else{
        return "try again"
    }
}
multiplesFive(37);
*/
//=================================================================

//Write a function that is recursive to return length of the string
/*
function stringRecurse(word,other) {
    other = other || 0;
    if(word.length) {
        return stringRecurse(word.substr(1), ++other)
    }else{
        return other;
    }
}
stringRecurse("supercalifragilisticespialidocious");
*/

//=================================================================

//Write a function that compares strings by count of Character
/*
function compare(one, two){
    if (one.length === two.length){
        return true;
    }else{
        return false;
    }
}
compare("right","right");
compare("left","right");
*/

//=================================================================

//Write a string that checks if a string is empty
/*
function check(empty){
    if (empty === ""){
        return "The String is empty";
    }else{
        return "The string is NOT empty"
    }
}
console.log(check(" "));
*/

//=================================================================

//Write a function that concatenates first and last names
/*
function names(first, last){
    return first + last;
}
names("Hitomi ", "Tanaka");
*/

//=================================================================

//Write a function that reverses an array
/*
function reverseMe(lists){
    return lists.reverse();
}
reverseMe([1,2,3,4,5]);
*/

//=================================================================

//Write a function that finds the index
/*
function index(myArray, num){
    if(myArray.indexOf(num) >= 0){
        return "number "+ num + " is FOUND at index " + myArray.indexOf(num);
    }else if(myArray.indexOf(num) === -1) {
        return "number "+ num + " is NOT FOUND in the array";
    }

}
index([1,2,3,4,200,6,7,10], 3);
index([1,2,3,4,200,6,7,10], 300);
*/


//=================================================================

//Write a function that returns the last element in an array
/*
function lastItem(myArray){
    if(myArray.reverse()){
        return myArray[0];
    }

}
lastItem([1,2,3,4,5,6,7,200]);
*/

//=================================================================

//Write a function that concatenates two integer arrays
/*
function twoArrays(one, two){
    return one.concat(two).sort();
}
console.log(twoArrays([1,3,5,7],[2,4,6,8]));
*/

//=================================================================

//Write an arrow function (es6) that takes a name and returns a greeting
/*
let greeting = (hello) => {return "Hello " + hello + "!"};

greeting("Rias");
*/

//=================================================================

//Write a function that takes in an Object and returns a string with facts

function volume(box){
    return box.width * box.length * box.height;
}
volume({width: 2, height: 2, length: 2});

//================================================================

