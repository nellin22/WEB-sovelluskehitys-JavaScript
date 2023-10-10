        const taskInput = document.getElementById('task-input');
        const tasksContainer = document.getElementById('tasks');

        // Function to add a new task
        function addTask() {
            const taskText = taskInput.value.trim();

            if (taskText !== '') {
                const task = document.createElement('div');
                task.className = 'task';
                task.innerHTML = `
                    <span>${taskText}</span>
                    <button class="delete-button">Delete</button>
                `;

                // Add an event listener to delete the task when the button is clicked
                const deleteButton = task.querySelector('.delete-button');
                deleteButton.addEventListener('click', () => {
                    tasksContainer.removeChild(task);
                });

                tasksContainer.appendChild(task);
                taskInput.value = '';
            }
        }

        // Add a task when the Enter key is pressed in the input field
        taskInput.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                addTask();
            }
        });
