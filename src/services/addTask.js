export const addTask = function () {
    const toDoList = document.querySelector(".todo-list");   
    const addTaskBtn = document.querySelector(".app-btn-add-task");

    addTaskBtn.addEventListener('click', function () {
        const kanban = document.querySelector(".kanban");

        const newTask = document.createElement('div');
        newTask.className = "new-task-window";

        const newTaskP1 = document.createElement('p');
        newTaskP1.innerHTML = 'Название задачи<br>';

        const newTaskTextArea1 = document.createElement('textarea');
        newTaskTextArea1.className = "new-task-name";
        newTaskTextArea1.rows = '1';

        const newTaskCloseBtn = document.createElement('button');
        newTaskCloseBtn.className = 'btn app-btn-close';
        newTaskCloseBtn.innerHTML = 'X';

        const newTaskP2 = document.createElement('p');
        newTaskP2.innerHTML = "Описание задачи<Br>";

        const newTaskTextArea2 = document.createElement('textarea');
        newTaskTextArea2.className = "new-task-text";
        newTaskTextArea2.rows = '8';

        const newTaskSubmitBtn = document.createElement('button');
        newTaskSubmitBtn.className = 'btn btn-outline-info app-btn-task-submit';
        newTaskSubmitBtn.innerHTML = 'Submit';

        kanban.prepend(newTask);
        newTask.appendChild(newTaskCloseBtn);
        newTask.appendChild(newTaskP1);
        newTaskP1.appendChild(newTaskTextArea1);
        newTask.appendChild(newTaskP2);
        newTaskP2.appendChild(newTaskTextArea2);
        newTask.appendChild(newTaskSubmitBtn);     
    });

    const newTaskCloseBtn = document.querySelector('.app-btn-close');
    const newTaskSubmitBtn = document.querySelector('.app-btn-task-submit');

    
}