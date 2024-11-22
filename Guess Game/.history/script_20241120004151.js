'use strict';
let message=document.querySelector('.message').textContent;

document.querySelector('.check').addEventListener('click',function(){
    let guess=Number(document.querySelector('.guess').value);
    console.log(guess);
    if(!guess){
       message='⛔ No Number!'
    }
})

