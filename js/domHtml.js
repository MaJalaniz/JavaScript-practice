"use strict";
/*
let titles = document.getElementsByClassName('title');

Array.from(titles).forEach(function(item) {
    console.log(item);
});
*/



const smw = document.querySelector('#game-list li:nth-child(2) .name');
//const wrap = document.querySelector('');

console.log(smw);


let games = document.querySelectorAll('#game-list li .name');
console.log(games);

Array.from(games).forEach(function(game){
    console.log(game)
   //game.textContent = 'test';
});






/*
const searchBar = document.forms['search-games'].query['input'];
searchBar.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach(function(book){
       const title = book.firstElementChild.textContent;
       if(title.toLowerCase().indexOf(term)){
           book.style.display = 'block';
       } else{
           book.style.display = 'none';
       }
    });


});
*/