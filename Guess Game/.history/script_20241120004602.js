'use strict';
let message=document.querySelector('.message');
const randNum=Math.ceil(Math.random()*20) + 1 ;

document.querySelector('.check').addEventListener('click',function(){
    let guess=Number(document.querySelector('.guess').value);
    console.log(guess);
    if(!guess){
        message.textContent='⛔ No Number!'
    }
})

