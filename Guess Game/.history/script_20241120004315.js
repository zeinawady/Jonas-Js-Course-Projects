'use strict';
let message=document.querySelector('.message');

document.querySelector('.check').addEventListener('click',function(){
    let guess=Number(document.querySelector('.guess').value);
    console.log(guess);
    if(!guess){
        document.querySelector('.message').textContent='⛔ No Number!'
    }
})

