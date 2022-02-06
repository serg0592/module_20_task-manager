import { addCardInProgressDD } from './addTask';
import { addCardMenuListener } from './addCardMenuListener';
import { addCardInProgress } from './addTask';
import "../styles/kanban-todo.css";
import "../styles/kanban-InProgress.css";
import "../styles/kanban-finished.css";

export const addInProgress = function () {
    let ddstate;

    addCardInProgress.addEventListener('click', function () {
        if (ddstate) {
            addCardInProgress.classList.remove('add-card-active');
            addCardInProgressDD.classList.remove('dropdown-active');
            ddstate = false;
        } else {
            addCardInProgress.classList.add('add-card-active');
            addCardInProgressDD.classList.add('dropdown-active');
            ddstate = true;

            let addCardItems = document.querySelectorAll('.app-add-card-in-progress-li');

            for (let i = 0; i < addCardItems.length; i++) {
                let addCardItem = addCardItems[i];
                addCardMenuListener(addCardItem);        
            };
        };
    });
    
}