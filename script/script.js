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


// ------------------------------------
// scroll up button
const mybutton = document.querySelector('.scroll__btn');


window.onscroll = function () {
    scrollFunction()
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

mybutton.addEventListener('click' , topFunction)


