import { finished } from "./addTask";
import { finishedDDState } from "./addFinished";

export const hideAddCardFinishedMenu = function () {
    finished.addCardFinished.classList.remove('add-card-active');
    finished.addCardFinishedDD.classList.remove('dropdown-active');
    finishedDDState.value = false;
}
