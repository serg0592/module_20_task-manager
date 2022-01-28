import { toDoJSON } from './addTask';
export const addInProgress = function () {
    const addInProgress = document.querySelector('.app-add-card-in-progress');
    const addCardInProgressDD = document.querySelector('.app-add-in-progress-dropdown');
    let open, childs;
    
    addInProgress.addEventListener('click', function () {
        if (open) {
            addInProgress.className = 'app-add-card-in-progress';
            addCardInProgressDD.className = 'app-add-in-progress-dropdown';
            childs = document.querySelector('.app-add-in-progress-dropdown').childNodes;
            for (let i = 0; i < childs.length; i++) {
                childs[i].className = 'app-add-card-in-progress-li-shell';
            };
            open = false;
        } else {
            addInProgress.className = 'app-add-card-in-progress add-card-active';
            addCardInProgressDD.className = 'app-add-in-progress-dropdown dropdown-active';
            childs = document.querySelector('.app-add-in-progress-dropdown').childNodes;
            for (let i = 0; i < childs.length; i++) {
                childs[i].className = 'app-add-card-in-progress-li-shell shell-active';
            };
            open = true;
        };
    console.log(toDoJSON);
    });
}