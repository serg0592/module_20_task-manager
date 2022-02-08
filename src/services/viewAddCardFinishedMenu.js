import { finished } from "./addTask";
import { finishedDDState } from "./addFinished";

export const viewAddCardFinishedMenu = function () {
    finished.addCardFinishedDD.style.display = 'block';
    finished.addCardFinished.classList.add('add-card-active');
    finished.addCardFinishedDD.classList.add('dropdown-active');
    finishedDDState.value = true;
}