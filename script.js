// Wait for the DOM to fully load before executing script
document.addEventListener('DOMContentLoaded', () => {
    // Select required elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    function addTask() {
        // Get and trim input value
        const taskText = taskInput.value.trim();

        // Prevent empty tasks
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create list item element
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Remove task when button is clicked
        removeBtn.onclick = () => li.remove();

        // Append remove button to list item
        li.appendChild(removeBtn);

        // Append list item to task list
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = '';
    }

    // Add event listeners
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
