'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.close-modal');
const openModalBtns = document.querySelectorAll('.show-modal');
console.log(openModalBtns);

for (let i = 0; i < openModalBtns.length; i++) {
  openModalBtns[i].addEventListener('click', function () {
    console.log('button clicked');
    modal.classList.remove('hidden');

  });
  
}
