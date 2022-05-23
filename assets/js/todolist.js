const addToList = document.querySelector('.btnAddTask');
addToList.addEventListener('click', () => añadirElementoALaLista());

//Creamos el listado, le añadimos la clase y lo insertamos en el html;
const addList = document.createElement('ul');
addList.className = 'taskList';
document.body.appendChild(addList);
//Creamos un elemento vacio invitando al user a rellenarlo
const addListEmptyItem = document.createElement('li');
addListEmptyItem.className = 'emptyTaskList';
addListEmptyItem.innerText = 'Introduce tu primer elemento';
addList.appendChild(addListEmptyItem);

const añadirElementoALaLista = () => {
  //nostraemos el valor del input
  const addTask = document.querySelector('.inputTareas');
  //comprobamos que no esté vacio
  if (addTask.value !== '') {
    //creamos el elemento li, le añadimos la clase taskItem y le añadimos el texto Borrar elemento
    const itemList = document.createElement('li');
    itemList.classList.add('taskItem');

    //creamos el botton de borrar elemento y le añadimos la clase deleteItem;
    const deleteBtn = document.createElement('a');
    deleteBtn.classList.add('deleteItem');
    deleteBtn.textContent = 'Borrar elemento';

    if (addListEmptyItem.innerText === 'Introduce tu primer elemento') {
      addListEmptyItem.remove();
      //añadimos el contenido del input en el item li
      itemList.textContent = addTask.value;
      deleteBtn.addEventListener('click', () =>
        deleteItem(itemList, deleteBtn)
      );

      addList.appendChild(itemList);
      itemList.appendChild(deleteBtn);

      addTask.value = '';
    } else {
      //añadimos el contenido del input en el item li
      itemList.textContent = addTask.value;
      deleteBtn.addEventListener('click', () =>
        deleteItem(itemList, deleteBtn)
      );

      addList.appendChild(itemList);
      itemList.appendChild(deleteBtn);

      addTask.value = '';
    }
  }
};

const deleteItem = (deleteItem, deleteBtn) => {
  deleteItem.remove();
  deleteBtn.remove();
};
