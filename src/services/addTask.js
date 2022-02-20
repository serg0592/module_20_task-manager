import "../styles/kanban-newTask.css";
import "../styles/kanban-todo.css";
import "../styles/kanban-InProgress.css";
import "../styles/kanban-finished.css";

let toDo = {        
        toDoList: {},
        toDoListArr: [],
        toDoArr: []
}

let inProgress = {
        inProgressList: {},
        addCardInProgress: {},
        addCardInProgressDD: {},
        addCardInProgressBtn: {},
        inProgressArr: []
}

let finished = {
    finishedList: {},
    addCardFinished: {},
    addCardFinishedDD: {},
    addCardFinishedBtn: {},
    finishedArr: []
}


const addTask = function () {
    const body = document.querySelector(".bg-light");
    const addTaskBtn = document.querySelector(".app-btn-add-task");
    const kanban = document.querySelector(".kanban");

    inProgress.inProgressList = document.querySelector('.in-progress-list');
    inProgress.addCardInProgress = document.querySelector('.app-add-card-in-progress');
    inProgress.addCardInProgressDD = document.querySelector('.app-add-in-progress-dropdown');
    inProgress.addCardInProgressBtn = document.querySelector('.app-btn-add-card-in-progress');

    finished.finishedList = document.querySelector('.finished-list');
    finished.addCardFinished = document.querySelector('.app-add-card-finished');
    finished.addCardFinishedDD = document.querySelector('.app-add-finished-dropdown');
    finished.addCardFinishedBtn = document.querySelector('.app-btn-add-card-finished');

    toDo.toDoList = document.querySelector(".todo-list");

    inProgress.addCardInProgressDD.style.display = 'none';
    finished.addCardFinishedDD.style.display = 'none';

    addTaskBtn.addEventListener('click', function () {
        addTaskBtn.setAttribute('disabled', true);
        inProgress.addCardInProgressBtn.setAttribute('disabled', true);
        finished.addCardFinishedBtn.setAttribute('disabled', true);

        const newTaskShell = document.createElement('div');
        const newTask = document.createElement('div');
        const newTaskForm = document.createElement('form');
        const newTaskName = document.createElement('p');
        const newTaskNameText = document.createElement('input');
        const newTaskCloseBtn = document.createElement('button');
        const newTaskDescr = document.createElement('p');
        const newTaskDescrText = document.createElement('textarea');
        const newTaskSubmitBtn = document.createElement('button');

        newTaskShell.className = "new-task-shell";
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

        body.prepend(newTaskShell);
        newTaskShell.prepend(newTask);
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
            inProgress.addCardInProgressBtn.removeAttribute('disabled');
            finished.addCardFinishedBtn.removeAttribute('disabled');
            body.removeChild(newTaskShell);
        });

        newTaskForm.addEventListener('submit', function (e) {
            e.preventDefault();
            if (newTaskNameText.value === '') {
                alert('Введите название задачи');
            } else {                
                addTaskBtn.removeAttribute('disabled');
                inProgress.addCardInProgressBtn.removeAttribute('disabled');
                finished.addCardFinishedBtn.removeAttribute('disabled');

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

                body.removeChild(newTaskShell);
            };
        });
    });
}

export {toDo, inProgress, finished, addTask};