import { renderTasks } from "./helpers/renderTasks.js";
import { renderCategories } from "./helpers/renderCategories.js";
const toDoList = document.querySelector('.tasks');
const taskInput = document.querySelector('#name');
const btn = document.querySelector('button');
const categoriesContainer = document.querySelector('.categories');
let selectedCategory;
const categories = ['general', 'work', 'gym', 'hobby'];
const tasks = [
    {
        name: 'throw out the trash',
        done: false,
    },
    {
        name: 'go to the gym',
        done: true,
        category: 'gym'
    },
    {
        name: 'feed the cats',
        done: false,
    }
];
const changeCategory = (value) => {
    selectedCategory = value;
};
const addTask = (task) => {
    tasks.push(task);
    renderTasks(toDoList, tasks);
};
btn.addEventListener('click', (e) => {
    e.preventDefault();
    addTask({ name: taskInput.value, done: false, category: selectedCategory });
    taskInput.value = '';
});
renderCategories(categoriesContainer, categories, changeCategory);
renderTasks(toDoList, tasks);
