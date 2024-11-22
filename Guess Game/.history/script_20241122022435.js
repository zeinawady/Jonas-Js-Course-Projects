'use strict';
let message=document.querySelector('.message');
let numberBox=document.querySelector('.number');
let score=document.querySelector('.score');
const randSecretNum=Math.ceil(Math.random() * 20) + 1;


numberBox.textContent=randSecretNum;
score.textContent=0;
document.querySelector('.check').addEventListener('click',function(){
    let guess=Number(document.querySelector('.guess').value);
    console.log(guess);

    //invalid
    if(!guess){
        message.textContent='⛔ No Number!';
    }
    else if(guess===randSecretNum){
     message.textContent='🥳 Correct Number!';
     score.textContent++;
    }
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

