import { chooseAddCardItem } from './chooseAddCardItem';

export const addInProgress = function () {
    const addInProgress = document.querySelector('.app-add-card-in-progress');
    const addCardInProgressDD = document.querySelector('.app-add-in-progress-dropdown');
    let addCardItems = document.querySelector('.app-add-in-progress-dropdown').childNodes;
    let open;addCardItems = document.querySelector('.app-add-in-progress-dropdown').childNodes;

    addInProgress.addEventListener('click', function () {
        const addInProgress = document.querySelector('.app-add-card-in-progress');
        const addCardInProgressDD = document.querySelector('.app-add-in-progress-dropdown');
        let addCardItems = document.querySelector('.app-add-in-progress-dropdown').childNodes;
        let open;

        if (open) {
            addInProgress.classList.remove('add-card-active');
            addCardInProgressDD.classList.remove('dropdown-active');

            for (let i = 0; i < addCardItems.length; i++) {
                addCardItems[i].classList.remove('shell-active');                
            };
            open = false;

        } else {
            addInProgress.classList.add('add-card-active');
            addCardInProgressDD.classList.add('dropdown-active');

            for (let i = 0; i < addCardItems.length; i++) {
                addCardItems[i].classList.add('shell-active');                
            };
            open = true;
            alert('1');
        };
    });

    addInProgress.removeEventListener('click', addCardOpen(), true);

    addInProgress.addEventListener('click', addCardClick => {
        alert('2');
        for (let i = 0; i < addCardItems.length; i++) {
            if (addCardClick.target.className === `li_${i}`) {
                chooseAddCardItem(i);
            };
        };        
    });
}