import { inProgress } from "./addTask";
import { inProgressDDState } from "./addInProgress";

export const viewAddCardInProgressMenu = function () {
    inProgress.addCardInProgress.classList.add('add-card-active');
    inProgress.addCardInProgressDD.classList.add('dropdown-active');
    inProgressDDState.value = true;
}