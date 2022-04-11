export const renderTasks = (toDoList, tasks) => {
    toDoList.innerHTML = "";
    tasks.forEach((task, i) => {
        const { name, category } = task;
        const id = `task-${i + 1}`;
        const taskElement = document.createElement('li');
        if (category) {
            taskElement.classList.add(category);
        }
        taskElement.innerHTML =
            `<label for=${id} >${name}</label>`;
        const checkBoxElement = document.createElement('input');
        checkBoxElement.type = "checkbox";
        checkBoxElement.name = name;
        checkBoxElement.id = id;
        checkBoxElement.checked = task.done;
        checkBoxElement.addEventListener('change', () => {
            task.done = !task.done;
        });
        taskElement.appendChild(checkBoxElement);
        toDoList.appendChild(taskElement);
    });
};
