import "./style.css";

import scores from "./scoreFunctions.js";

const renderTasks = () => {
  const scoresElement = document.querySelector(".scores-list");
  scores.innerHTML = ""; // Clear the previous content

  // Create score items
  scores.forEach((score) => {
    const scoreElement = document.createElement("li");
    scoreElement.classList.add("score-item");
    scoreElement.innerHTML = `
      ${score.name}: ${score.score}
    `;
    scoresElement.appendChild(scoreElement);
  });
  console.log(scoresElement);

};

const handleAddTask = (e) => {
  e.preventDefault();
  
  const name = document.querySelector('.name-input');
  const score = document.querySelector('.score-input');
  scores.push({name: name.value.trim(), score: score.value.trim()})

  name.value = '';
  score.value = '';

  renderTasks();
};

const form = document.querySelector(".form");
form.addEventListener("submit", handleAddTask);

// Render the tasks on page load
renderTasks();
