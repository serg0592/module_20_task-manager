import { finished } from "./addTask";
import { finishedDDState } from "./addFinished";

export const viewAddCardFinishedMenu = function () {
    finished.addCardFinished.classList.add('add-card-active');
    finished.addCardFinishedDD.classList.add('dropdown-active');
    finishedDDState.value = true;
}