import { chooseAddCardItem } from './chooseAddCardItem';

export const addInProgress = function () {
    const addInProgress = document.querySelector('.app-add-card-in-progress');
    const addCardInProgressDD = document.querySelector('.app-add-in-progress-dropdown');
    let open, childs;


    addInProgress.addEventListener('click', function () {
        childs = document.querySelector('.app-add-in-progress-dropdown').childNodes;

        if (open) {
            addInProgress.classList.remove('add-card-active');
            addCardInProgressDD.classList.remove('dropdown-active');

            for (let i = 0; i < childs.length; i++) {
                childs[i].classList.remove('shell-active');
            };
            open = false;

        } else {
            addInProgress.classList.add('add-card-active');
            addCardInProgressDD.classList.add('dropdown-active');

            for (let i = 0; i < childs.length; i++) {
                childs[i].classList.add('shell-active');
            };
            chooseAddCardItem();
            open = true;            
        };
    });
}