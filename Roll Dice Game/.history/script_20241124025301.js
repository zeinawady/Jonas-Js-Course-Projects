'use strict';

//selectiong elements
let score0=document.getElementById('score--0');
let score1=document.getElementById('score--1');
const diceElement = document.querySelector('.dice');
const rollBtn=document.querySelector('.btn--roll');
const newBtn=document.querySelector('btn--new');
const holdBtn=document.querySelector('btn--hold');

//start conditions
score0.textContent=0;
score1.textContent=0;
diceImg.classList.add('hidden');

//roll dice
rollBtn.addEventListener('click', function(){
    //1. generater a random dice number
    const dice=Math.trunc(Math.random() *6)+1;

    //2.display dice img
    diceElement.classList.remove

    //3.check if 1
})

