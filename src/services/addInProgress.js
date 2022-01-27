import { toDoJSON } from "./addTask";

export const addInProgress = function () {
    const addCardList = document.querySelector('.app-add-card-in-progress');
    toDoList = JSON.parse(toDoJSON);
    for (let i = 0; i <= toDoList.length; i++) {
        const li = document.createElement('li');
        li.className = `card`;

        const liBtn = document.querySelector('button');
        liBtn.className = 'btn btn-outline-info app-li-btn';
        liBtn.innerHTML = toDoList[i].name;

        addCardList.appendChild(li);
        li.appendChild(liBtn);
    };
}