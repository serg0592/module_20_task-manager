import { inProgress } from './addTask';
import { hideAddCardInProgressMenu } from './hideAddCardInProgressMenu';
import { viewAddCardInProgressMenu } from './viewAddCardInProgressMenu';
import { addCardInProgressMenuListener } from './addCardInProgressMenuListener'

let inProgressDDState = {
    value: false
};

function addInProgress() {
    inProgress.addCardInProgress.addEventListener('click', function () {
        if (inProgressDDState.value) {
            hideAddCardInProgressMenu();
        } else {
            viewAddCardInProgressMenu();

            let addCardItems = document.querySelectorAll('.app-add-card-in-progress-li');

            for (let i = 0; i < addCardItems.length; i++) {
                let addCardItem = addCardItems[i];
                addCardInProgressMenuListener(addCardItem);        
            };
        };
    });
    
}

export {inProgressDDState, addInProgress};