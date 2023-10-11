// Saves info to local storage
function saveToLocalStorage() {
  const myNodelist = document.querySelectorAll("li");
  myNodelist.forEach((item) => {
    const span = document.createElement("SPAN");
    span.className = "close";
    span.textContent = "\u00D7";
    item.appendChild(span);

    span.onclick = function() {
      item.style.display = "none";
    };
  }

  const list = document.querySelector('ul');
  list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);
}

// Create a new to-do item when clicking the add button
function newElement() {
  const li = document.createElement("li");
  const inputValue = document.getElementById("myInput").value;
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    li.textContent = inputValue;
    document.getElementById("myUL").appendChild(li);

    const span = document.createElement("SPAN");
    span.className = "close";
    span.textContent = "\u00D7";
    li.appendChild(span);

    span.onclick = function() {
      li.style.display = "none";
    };
  }
  document.getElementById("myInput").value = "";
}

// Call saveToLocalStorage when the page loads to restore the list
document.addEventListener("DOMContentLoaded", saveToLocalStorage);
