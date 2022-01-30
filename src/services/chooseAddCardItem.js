import { toDoArr, addCardInProgressDD } from './addTask';
let inProgressArr = [];

export const chooseAddCardItem = function () {
    const inProgressList = document.querySelector(".in-progress-list");
    const addCardFinishedDD = document.querySelector('.app-add-finished-dropdown');

    /*window.onclick = function(click)*/
        debugger;
        for (let i = 0; i < addCardInProgressDD.childNodes.length; i++) {        
            /*if (click.target.matches(`li_${i}`) && click.target.matches(`app-add-card-in-progress-li`))*/
            document.querySelector(`.li_${i}`).addEventListener('click', function () {
                for (let j = 0; j < toDoArr.length; j++) {
                    if (toDoArr[j].name === document.querySelector(`.li_${i}`).innerHTML) {
                        inProgressArr[inProgressArr.length] = toDoArr[j];

                        const inProgressNode = document.createElement('div');
                        const inProgressName = document.createElement('p');
                        const addCardFinishedLIShell =  document.createElement('div');
                        const li = document.createElement('li');

                        inProgressNode.className = 'in-progress-node';
                        inProgressName.className = 'in-progress-node-name';
                        inProgressName.innerHTML = newTaskNameText.value;
                        addCardFinishedLIShell.className = `app-add-card-finished-li-shell li_${inProgressArr.length - 1}`;
                        li.className = `app-add-card-finished-li`;
                        li.innerHTML = toDoArr[j].name;
                    
                        addCardFinishedDD.appendChild(addCardFinishedLIShell);
                        addCardFinishedLIShell.appendChild(li);

                        inProgressList.appendChild(inProgressNode);
                        inProgressNode.appendChild(inProgressName);
                        
                        addCardInProgressDD.removeChild(`li_${i}`);
                    };
                };
            });
        };
    
}