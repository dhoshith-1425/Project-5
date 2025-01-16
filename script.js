document.addEventListener('DOMContentLoaded', () => {
  const addTaskBtn = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const tasksList = document.getElementById('tasks-list');

  addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
      addTask(taskText);
      taskInput.value = '';
    }
  });

  tasksList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
      e.target.parentElement.remove();
    }
  });

  function addTask(taskText) {
    const li = document.createElement('li');
    li.innerHTML = `
      ${taskText}
      <button class="delete-btn">Delete</button>
    `;
    tasksList.appendChild(li);
  }
});
