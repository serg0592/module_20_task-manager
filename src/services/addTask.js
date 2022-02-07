import "../styles/kanban-newTask.css";

let toDo = {        
        toDoList: {},
        toDoListArr: [],
        toDoArr: []
}

let inProgress = {
        inProgressList: {},
        addCardInProgress: {},
        addCardInProgressDD: {},
        inProgressArr: []
}


const addTask = function () {  
    const addTaskBtn = document.querySelector(".app-btn-add-task");
    const kanban = document.querySelector(".kanban");

    inProgress.inProgressList = document.querySelector('.in-progress-list');
    inProgress.addCardInProgress = document.querySelector('.app-add-card-in-progress');
    inProgress.addCardInProgressDD = document.querySelector('.app-add-in-progress-dropdown');

    toDo.toDoList = document.querySelector(".todo-list");

    addTaskBtn.addEventListener('click', function () {
        addTaskBtn.setAttribute('disabled', true);
        inProgress.addCardInProgress.setAttribute('disabled', true);

        const newTask = document.createElement('div');
        const newTaskForm = document.createElement('form');
        const newTaskName = document.createElement('p');
        const newTaskNameText = document.createElement('input');
        const newTaskCloseBtn = document.createElement('button');
        const newTaskDescr = document.createElement('p');
        const newTaskDescrText = document.createElement('textarea');
        const newTaskSubmitBtn = document.createElement('button');

        newTask.className = "new-task-window";
        newTaskForm.className = 'new-task-form';        
        newTaskName.innerHTML = 'Название задачи<br>';
        newTaskNameText.className = "new-task-name";
        newTaskNameText.rows = '1';
        newTaskNameText.cols = '80';
        newTaskNameText.maxLength = '60';
        newTaskCloseBtn.className = 'btn app-btn-close';
        newTaskCloseBtn.innerHTML = 'X';
        newTaskDescr.innerHTML = "Описание задачи<Br>";
        newTaskDescrText.className = "new-task-text";
        newTaskDescrText.rows = '8';
        newTaskSubmitBtn.className = 'btn btn-outline-info app-btn-task-submit';
        newTaskSubmitBtn.type = 'submit';
        newTaskSubmitBtn.innerHTML = 'Submit';

        kanban.prepend(newTask);
        newTask.appendChild(newTaskCloseBtn);
        newTask.appendChild(newTaskForm);
        newTaskForm.appendChild(newTaskName);
        newTaskName.appendChild(newTaskNameText);
        newTaskForm.appendChild(newTaskDescr);
        newTaskDescr.appendChild(newTaskDescrText);
        newTaskForm.appendChild(newTaskSubmitBtn);

        newTaskNameText.focus();

        newTaskCloseBtn.addEventListener('click', function () {
            addTaskBtn.removeAttribute('disabled');
            kanban.removeChild(newTask);
        });

        newTaskForm.addEventListener('submit', function (e) {
            e.preventDefault();
            if (newTaskNameText.value === '') {
                alert('Введите название задачи');
            } else {                
                addTaskBtn.removeAttribute('disabled');
                inProgress.addCardInProgress.removeAttribute('disabled');

                const toDoNode = document.createElement('li');
                const addCardInProgressNode = document.createElement('li');

                toDoNode.className = 'todo-node';
                toDoNode.innerHTML = newTaskNameText.value;
                addCardInProgressNode.className = `app-add-card-in-progress-li`;
                addCardInProgressNode.innerHTML = newTaskNameText.value;
            
                inProgress.addCardInProgressDD.appendChild(addCardInProgressNode);

                toDo.toDoList.appendChild(toDoNode);
                toDo.toDoListArr = document.querySelectorAll('.todo-node');

                toDo.toDoArr[toDo.toDoArr.length] = {
                    name: newTaskNameText.value,
                    descr: newTaskDescr.value
                };

                kanban.removeChild(newTask);
            };
        });
    });
}

export {toDo, inProgress, addTask};