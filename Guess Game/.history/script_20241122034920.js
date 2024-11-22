'use strict';
let numberBox=document.querySelector('.number');
let scoreBox=document.querySelector('.score');
let body=document.querySelector('body');
let againBtn=document.querySelector('.again');
let checkBtn=document.querySelector('.check');
let guessBox=document.querySelector('.guess');
let highscoreBox=document.querySelector('.highscore');
let randSecretNum=Math.ceil(Math.random() * 20);

//score initialy = 20
let score=20;
scoreBox.textContent=score;

const displayMessage=function(msg){
    document.querySelector('.message').textContent=msg;
}
checkBtn.addEventListener('click',function(){
    let guess=Number(guessBox.value);
    console.log(guess);

    //no number
    if(!guess){
        displayMessage('⛔ No Number!');
    }

    //win
    else if(guess===randSecretNum){
     displayMessage('🥳 Correct Number!');
     numberBox.textContent=randSecretNum;
     body.style.backgroundColor='#60b347';
     numberBox.style.width='30rem';

     if(Number(highscoreBox.textContent)<score){
        
        highscoreBox.textContent=score;
     }
    }

    else if(guess!==randSecretNum){
       if(score>1){
           displayMessage((guess > randSecretNum) ? '📈 Too High!':'📉 Too Low');
           score--;
           scoreBox.textContent=score;

       }
       else{
               score=0;
               displayMessage('You lost the game!');
               scoreBox.textContent=score;
               highscoreBox.textContent=score;
       }
    }
});

againBtn.addEventListener('click', again());

function again(){
    score=20;
    scoreBox.textContent=score;
    randSecretNum=Math.ceil(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    guessBox.value=null;
    body.style.backgroundColor='#222';
    numberBox.textContent='?';
    numberBox.style.width='15rem';
}

