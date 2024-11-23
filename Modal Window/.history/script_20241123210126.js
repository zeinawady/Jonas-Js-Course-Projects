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

//executed on any key i am pressing 
document.addEventListener('keydown' ,function(e){
    //keydown-> as soon as we press the key ->commoly used

//console.log(e); 
if(e.key==='Escape' && modal.classList.contains('')){
    closeModal();
}
}) ;