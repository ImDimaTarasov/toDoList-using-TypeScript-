import { Task } from "../types/types";

export const renderTasks = ( toDoList: HTMLElement, tasks: Task[]) => {
    toDoList.innerHTML = "";
    tasks.forEach((task, i) => {
        const{name, category} = task;
        const id: string = `task-${i+1}`;


        const taskElement: HTMLElement = document.createElement('li');
        if (category){
            taskElement.classList.add(category)
        }
        taskElement.innerHTML = 
        `<label for=${id} >${name}</label>`; 

        const checkBoxElement: HTMLInputElement = document.createElement('input');
        checkBoxElement.type = "checkbox";
        checkBoxElement.name = name;
        checkBoxElement.id = id;
        checkBoxElement.checked = task.done;
        checkBoxElement.addEventListener('change', () => {
            task.done = !task.done;
        })
        taskElement.appendChild(checkBoxElement);
        toDoList.appendChild(taskElement);
        
    });
};