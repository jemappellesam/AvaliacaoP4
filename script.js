let text = document.getElementById('input1');
const item = document.getElementById('toDoList');

function addTarefa() {
    let content = text.value
    let container = document.createElement('div');
    let newItem = document.createElement('div');
    newItem.innerHTML = content;
    newItem.classList.add("NovoItemLista");
    let deleteButton = document.createElement('button');
    let iconDeleteButton = document.createElement('span');
    const iconType = 'delete';
    iconDeleteButton.innerHTML = iconType;
    deleteButton.classList.add("deleteButton");
    iconDeleteButton.classList.add("material-symbols-outlined");
    deleteButton.appendChild(iconDeleteButton);
    container.classList.add("alingContent");
    container.appendChild(newItem);
    container.appendChild(deleteButton);
    item.appendChild(container);
    text.value = null;


    newItem.addEventListener('mouseover', function () {
        newItem.style.backgroundColor = 'beige'; 
    });

   
    newItem.addEventListener('mouseout', function () {
        newItem.style.backgroundColor = ''; 
    });
    
    deleteButton.addEventListener('click', function () {
        container.remove();
    });
    
   
}
