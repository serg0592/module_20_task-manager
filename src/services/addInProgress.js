import { inProgress } from './addTask';
import { hideAddCardInProgressMenu } from './hideAddCardInProgressMenu';
import { viewAddCardInProgressMenu } from './viewAddCardInProgressMenu';
import { addCardMenuListener } from './addCardMenuListener';
import "../styles/kanban-todo.css";
import "../styles/kanban-InProgress.css";
import "../styles/kanban-finished.css";

let ddstate = {
    value: false
};

function addInProgress() {
    inProgress.addCardInProgress.addEventListener('click', function () {
        if (ddstate.value) {
            hideAddCardInProgressMenu();
        } else {
            viewAddCardInProgressMenu();

            let addCardItems = document.querySelectorAll('.app-add-card-in-progress-li');

            for (let i = 0; i < addCardItems.length; i++) {
                let addCardItem = addCardItems[i];
                addCardMenuListener(addCardItem);        
            };
        };
    });
    
}

export {ddstate, addInProgress};