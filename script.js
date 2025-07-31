const player1_currentScore = document.querySelector('.current-score-1');
const player2_currentScore = document.querySelector('.current-score-2');

const player1_totalScore = document.querySelector('.total-score-1');
const player2_totalScore = document.querySelector('.total-score-2');
const player1_rollButton = document.querySelector('#roll-dice-1');
const player2_rollButton = document.querySelector('#roll-dice-2');
const player1_holdButton = document.querySelector('#hold-1');
const player2_holdButton = document.querySelector('#hold-2');

const message = document.getElementById("message");

let player1_score = 0;
let player2_score = 0;
let palyer1_current=0;
let palyer2_current=0;

 player1_rollButton.addEventListener('click', function() {
  palyer1_current = Math.floor(Math.random() * 6) + 1;

  if (palyer1_current <= 1) {
    player1_score=0;
    player1_currentScore.textContent =0;
    player1_totalScore.textContent= 0;
    message.style.display = "block";
    message.innerHTML = "Oops! You rolled a: " + palyer1_current +"⚠️Press Any Key to Hide the Message!";
  }else {
    player1_currentScore.textContent = palyer1_current;
  }
});

player1_holdButton.addEventListener('click', function() {

  player1_score +=palyer1_current;
  player1_totalScore.textContent = player1_score;


  if (player1_score >= 50) {
    message.style.display="block";
    message.textContent ="Congrats You Won 🎉";
    player1_totalScore.textContent=0;
  }

  palyer1_current =0;
  player1_currentScore.textContent =0;
});

player2_rollButton.addEventListener('click', function() {
  palyer2_current = Math.floor(Math.random() * 6) + 1;

  player2_currentScore.textContent = palyer2_current;
   if (palyer2_current <= 1) {
    player2_score= 0;
    palyer2_current = 0;
    player2_currentScore.textContent = 0;
    player2_totalScore.textContent= 0;
    message.style.display = "block";
    message.innerHTML = "Oops! You rolled a: " + palyer2_current +"⚠️Press Any Key to Hide the Message!";

  }else {
    player2_currentScore.textContent = palyer2_current;
  }

});

player2_holdButton.addEventListener('click', function() {

  player2_score +=palyer2_current;
  player2_totalScore.textContent = player2_score;


  if (player2_score >= 50) {
    message.style.display="block";
    message.textContent ="Congrats You Won 🎉";
    player2_totalScore.textContent=0;
  }

  palyer2_current =0;
  player2_currentScore.textContent =0;
});

document.addEventListener('keydown', function(event) {
  message.style.display="none";
})


