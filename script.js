document.addEventListener('DOMContentLoaded', function() {
    const addTaskButton = document.getElementById('add-task-button');
    const newTaskInput = document.getElementById('new-task-input');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', addTask);
    newTaskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            const listItem = document.createElement('li');
            const taskSpan = document.createElement('span');
            taskSpan.textContent = taskText;
            taskSpan.classList.add('task-text');
            listItem.appendChild(taskSpan);
            
            const deleteButton = document.createElement('button');
            deleteButton.textContent = '✖';
            deleteButton.classList.add('delete-button');
            deleteButton.addEventListener('click', function() {
                taskList.removeChild(listItem);
            });
            listItem.appendChild(deleteButton);

            listItem.addEventListener('click', function() {
                listItem.classList.toggle('done');
            });
            taskList.appendChild(listItem);
            newTaskInput.value = '';
        }
    }
});
