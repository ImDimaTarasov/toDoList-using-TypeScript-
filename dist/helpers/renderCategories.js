export const renderCategories = (categoriesContainer, categories, changeCategory) => {
    categoriesContainer.innerHTML = '';
    categories.forEach(category => {
        const id = `category-${category}`;
        const liElement = document.createElement('li');
        const inputElement = document.createElement('input');
        inputElement.type = 'radio';
        inputElement.name = 'category';
        inputElement.value = category;
        inputElement.id = id;
        inputElement.addEventListener('change', () => {
            changeCategory(category);
        });
        const labelElement = document.createElement('label');
        labelElement.innerText = category;
        labelElement.setAttribute("for", id);
        liElement.appendChild(inputElement);
        liElement.appendChild(labelElement);
        categoriesContainer.appendChild(liElement);
    });
};
