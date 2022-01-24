export const addTask = function () {
    const addTaskBtn = document.querySelector(".app-btn-add-task");

    addTaskBtn.addEventListener('click', function () {
        const kanban = document.querySelector(".kanban");

        const newTask = document.createElement('div');
        newTask.className = "new-task-window";

        const newTaskP1 = document.createElement('p');
        newTaskP1.innerHTML = 'Название задачи<br>';

        const newTaskP2 = document.createElement('p');
        newTaskP2.innerHTML = "Описание задачи<Br>";

        const newTaskTextArea = document.createElement('textarea');
        newTaskTextArea.className = "new-task-text";

        kanban.prepend(newTask);
        newTask.appendChild(newTaskP2);
        newTaskP2.appendChild(newTaskTextArea);

        const toDoList = document.querySelector(".todo-list");        
    });
}