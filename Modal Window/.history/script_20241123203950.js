'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.close-modal');
const openModalBtns = document.querySelectorAll('.show-modal');

function closeModal(){
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

for (let i = 0; i < openModalBtns.length; i++) {
  openModalBtns[i].addEventListener('click', function () {
    console.log('button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}
closeModalBtn.addEventListener('click' , closeModal);
overlay.addEventListener('click' , closeModal);
