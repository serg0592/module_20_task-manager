import { toDoArr, addCardInProgressDD } from './addTask';
let inProgressArr = [];

export const chooseAddCardItem = function (i) {
    const inProgressList = document.querySelector(".in-progress-list");
    const addCardFinishedDD = document.querySelector('.app-add-finished-dropdown');

    for (let j = 0; j < toDoArr.length; j++) {
        let moveItemShell = document.querySelector(`.li_${i}`);
        if (toDoArr[j].name === moveItemShell.firstChild.innerHTML) {
            inProgressArr[inProgressArr.length] = toDoArr[j];

            const inProgressNode = document.createElement('div');
            const inProgressName = document.createElement('p');
            const addCardFinishedLIShell =  document.createElement('div');
            const li = document.createElement('li');

            inProgressNode.className = 'in-progress-node';
            inProgressName.className = 'in-progress-node-name';
            inProgressName.innerHTML = inProgressArr[inProgressArr.length - 1].name;
            addCardFinishedLIShell.className = `app-add-card-finished-li-shell li_${inProgressArr.length - 1}`;
            li.className = `app-add-card-finished-li`;
            li.innerHTML = inProgressArr[inProgressArr.length - 1].name;
        
            addCardFinishedDD.appendChild(addCardFinishedLIShell);
            addCardFinishedLIShell.appendChild(li);

            inProgressList.appendChild(inProgressNode);
            inProgressNode.appendChild(inProgressName);
            
            addCardInProgressDD.removeChild(moveItemShell);
            delete toDoArr[j];
        };
    };
}