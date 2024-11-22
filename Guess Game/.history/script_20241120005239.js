'use strict';
let message=document.querySelector('.message');
let numberBox=document.querySelector('.number');
const randSecretNum=Math.ceil(Math.random() * 20) + 1;

numberBox.textContent=randSecretNum;
document.querySelector('.check').addEventListener('click',function(){
    let guess=Number(document.querySelector('.guess').value);
    console.log(guess);
    if(!guess){
        message.textContent='⛔ No Number!'
    }
    else if(guess===randSecretNum){
     message.textContent='🥳 Correct Number!'
    }
    else if{
        message.textContent='Wrong Number!'
    }
});

