import { chooseAddCardItem } from './chooseAddCardItem';

export const addInProgress = function () {
    const addCardInProgress = document.querySelector('.app-add-card-in-progress');
    const addCardInProgressDD = document.querySelector('.app-add-in-progress-dropdown');
    let ddstate;
    let addCardItems = document.querySelector('.app-add-in-progress-dropdown').childNodes;

    addCardInProgress.addEventListener('click', function () {
        if (ddstate) {
            addCardInProgress.classList.remove('add-card-active');
            addCardInProgressDD.classList.remove('dropdown-active');
    
            for (let i = 0; i < addCardItems.length; i++) {
                addCardItems[i].classList.remove('shell-active');                
            };
            ddstate = false;
        } else {
            addCardInProgress.classList.add('add-card-active');
            addCardInProgressDD.classList.add('dropdown-active');
            
            for (let i = 0; i < addCardItems.length; i++) {
                addCardItems[i].classList.add('shell-active');                
            };
            ddstate = true;
        };
    });

    /*addCardInProgress.addEventListener('click', addCardOpen(addCardInProgress, addCardInProgressDD, addCardItems, open));

    addCardInProgress.addEventListener('click', addCardClick => {
        alert('2');
        for (let i = 0; i < addCardItems.length; i++) {
            if (addCardClick.target.className === `li_${i}`) {
                chooseAddCardItem(i);
            };
        };        
    });*/
}

/*function addCardOpen(addCard, dropdown, arr, ddstate) {
    if (ddstate) {
        addCard.classList.remove('add-card-active');
        dropdown.classList.remove('dropdown-active');

        for (let i = 0; i < arr.length; i++) {
            arr[i].classList.remove('shell-active');                
        };
        ddstate = false;
    } else {
        addCard.classList.add('add-card-active');
        dropdown.classList.add('dropdown-active');
        
        for (let i = 0; i < arr.length; i++) {
            arr[i].classList.add('shell-active');                
        };
        ddstate = true;
        alert('1');
    };
}*/