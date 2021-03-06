import { finished } from './addTask';
import { hideAddCardFinishedMenu } from './hideAddCardFinishedMenu';
import { viewAddCardFinishedMenu } from './viewAddCardFinishedMenu';
import { addCardFinishedMenuListener } from './addCardFinishedMenuListener';

let finishedDDState = {
    value: false
};

const addFinished = function () {
    finished.addCardFinished.addEventListener('click', function () {
        if (finishedDDState.value) {
            hideAddCardFinishedMenu();
        } else {
            viewAddCardFinishedMenu();

            let addCardItems = document.querySelectorAll('.app-add-card-finished-li');

            for (let i = 0; i < addCardItems.length; i++) {
                let addCardItem = addCardItems[i];
                addCardFinishedMenuListener(addCardItem);        
            };
        };
    });
    
}

export {finishedDDState, addFinished};