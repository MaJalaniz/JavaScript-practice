"use strict";
/*
let titles = document.getElementsByClassName('title');
//returns html collection
Array.from(titles).forEach(function(item) {
    console.log(item);
});
*/


/*
const smw = document.querySelector('#game-list li:nth-child(2) .name');
//const wrap = document.querySelector('');
//returns node list

console.log(smw);


let games = document.querySelectorAll('#game-list li .name');
console.log(games);

Array.from(games).forEach(function(game){
    //console.log(game.textContent)
   game.textContent += ' (game title)';
});
const gameList = document.querySelector('#game-list');
 //gameList.innerHTML = '<h2>Games and other games</h2>';
 gameList.innerHTML += '<p>This is adding more html </p>';
*/


//everything in the DOM/html is a node
/*
const banner = document.querySelector('#page-banner');
//Finding Nodes
console.log('#page-banner node name is', banner.nodeName);
console.log('#page-banner node name is', banner.nodeType);
console.log('#page-banner has child nodes: ', banner.hasChildNodes());

//Cloning the Node
//pass true for parameter/ clones the entire group
//const clonedBanner = banner.cloneNode(true);
//console.log(clonedBanner);
*/


//const gameList = document.querySelector('#game-list');
//navigating siblings
/*
console.log('book-list next sibling is ', gameList.nextElementSibling);
console.log('book-list next sibling is ', gameList.nextSibling);
console.log('book-list next sibling is ', gameList.previousSibling);
console.log('book-list next sibling is ', gameList.previousElementSibling);

gameList.previousElementSibling.querySelector('p').innerHTML += '<br/>Too cool';
*/
let btn = document.querySelectorAll('#game-list .delete');
console.log(btn);

Array.from(btn).forEach(function(btn){
    btn.addEventListener('click',function(e){

        let li = e.target.parentElement;
        li.parentNode.removeChild(li);
        console.log(e.target)

    });

});










//Traversing up the DOM/parents
/*
console.log('the parent node is: ', gameList.parentNode);
console.log('the parent element is: ', gameList.parentElement.parentElement);

//Traversing down the DOM/children
console.log(gameList.childNodes); // all with spaces
console.log(gameList.children);//single
*/
//Check back on video 8


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