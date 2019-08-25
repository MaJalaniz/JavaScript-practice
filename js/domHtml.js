"use strict";
const searchBar = document.forms['search-books'].query['input'];
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