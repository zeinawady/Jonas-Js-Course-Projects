'use strict';
let message=document.querySelector('.message');
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


checkBtn.addEventListener('click',function(){
    let guess=Number(guessBox.value);
    console.log(guess);

    //no number
    if(!guess){
        message.textContent='⛔ No Number!';
    }
    //win
    else if(guess===randSecretNum){
     message.textContent='🥳 Correct Number!';
    //  score++;
    //  scoreBox.textContent=score;
     numberBox.textContent=randSecretNum;
     body.style.backgroundColor='#60b347';
     numberBox.style.width='30rem';

     if(Number(highscoreBox.textContent)<score){
        
        highscoreBox.textContent=score;
     }
    }
    //wrong -> high
    else if(guess!==randSecretNum && score>1){
        if(){
            message.textContent=guess> randSecretNum'📈 Too High!';
            score--;
            scoreBox.textContent=score;

        }
        else{
            message.textContent='📉 Too Low'
            score--;
            scoreBox.textContent=score;
        }
    }
    else{
            score=0;
            message.textContent='You lost the game!'
            scoreBox.textContent=score;
    }
});

againBtn.addEventListener('click', function(){
    score=20;
    scoreBox.textContent=score;
    randSecretNum=Math.ceil(Math.random() * 20) + 1;
    message.textContent='Start guessing...';
    guessBox.value=null;
    body.style.backgroundColor='#222';
    numberBox.textContent='?';
    numberBox.style.width='15rem';
})

