import { inProgress } from "./addTask";
import { inProgressDDState } from "./addInProgress";

export const hideAddCardInProgressMenu = function () {
    inProgress.addCardInProgressDD.style.display = 'none';
    inProgress.addCardInProgress.classList.remove('add-card-active');
    inProgress.addCardInProgressDD.classList.remove('dropdown-active');
    inProgressDDState.value = false;
}
