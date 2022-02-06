import { ddstate } from "./addInProgress";

export const hideAddCardInProgressMenu = function () {
    const addCardInProgress = document.querySelector('.app-add-card-in-progress');
    const addCardInProgressDD = document.querySelector('.app-add-in-progress-dropdown');

    addCardInProgress.classList.remove('add-card-active');
    addCardInProgressDD.classList.remove('dropdown-active');
    ddstate = false;
}
