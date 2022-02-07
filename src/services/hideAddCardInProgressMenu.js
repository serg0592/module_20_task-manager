import { inProgress } from "./addTask";
import { ddstate } from "./addInProgress";

export const hideAddCardInProgressMenu = function () {
    inProgress.addCardInProgress.classList.remove('add-card-active');
    inProgress.addCardInProgressDD.classList.remove('dropdown-active');
    ddstate.value = false;
}
