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



// --------------------- Swiper ---------------------------//
import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'


const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});