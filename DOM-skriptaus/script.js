//save todos to local storage
function saveToLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
}
// Deletes todo item
function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  saveToLocalStorage();
  showAlertMessage("Todo deleted successfully", "success");
  showAllTodos();
}

// Click on a delete button to hide the current list item
var close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// Adds a checked symbol when clicking on a to-do item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function addTask() {
            var taskInput = document.getElementById("taskInput");
            var taskText = taskInput.value.trim();

            if (taskText !== "") {
                var taskList = document.getElementById("taskList");
                var li = document.createElement("li");
                li.appendChild(document.createTextNode(taskText));
                taskList.appendChild(li);
                taskInput.value = "";
            }
        }
