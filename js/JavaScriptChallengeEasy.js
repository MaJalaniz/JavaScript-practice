"use strict";
//===================== Easy Challenges on Edabit ======================

//======================================================================

    //Write a function for the Match Stick problem
/*
function match(){

}
console.log(match());
*/

//======================================================================

    //Write a function that finds the smallest and largest numbers
/*
function numbers(myArray){
    var more = Math.max.apply(null, myArray);
    var less = Math.min.apply(null,myArray);
    return "The biggest number is: " + more + " and the smallest is : " + less;
}
console.log(numbers([0,1,2,3,4,5,400, 300]));
*/

//======================================================================

    //Write a function that checks if today is Christmas
/*
function christmas(month, day) {
var christ = new Date("December 25");

    if((month === christ.getMonth()+1) && day === christ.getDate()) {
        return "Yay today is Christmas woooo!";
    }else {
        return "We have to wait until then"
    }
}
console.log(christmas(11,25));
*/
//======================================================================

        //Make a game of Rock Paper Scissors
/*
function player(choice){
    function opponent() {
        var janken = Math.floor(1 + (Math.random() * 3));

        if (janken === 1) {
            return "Rock";
        } else if (janken === 2) {
            return "Paper";
        } else if (janken === 3) {
            return "Scissors";
        } else {
            return "Best two out of three?";
        }

    }

    if(opponent() === "Rock" && choice === 3){
        return "Rock beats Scissors: Comp win";
    }else if(opponent() === "Scissors" && choice === 2){
        return "Scissors beats Paper: Comp wins";
    }else if (opponent() === "Paper" && choice === 1){
        return "Paper beats Rock: Comp wins";
    }else if(opponent() === "Rock" && choice === 2){
        return "Rock loses to Paper: Player wins";
    }else if(opponent() === "Scissors" && choice === 1){
        return "Scissors loses to Rock: Player wins";
    }else if(opponent() === "Paper" && choice === 3){
        return "Paper loses to Scissors: Player wins"
    }else{
        return "Tie: Go again";
    }
}
console.log(player(3));//<-- your choice here
*/


//======================================================================

    //Am I seeing double?
/*
function two(doubles){
    for(var i = 0; i < doubles.length; i++){
       if(doubles[0] !== doubles[1])
    }
    //does 0 == 1,2,3,4,5 and repeat with 1 ++

}
console.log(two(["one", "two", "three", "four", "four", "five"]));

*/
//======================================================================
/*
function magic(){
    var janken = Math.floor(1 + (Math.random() * 20));
//use a switch case here? V
    if(janken === 1){
        return "As I see it, yes.";
    }else if(janken === 2){
        return "Ask again later.";
    }else if(janken === 3){
        return "Better not tell you now.";
    }else if(janken === 4){
        return "Cannot predict now.";
    }else if(janken === 5){
        return "Concentrate and ask again.";
    }else if(janken === 6){
        return "Don't count on it.";
    }else if(janken === 7){
        return "It is certain.";
    }else if(janken === 8){
        return "It is decidedly so.";
    }else if(janken === 9){
        return "Most likely.";
    }else if(janken === 10){
        return "My reply is no.";
    }else if(janken === 11){
        return "My sources say no";
    }else if(janken === 12){
        return "Outlook not so good.";
    }else if(janken === 13){
        return "Outlook good";
    }else if(janken === 14){
        return "Reply hazy, try again.";
    }else if(janken === 15){
        return "Signs point to yes.";
    }else if(janken === 16){
        return "Very doubtful.";
    }else if(janken === 17){
        return "Without a doubt.";
    }else if(janken === 18){
        return "Yes.";
    }else if(janken === 19){
        return "Yes-definitely.";
    }else if(janken === 20){
        return "You may rely on it.";
    }else{
        return "Retry";
    }
}
console.log(magic());


 */
//======================================================================

                //Make a Circle with OOP and ES6 (Medium Challenge)

class Circle{
    constructor(radius){
        this.getArea = function () { return (Math.PI * (radius * radius))};
        this.getPerimeter = function(){ return ((2 * Math.PI) * radius)};
    }
}
let round = new Circle(11);
round.getArea();

let round2 = new Circle(5);
console.log(round.getArea());
console.log(round2.getPerimeter());




//======================================================================

                //Equality of 3 values (Medium Challenge)
/*
function values(a,b,c){
    if(a === b && a === c && c === a && b === c){
        return "3"
    }else if(a !== b && a !== c && c !== a && b !== c){
        return "0";
    }else if (a !== b || b !== c || a === c){
        return "2";
    }else{
        return "Retry";
    }
}
console.log(values(2,3,3,));


 */
//======================================================================
                //Book Shelf (Hard Challenge)

 class library {
    constructor(title, author){
        this.title = title;
        this.author = author;
        this.getTitle = function() {return "Title: " + title};
        this.getAuthor = function() {return "Author: " + author};
    }
}
let tf = new library("The Fountainhead", "Ayn Rand");
let pp = new library("Pride and Predjudice", "Jane Austen");
let h = new library("Hamlet", "William Shakespeare");
let wp = new library( "War and Peace", "Leo Tolstoy");
/*
console.log(tf);
console.log(pp);
console.log(h);
console.log(wp);

console.log(tf.getTitle());
console.log(tf.getAuthor());
console.log(tf.title + " by " + tf.author);

console.log(pp.getTitle());
console.log(pp.getAuthor());
console.log(pp.title + " by " + pp.author);

console.log(h.getTitle());
console.log(h.getAuthor());
console.log(h.title + " by " + h.author);

console.log(wp.getTitle());
console.log(wp.getAuthor());
console.log(wp.title + " by " + wp.author);
 */


//======================================================================
    //Write a function that returns the first occurance of a vowel (easy challenge)

function vowels(one){

    for(let i = 0; i < one.length; i++){
        //console.log(one[i]);
        if(one[i] === "a"){
            return one[i]  + " can be found at index " + i;
        }else if(one[i] !== "a" && one[i] === "e"){
            return one[i]  + " can be found at index " + i;
        }else if(one[i] !== "a" && one[i] !== "e" && one[i] === "i"){
            return one[i]  + " can be found at index " + i;
        }else if(one[i] !== "a" && one[i] !== "e" && one[i] !== "i" && one[i] === "o"){
            return one[i]  + " can be found at index " + i;
        }else if(one[i] !== "a" && one[i] !== "e" && one[i] !== "i" && one[i] !== "o" && one[i] === "u"){
            return one[i]  + " can be found at index " + i;
        }
    }
}
console.log(vowels("zxcvba"));

//======================================================================

    //Reverse the case: upper to lower and vice versa (easy challenge)

function cases(words){
    if(words.length > 0){
        return words.toUpperCase();
    }else{
        return words.toLowerCase();
    }
}
console.log(cases("Happy"));