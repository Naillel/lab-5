const taskInput = document.querySelector('#taskInput');
const addBtn = document.querySelector('#addBtn');
const taskList = document.querySelector('#taskList');
const pendingCount = document.querySelector('#pendingCount');

const updateCounter = () => {
    const pendingTasks = document.querySelectorAll('li:not(.completed)').length;
    pendingCount.textContent = `Tareas pendientes: ${pendingTasks}`;
};

const addTask = () => {
    const text = taskInput.value.trim();

    if (text === "") {
        alert("Por favor, escribe una tarea válida.");
        return;
    }

    const li = document.createElement('li');

    li.innerHTML = `
        <span class="task-text">${text}</span>
        <button class="complete-btn">Marcar completada</button>
        <button class="delete-btn">Eliminar</button>
    `;

    li.querySelector('.complete-btn').addEventListener('click', () => {
        li.classList.toggle('completed');
        updateCounter();
    });

    li.querySelector('.delete-btn').addEventListener('click', () => {
        li.remove();
        updateCounter();
    });

    taskList.appendChild(li);
    taskInput.value = "";
    updateCounter();
};

addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});