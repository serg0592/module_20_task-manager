import { ddstate } from "./addInProgress";

export const viewAddCardInProgressMenu = function () {
    const addCardInProgress = document.querySelector('.app-add-card-in-progress');
    const addCardInProgressDD = document.querySelector('.app-add-in-progress-dropdown');

    addCardInProgress.classList.add('add-card-active');
    addCardInProgressDD.classList.add('dropdown-active');
    ddstate = true;
}