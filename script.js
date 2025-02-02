// Function to add a task
function addTask(taskText, save = true) {
    taskText = taskText.trim(); // Trim any extra spaces

    // If taskText is empty, alert the user
    if (!taskText) {
        alert('Please enter a task!');
        return; // Stop execution if task is empty
    }

    const taskList = document.getElementById('task-list');
    const li = document.createElement('li');
    li.textContent = taskText;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.classList.add('remove-btn');

    removeBtn.onclick = function() {
        li.remove();
        removeTaskFromStorage(taskText);
    };

    li.appendChild(removeBtn);
    taskList.appendChild(li);

    document.getElementById('task-input').value = ''; // Clear input field

    if (save) {
        saveTaskToStorage(taskText);
    }
}
