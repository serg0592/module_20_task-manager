import { inProgress } from "./addTask";
import { ddstate } from "./addInProgress";

export const viewAddCardInProgressMenu = function () {
    inProgress.addCardInProgress.classList.add('add-card-active');
    inProgress.addCardInProgressDD.classList.add('dropdown-active');
    ddstate.value = true;
}