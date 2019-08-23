//==================================== DOM practice ===========================================
let scores,roundScore, activePlayer, dice;

 scores = [0, 0];
 roundScore = 0;
 activePlayer = 0;
 dice = Math.floor(Math.random() * 6) + 1;

 //document.querySelector('#score-' + activePlayer).textContent = dice;
document.querySelector('#score-' + activePlayer).innerHTML = '<em>' + dice + '</em>';