'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.close-modal');
const openModalBtns = document.querySelectorAll('.show-modal');

function openModal(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
function closeModal(){
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

for (let i = 0; i < openModalBtns.length; i++) {
  openModalBtns[i].addEventListener('click', openModal)
}

closeModalBtn.addEventListener('click' , closeModal);
overlay.addEventListener('click' , closeModal);

document.addEventListener('keydown' ,) //as soon as we press the key ->commoly used
document.addEventListener('keypress' ,) //continous as we put finger on key
document.addEventListener('keyup' ,)// lift finger off keyboard