import { toDoArr } from './addTask';

export const addCardMenuListener = function (item) {
    const addCardFinishedDD = document.querySelector('.app-add-finished-dropdown');
    const inProgressList = document.querySelector('.in-progress-list');
    const addCardInProgressDD = document.querySelector('.app-add-in-progress-dropdown');
    let inProgressArr = [];
    item.addEventListener('click', function () {
        debugger;
        for (let j = 0; j < toDoArr.length; j++) {
            if (toDoArr[j].name === item.innerHTML) {
                inProgressArr[inProgressArr.length] = toDoArr[j];
    
                const inProgressNode = document.createElement('div');
                const inProgressName = document.createElement('p');
                const li = document.createElement('li');
    
                inProgressNode.className = 'in-progress-node';
                inProgressName.className = 'in-progress-node-name';
                inProgressName.innerHTML = toDoArr[j].name
                li.className = `app-add-card-finished-li`;
                li.innerHTML = toDoArr[j].name;
            
                addCardFinishedDD.appendChild(li);
    
                inProgressList.appendChild(inProgressNode);
                inProgressNode.appendChild(inProgressName);
                
                addCardInProgressDD.removeChild(item);
                delete toDoArr[j];
            };
        };
    });
}