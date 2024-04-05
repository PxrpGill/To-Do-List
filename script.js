const form = document.getElementById('myForm');
const list = document.getElementById('list');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const text = document.getElementById('textInput').value;

    let listElement = document.createElement('li');
    listElement.classList.add('listElement');

    let forButtonsSpot = document.createElement('div');
    list.appendChild(forButtonsSpot);

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Удалить';
    deleteButton.classList.add('deleteButton');

    let editButton = document.createElement('button');
    editButton.textContent = 'Редактировать';
    editButton.classList.add('editButton');

    let successPointButton = document.createElement('button');
    successPointButton.textContent = 'Выполнено';
    successPointButton.classList.add('successPointButton');

    listElement.textContent = text;
    list.appendChild(listElement);
    listElement.appendChild(deleteButton);
    listElement.appendChild(editButton);
    listElement.appendChild(successPointButton);

    deleteButton.addEventListener('click', function() {
        list.removeChild(listElement);
    });

    editButton.addEventListener('click', function() {
        const editForm = document.createElement('form');
        const editTextSpot = document.createElement('input');
        const successButton = document.createElement('button');
        const cancelButton = document.createElement('button');
        editTextSpot.value = listElement.textContent;
        successButton.textContent = 'Применить';
        cancelButton.textContent = 'Отменить';
        editForm.appendChild(editTextSpot);
        editForm.appendChild(successButton);
        editForm.appendChild(cancelButton);

        listElement.appendChild(editForm);

        cancelButton.addEventListener('click', function() {
            listElement.removeChild(editForm);
        });

        successButton.addEventListener('click', function() {
            listElement.textContent = editTextSpot.value;
            listElement.appendChild(editButton);
            listElement.appendChild(deleteButton);
            listElement.appendChild(successPointButton);
        });
    });

    successPointButton.addEventListener('click', function() {
        listElement.style.color = 'green';
        listElement.removeChild(editButton);
        listElement.removeChild(successPointButton);
    });
});
