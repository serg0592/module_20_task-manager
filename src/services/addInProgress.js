import { chooseAddCardItem } from './chooseAddCardItem';
import "../styles/kanban-todo.css";
import "../styles/kanban-InProgress.css";
import "../styles/kanban-finished.css";

export const addInProgress = function () {
    const addCardInProgress = document.querySelector('.app-add-card-in-progress');
    const addCardInProgressDD = document.querySelector('.app-add-in-progress-dropdown');
    let ddstate;
    let addCardItems = document.querySelector('.app-add-in-progress-dropdown').childNodes;

    addCardInProgress.addEventListener('click', function () {
        if (ddstate) {
            addCardInProgress.classList.remove('add-card-active');
            addCardInProgressDD.classList.remove('dropdown-active');
            ddstate = false;
        } else {
            addCardInProgress.classList.add('add-card-active');
            addCardInProgressDD.classList.add('dropdown-active');
            ddstate = true;
        };
    });
}