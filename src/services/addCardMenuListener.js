import { toDo } from './addTask';
import { inProgress } from './addTask';
import { hideAddCardInProgressMenu } from './hideAddCardInProgressMenu';
import "../styles/kanban-InProgress.css";

export const addCardMenuListener = function (item) {
    const addCardFinishedDD = document.querySelector('.app-add-finished-dropdown');

    item.onclick = function () {
        for (let j = 0; j < toDo.toDoArr.length; j++) {
            if (toDo.toDoArr[j].name === item.innerHTML) {
                inProgress.inProgressArr[inProgress.inProgressArr.length] = toDo.toDoArr[j];
    
                const inProgressNode = document.createElement('li');
                const addCardFinishedNode = document.createElement('li');
    
                inProgressNode.className = 'in-progress-node';
                inProgressNode.innerHTML = toDo.toDoArr[j].name;
                addCardFinishedNode.className = `app-add-card-finished-li`;
                addCardFinishedNode.innerHTML = toDo.toDoArr[j].name;
            
                addCardFinishedDD.appendChild(addCardFinishedNode);
    
                inProgress.inProgressList.appendChild(inProgressNode);
                
                inProgress.addCardInProgressDD.removeChild(item);

                for (let k = 0; k < toDo.toDoList.childNodes.length; k++) {
                    if (toDo.toDoList.childNodes[k].innerHTML === item.innerHTML) {
                        toDo.toDoList.removeChild(toDo.toDoList.childNodes[k]);
                    };
                };
            };
        };
        hideAddCardInProgressMenu();
    };
}