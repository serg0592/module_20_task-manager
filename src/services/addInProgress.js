import { addCardMenuListener } from './addCardMenuListener';
import "../styles/kanban-todo.css";
import "../styles/kanban-InProgress.css";
import "../styles/kanban-finished.css";

let ddstate = {
    value: false
};

function addInProgress() {
    const addCardInProgress = document.querySelector('.app-add-card-in-progress');
    const addCardInProgressDD = document.querySelector('.app-add-in-progress-dropdown');
    addCardInProgress.addEventListener('click', function () {
        if (ddstate.value) {
            addCardInProgress.classList.remove('add-card-active');
            addCardInProgressDD.classList.remove('dropdown-active');
            ddstate.value = false;
        } else {
            addCardInProgress.classList.add('add-card-active');
            addCardInProgressDD.classList.add('dropdown-active');
            ddstate.value = true;

            let addCardItems = document.querySelectorAll('.app-add-card-in-progress-li');

            for (let i = 0; i < addCardItems.length; i++) {
                let addCardItem = addCardItems[i];
                addCardMenuListener(addCardItem);        
            };
        };
    });
    
}

export {ddstate, addInProgress};