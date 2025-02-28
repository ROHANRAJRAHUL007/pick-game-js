'use strict';

//selecting element
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0E1 = document.getElementById('current--0');
const current1E1 = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
/*
const score = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;
*/
let score, currentScore, activePlayer, playing;

//starting condition:
const init = function () {
  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0E1.textContent = 0;
  current1E1.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('playing--winner');
  player1El.classList.remove('playing--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`score--${activePlayer}`).textContent = currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1.Generation a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2.Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //3.Check for rolled 1
    if (dice !== 1) {
      //Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    console.log('Hold button');
    //1.Add Current score to active player's score
    score[activePlayer] += currentScore;
    //scores[1]=scores[1]+currentScore
    document.getElementById(`score--${activePlayer}`).textContent;
    score[activePlayer];

    switchPlayer();

    //2.check if Player's score is >=100
    if (score[activePlayer] >= 20) {
      playing = true;

      //Finish the game
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
