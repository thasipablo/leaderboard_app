import './style.css';
import addScore from './scoreFunctions.js';

const API_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Nexx8eCP31eNrgSs8Smg/scores/';
let scores = [];

const renderScores = () => {
  const scoresElement = document.querySelector('.scores-list');
  scoresElement.innerHTML = ''; // Clear the previous content

  // Create score items
  if (scores.length > 0) {
    scores.forEach((score) => {
      const scoreElement = document.createElement('li');
      scoreElement.classList.add('score-item');
      scoreElement.innerHTML = `
        ${score.user}: ${score.score}
      `;
      scoresElement.appendChild(scoreElement);
    });
  } else {
    const warning = document.createElement('li');
    warning.classList.add('warning');
    warning.innerHTML = 'Your scores will appear here.';
    scoresElement.appendChild(warning);
  }
};

const refreshScores = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  scores = data.result;
  renderScores();
};

const handleAddScore = async (e) => {
  e.preventDefault();

  const name = document.querySelector('.name-input');
  const score = document.querySelector('.score-input');
  if (name.value !== '' && score.value !== '') {
    const response = await addScore(API_URL, {
      user: name.value.trim(),
      score: score.value.trim(),
    });

    if (response.ok) {
      refreshScores();
    }

    name.value = '';
    score.value = '';
  }
};

const form = document.querySelector('.form');
form.addEventListener('submit', handleAddScore);

const refreshBtn = document.querySelector('.refresh-btn');
refreshBtn.addEventListener('click', refreshScores);

// Render the tasks on page load
refreshScores();
renderScores();
