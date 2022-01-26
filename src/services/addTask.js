export const addTask = function () {
    const addTaskBtn = document.querySelector(".app-btn-add-task");

    addTaskBtn.addEventListener('click', function () {
        const kanban = document.querySelector(".kanban");

        const newTask = document.createElement('div');
        newTask.className = "new-task-window";

        const newTaskP1 = document.createElement('p');
        newTaskP1.innerHTML = 'Название задачи<br>';

        const newTaskTextArea1 = document.createElement('textarea');
        newTaskTextArea1.className = "new-task-name";

        const newTaskCloseBtn = document.createElement('button');
        newTaskCloseBtn.className = 'btn app-btn-close';
        newTaskCloseBtn.innerHTML = 'X';

        const newTaskP2 = document.createElement('p');
        newTaskP2.innerHTML = "Описание задачи<Br>";

        const newTaskTextArea2 = document.createElement('textarea');
        newTaskTextArea2.className = "new-task-text";

        kanban.prepend(newTask);
        newTask.appendChild(newTaskCloseBtn);
        newTask.appendChild(newTaskP1);
        newTaskP1.appendChild(newTaskTextArea1);
        newTask.appendChild(newTaskP2);
        newTaskP2.appendChild(newTaskTextArea2);

        const toDoList = document.querySelector(".todo-list");        
    });
}