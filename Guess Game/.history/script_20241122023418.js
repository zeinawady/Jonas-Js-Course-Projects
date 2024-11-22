'use strict';
let message=document.querySelector('.message');
let numberBox=document.querySelector('.number');
let score=document.querySelector('.score');
let body=document.querySelector('body');
let again
const randSecretNum=Math.ceil(Math.random() * 20) + 1;

//score initialy = 20
score.textContent=20;

document.querySelector('.check').addEventListener('click',function(){
    let guess=Number(document.querySelector('.guess').value);
    console.log(guess);

    //invalid
    if(!guess){
        message.textContent='⛔ No Number!';
    }
    //win
    else if(guess===randSecretNum){
     message.textContent='🥳 Correct Number!';
     score.textContent++;
     numberBox.textContent=randSecretNum;
     body.style.backgroundColor='#60b347';
     numberBox.style.width='30rem';
    }
    //wrong -> high
    else if(guess> randSecretNum){
        if(score.textContent>1){
            message.textContent='📈 Too High!';
            score.textContent--;
        }
        else{
            score.textContent=0;
            message.textContent='You lost the game!'
        }
        
    }
    //wrong -> low
    else{
        if(score.textContent>1){
            message.textContent='📉 Too Low'
            score.textContent--;
        }
        else{
            score.textContent=0;
            message.textContent='You lost the game!'
        }
        
       
    }
});

