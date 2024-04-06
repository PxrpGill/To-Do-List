const form = document.getElementById('myForm');
const list = document.getElementById('list');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let deadLine = document.getElementById('deadLine').value;
    if (deadLine === '') {
        deadLine = 'Не указано';
    }
    const text = document.getElementById('textInput').value;
    document.getElementById('textInput').value = '';

    if (text === '') {
        alert('Нельзя вводить пустое поле!');
    } else {
        let listElement = document.createElement('li');
        listElement.classList.add('listElement');
        list.appendChild(listElement);

        const forDeadLineSpot = document.createElement('h3');
        forDeadLineSpot.textContent = 'Дед лайн: ' + deadLine;
        listElement.appendChild(forDeadLineSpot);

        const forTextSpot = document.createElement('p');
        listElement.appendChild(forTextSpot);
        const forButtonsSpot = document.createElement('div');
        listElement.appendChild(forButtonsSpot);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить';
        deleteButton.classList.add('deleteButton');

        const editButton = document.createElement('button');
        editButton.textContent = 'Редактировать';
        editButton.classList.add('editButton');

        const successPointButton = document.createElement('button');
        successPointButton.textContent = 'Выполнено';
        successPointButton.classList.add('successPointButton');

        forTextSpot.textContent = text;
        forButtonsSpot.appendChild(deleteButton);
        forButtonsSpot.appendChild(editButton);
        forButtonsSpot.appendChild(successPointButton);

        deleteButton.addEventListener('click', function() {
            list.removeChild(listElement);
        });

        editButton.addEventListener('click', function() {
            const spotForEditForm = document.createElement('div');
            const editForm = document.createElement('form');
            const editTextSpot = document.createElement('input');
            const successButton = document.createElement('button');
            successButton.type = 'button';
            const cancelButton = document.createElement('button');
            cancelButton.type = 'button';
            editTextSpot.value = forTextSpot.textContent;
            successButton.textContent = 'Применить';
            successButton.classList.add('successPointButton')
            cancelButton.textContent = 'Отменить';
            cancelButton.classList.add('deleteButton');
            editForm.appendChild(editTextSpot);
            editForm.appendChild(successButton);
            editForm.appendChild(cancelButton);

            spotForEditForm.appendChild(editForm);
            listElement.appendChild(spotForEditForm);

            cancelButton.addEventListener('click', function() {
                spotForEditForm.removeChild(editForm);
            });

            successButton.addEventListener('click', function() {
                if (editTextSpot.value !== '') {
                    forTextSpot.textContent = editTextSpot.value;
                    listElement.appendChild(forButtonsSpot);
                    listElement.removeChild(spotForEditForm);
                } else {
                    alert('Вы оставили поле пустым!');
                }
            });
        });

        successPointButton.addEventListener('click', function() {
            forTextSpot.style.color = 'green';
            forButtonsSpot.removeChild(editButton);
            forButtonsSpot.removeChild(successPointButton);
        });
    }
});
