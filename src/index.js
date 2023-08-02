import './style.css';

const renderTasks = () => {
  const app = document.getElementById('app');
  app.innerHTML = ''; // Clear the previous content
};

const handleAddTask = (e) => {
  e.preventDefault();
};

const form = document.querySelector('.form');
form.addEventListener('submit', handleAddTask);

// Render the tasks on page load
renderTasks();
