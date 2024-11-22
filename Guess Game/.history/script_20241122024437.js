'use strict';
let message=document.querySelector('.message');
let numberBox=document.querySelector('.number');
let scoreBox=document.querySelector('.score');
let body=document.querySelector('body');
let againBtn=document.querySelector('.again');
let checkBtn=document.querySelector('.check');
let guessBox=document.querySelector('.guess');
let randSecretNum=Math.ceil(Math.random() * 20) + 1;

//score initialy = 20
scoreBox.textContent=20;


checkBtn.addEventListener('click',function(){
    let guess=Number(guessBox.value);
    console.log(guess);

    //invalid
    if(!guess){
        message.textContent='⛔ No Number!';
    }
    //win
    else if(guess===randSecretNum){
     message.textContent='🥳 Correct Number!';
     scoreBox.textContent++;
     numberBox.textContent=randSecretNum;
     body.style.backgroundColor='#60b347';
     numberBox.style.width='30rem';
    }
    //wrong -> high
    else if(guess> randSecretNum){
        if(scoreBox.textContent>1){
            message.textContent='📈 Too High!';
            scoreBox.textContent--;
        }
        else{
            scoreBox.textContent=0;
            message.textContent='You lost the game!'
        }
        
    }
    //wrong -> low
    else{
        if(scoreBox.textContent>1){
            message.textContent='📉 Too Low'
            scoreBox.textContent--;
        }
        else{
            scoreBox.textContent=0;
            message.textContent='You lost the game!'
        }
        
       
    }
});

againBtn.addEventListener('click', function(){
    scoreBox.textContent=20;
    randSecretNum=Math.ceil(Math.random() * 20) + 1;
    message.textContent='Start guessing...';
    guessBox.value=null;
    body.style.backgroundColor='#222';
    numberBox.style.width='15rem';
})

