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
function player(choice){
    opponent();

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
console.log(player());//<-- your choice here



//======================================================================





//======================================================================





//======================================================================





//======================================================================





//======================================================================





//======================================================================