'use strict';

//selectiong elements
const scoreElement0=document.getElementById('score--0');
const scoreElement1=document.getElementById('score--1');
const diceElement = document.querySelector('.dice');
const rollBtn=document.querySelector('.btn--roll');
const newBtn=document.querySelector('btn--new');
const holdBtn=document.querySelector('btn--hold');

//start conditions
score0.textContent=0;
score1.textContent=0;
diceElement.classList.add('hidden');

let currentScore=0;

//roll dice
rollBtn.addEventListener('click', function(){
    //1. generate a random dice number
    const diceNum=Math.trunc(Math.random() *6)+1;

    //2.display dice img
    diceElement.classList.remove('hidden');
    diceElement.src=`images/dice-${diceNum}.png`;

    //3.check if 1
    if(diceNum!==1){
currentScore+=diceNum;

    }
    else{
        //switch to the other player

    }
})

