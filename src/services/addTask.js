export const addTask = function () {
    const addTaskBtn = document.querySelector(".app-btn-add-task");

    addTaskBtn.addEventListener('click', function () {
        const kanban = document.querySelector(".kanban");

        const newTask = document.createElement('div');
        newTask.className = "new-task-window";

        newTask.style.position = 'absolute';
        newTask.style.borderWidth = '2px';
        newTask.style.borderStyle = 'solid';
        newTask.style.borderColor = '#0c8ea8';
        newTask.style.borderRadius = '10px';
        newTask.style.backgroundColor = 'white';
        newTask.style.marginTop = '40px';
        newTask.style.marginBottom = '40px';
        newTask.style.marginLeft = '100px';
        newTask.style.marginRight = '100px';
        newTask.style.zIndex = '999999';

        const newTaskP1 = document.createElement('p');
        newTaskP1.innerHTML = 'Название задачи<br>';

        const newTaskTextArea1 = document.createElement('textarea');
        newTaskTextArea1.className = "new-task-name";

        const newTaskP2 = document.createElement('p');
        newTaskP2.innerHTML = "Описание задачи<Br>";

        const newTaskTextArea2 = document.createElement('textarea');
        newTaskTextArea2.className = "new-task-text";

        kanban.prepend(newTask);
        newTask.appendChild(newTaskP1);
        newTaskP1.appendChild(newTaskTextArea1);
        newTask.appendChild(newTaskP2);
        newTaskP2.appendChild(newTaskTextArea2);

        const toDoList = document.querySelector(".todo-list");        
    });
}