//==================================== DOM practice ===========================================
let scores,roundScore, activePlayer, dice, playerScore;

 scores = [0, 0];
 roundScore = 0;
 activePlayer = 0;
 playerScore = 0;

 dice = Math.floor(Math.random() * 6) + 1;




 document.querySelector('#score-' + activePlayer).textContent = dice;


let x = document.querySelector('#score-' + activePlayer).textContent;