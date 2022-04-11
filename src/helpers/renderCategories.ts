import { Category } from "../types/types";
 
export const renderCategories = (
    categoriesContainer:HTMLElement, 
    categories: Category[], 
    changeCategory: (category: Category) => void
    ) => {
    categoriesContainer.innerHTML = '';
    categories.forEach(category => {
        const id = `category-${category}`
        const liElement: HTMLElement = document.createElement('li');

        const inputElement: HTMLInputElement = document.createElement('input');
        inputElement.type = 'radio';
        inputElement.name = 'category';
        inputElement.value = category;
        inputElement.id = id;
        inputElement.addEventListener('change', () => {
            changeCategory(category);
        });

        const labelElement: HTMLLabelElement = document.createElement('label');
        labelElement.innerText = category;
        labelElement.setAttribute("for", id);
        
        liElement.appendChild(inputElement);
        liElement.appendChild(labelElement);

        categoriesContainer.appendChild(liElement);
    })
};