import { addCardInProgressArr } from './addTask';
export const addInProgress = function () {
    const addInProgress = document.querySelector('.app-add-card-in-progress');
    const addCardInProgressDD = document.querySelector('.app-add-in-progress-dropdown');
    let open, childs;
    let inProgressArr;

    addInProgress.addEventListener('click', function () {
        for (let i = 0; i < addCardInProgressArr.length; i++) {
            const addCardInProgressLIShell =  document.createElement('div');
            const li = document.createElement('li');
            
            addCardInProgressLIShell.className = `app-add-card-in-progress-li-shell li_${i}`;
            li.className = `app-add-card-in-progress-li`;
            li.innerHTML = addCardInProgressArr[i].name;

            addCardInProgressDD.appendChild(addCardInProgressLIShell);
            addCardInProgressLIShell.appendChild(li);
        };

        if (open) {
            addInProgress.classList.remove('add-card-active');
            addCardInProgressDD.classList.remove('dropdown-active');
            childs = document.querySelector('.app-add-in-progress-dropdown').childNodes;
            for (let i = 0; i < childs.length; i++) {
                childs[i].classList.remove('shell-active');
            };
            open = false;
        } else {
            addInProgress.classList.add('add-card-active');
            addCardInProgressDD.classList.add('dropdown-active');
            childs = document.querySelector('.app-add-in-progress-dropdown').childNodes;
            for (let i = 0; i < childs.length; i++) {
                childs[i].classList.add('shell-active');
            };
            open = true;
            
            for (let i = 0; i < addCardInProgressArr.length; i++) { 
                document.querySelector(`app-add-card-in-progress-li-shell li_${i} shell-active`).addEventListener('click', function () {
                    inProgressArr[i] = addCardInProgressArr[i];
                    delete addCardInProgressArr[i];
                });
            }
        };
    });
}