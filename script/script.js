"use strict";


// navbar search button
const search = document.querySelector('.searchIcon');
const searchInp = document.querySelector('.searchInp');
const deletBtn = document.querySelector('.deleteSearch')

search.addEventListener('click', () => {

    // console.log('working');
    searchInp.style.display='block';
    deletBtn.style.display='block';
    // searchInp.classList.toggle('searchInput');  

})

deletBtn.addEventListener('click', () => {
    searchInp.style.display = 'none';
    deletBtn.style
    .display = 'none';
})



