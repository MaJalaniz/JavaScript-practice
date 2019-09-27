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

function numbers(myArray){
    more = Math.max.apply(null, myArray);
    less = Math.min.apply(null,myArray);
    return "The biggest number is: " + more + " and the smallest is : " + less;
}
console.log(numbers([0,1,2,3,4,5,400, 300]));


//======================================================================

    //Write a function that checks if today is Christmas

function christmas(month, day) {
var christ = new Date("December 25");

    if((month === christ.getMonth()+1) && day === christ.getDate()) {
        return "Yay today is Christmas woooo!";
    }else {
        return "We have to wait until then"
    }
}
console.log(christmas(11,25));


//======================================================================





//======================================================================





//======================================================================





//======================================================================





//======================================================================





//======================================================================





//======================================================================