export const addTask = function () {
    const toDoList = document.querySelector(".todo-list");   
    const addTaskBtn = document.querySelector(".app-btn-add-task");
    const kanban = document.querySelector(".kanban");

    addTaskBtn.addEventListener('click', function () {
        const newTask = document.createElement('div');
        newTask.className = "new-task-window";

        const newTaskForm = document.createElement('form');

        const newTaskName = document.createElement('p');
        newTaskName.innerHTML = 'Название задачи<br>';

        const newTaskNameText = document.createElement('input');
        newTaskNameText.className = "new-task-name";
        newTaskNameText.rows = '1';
        newTaskNameText.cols = '80';
        newTaskNameText.maxLength = '60';

        const newTaskCloseBtn = document.createElement('button');
        newTaskCloseBtn.className = 'btn app-btn-close';
        newTaskCloseBtn.innerHTML = 'X';

        const newTaskDescr = document.createElement('p');
        newTaskDescr.innerHTML = "Описание задачи<Br>";

        const newTaskDescrText = document.createElement('textarea');
        newTaskDescrText.className = "new-task-text";
        newTaskDescrText.rows = '8';

        const newTaskSubmitBtn = document.createElement('button');
        newTaskSubmitBtn.className = 'btn btn-outline-info app-btn-task-submit';
        newTaskSubmitBtn.type = 'submit';
        newTaskSubmitBtn.innerHTML = 'Submit';

        kanban.prepend(newTask);
        newTask.appendChild(newTaskForm);
        newTask.appendChild(newTaskCloseBtn);
        newTaskForm.appendChild(newTaskName);
        newTaskName.appendChild(newTaskNameText);
        newTaskForm.appendChild(newTaskDescr);
        newTaskDescr.appendChild(newTaskDescrText);
        newTaskForm.appendChild(newTaskSubmitBtn);

        newTaskNameText.focus();

        newTaskCloseBtn.addEventListener('click', function () {
            kanban.removeChild(newTask);
        });

        newTaskForm.addEventListener('submit', function (e) {
            e.preventDefault();            
            if (newTaskNameText.value === '') {
                alert('Введите название задачи');
            } else {
                const toDoNode = document.createElement('div');
                toDoNode.className = 'todo-node';

                const toDoNodeName = document.createElement('p');
                toDoNodeName.className = 'todo-node-name';

                toDoNodeName.innerHTML = newTaskNameText.value;

                toDoList.appendChild(toDoNode);
                toDoNode.appendChild(toDoNodeName);

                kanban.removeChild(newTask);
            };
        });
    });
}