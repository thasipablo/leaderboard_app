import './style.css';

import { scores, addScore } from './scoreFunctions.js';

const renderTasks = () => {
  const scoresElement = document.querySelector('.scores-list');
  scoresElement.innerHTML = ''; // Clear the previous content

  // Create score items
  if (scores.length > 0) {
    scores.forEach((score) => {
      const scoreElement = document.createElement('li');
      scoreElement.classList.add('score-item');
      scoreElement.innerHTML = `
        ${score.name}: ${score.score}
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

const handleAddTask = (e) => {
  e.preventDefault();

  const name = document.querySelector('.name-input');
  const score = document.querySelector('.score-input');
  addScore({ name: name.value.trim(), score: score.value.trim() });

  name.value = '';
  score.value = '';

  renderTasks();
};

const form = document.querySelector('.form');
form.addEventListener('submit', handleAddTask);

// Render the tasks on page load
renderTasks();
