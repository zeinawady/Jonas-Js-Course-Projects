'use strict';

//selectiong elements
const scoreElement0 = document.getElementById('score--0');
const scoreElement1 = document.getElementById('score--1');
const currentElement0 = document.getElementById('current--0');
const currentElement1 = document.getElementById('current--1');
const diceElement = document.querySelector('.dice');
const rollBtn = document.querySelector('.btn--roll');
const newBtn = document.querySelector('btn--new');
const holdBtn = document.querySelector('btn--hold');

let scores=[0,0];
let activePlayer=0;
let currentPlayer=0;

//start conditions
scoreElement0.textContent = 0;
scoreElement1.textContent = 0;
diceElement.classList.add('hidden');

let currentScore = 0;

//roll dice
rollBtn.addEventListener('click', function () {
  //1. generate a random dice number
  const diceNum = Math.trunc(Math.random() * 6) + 1;

  //2.display dice img
  diceElement.classList.remove('hidden');
  diceElement.src = `images/dice-${diceNum}.png`;

  //3.check if 1
  if (diceNum !== 1) {
    currentScore += diceNum;
    document.getElementById(`current--${activePlayer}`).textContent=currentScore;
  } else {
      //switch to the other player
      activePlayer= (activePlayer===0 ) ? 1:0;
      console.log(activePlayer);
      currentScore=0;
      


  }
});