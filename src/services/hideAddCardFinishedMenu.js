import { finished } from "./addTask";
import { finishedDDState } from "./addFinished";

export const hideAddCardFinishedMenu = function () {
    finished.addCardFinishedDD.style.display = 'none';
    finished.addCardFinished.classList.remove('add-card-active');
    finished.addCardFinishedDD.classList.remove('dropdown-active');
    finishedDDState.value = false;
}
