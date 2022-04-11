import { Task, Category } from "./types/types";
import { renderTasks } from "./helpers/renderTasks.js";
import { renderCategories } from "./helpers/renderCategories.js";

const toDoList: HTMLElement = document.querySelector('.tasks');
const taskInput: HTMLInputElement = document.querySelector('#name');
const btn: HTMLButtonElement = document.querySelector('button');
const categoriesContainer: HTMLElement = document.querySelector('.categories');

let selectedCategory: Category;


const categories: Category[] = ['general', 'work', 'gym', 'hobby'];

const tasks: Task[] = [
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
]


const changeCategory = (value: Category) => {
    selectedCategory = value;
}




const addTask = (task: Task) => {
    tasks.push(task);
    renderTasks(toDoList, tasks);
}

btn.addEventListener('click', (e: Event) => {
    e.preventDefault(); 
    addTask({name:taskInput.value, done: false, category: selectedCategory});
    taskInput.value = '';
});
renderCategories(categoriesContainer, categories, changeCategory);
renderTasks(toDoList, tasks);