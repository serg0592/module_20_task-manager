export const addInProgress = function () {
    const addInProgress = document.querySelector('.app-add-card-in-progress');
    const addCardInProgressDD = document.querySelector('.app-add-in-progress-dropdown');
    const addCardInProgressLI = document.querySelector('.app-add-card-in-progress-li');
    
    addInProgress.addEventListener('click', function () {
        debugger;
        addCardInProgressDD.className = 'app-add-in-progress-dropdown dropdown-active';
        let childs = document.querySelector('.app-add-in-progress-dropdown').childNodes;
        for (let i = 0; i < childs.length; i++) {
            childs[i].className = 'app-add-card-in-progress-li li-active';
        };
    });
}