const scores = JSON.parse(localStorage.getItem('scores')) || [];

const saveScore = () => {
  localStorage.setItem('scores', JSON.stringify(scores));
};

const addScore = (score) => {
  scores.push(score);
  saveScore();
};

export { scores, addScore };
