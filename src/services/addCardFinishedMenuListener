import { inProgress } from './addTask';
import { finished } from './addTask';
import { hideAddCardFinishedMenu } from './hideAddCardFinishedMenu';
import "../styles/kanban-finished.css";

export const addCardFinishedMenuListener = function (item) {

    item.onclick = function () {
        for (let j = 0; j < inProgress.inProgressArr.length; j++) {
            if (inProgress.inProgressArr[j].name === item.innerHTML) {
                finished.finishedArr[finished.finishedArr.length] = inProgress.inProgressArr[j];
    
                const finishedNode = document.createElement('li');
    
                finishedNode.className = 'finished-node';
                finishedNode.innerHTML = inProgress.inProgressArr[j].name;
    
                finished.finishedList.appendChild(finishedNode);
                
                finished.addCardFinishedDD.removeChild(item);

                for (let k = 0; k < inProgress.inProgressList.childNodes.length; k++) {
                    if (inProgress.inProgressList.childNodes[k].innerHTML === item.innerHTML) {
                        inProgress.inProgressList.removeChild(inProgress.inProgressList.childNodes[k]);
                    };
                };
            };
        };
        hideAddCardFinishedMenu();
    };
}