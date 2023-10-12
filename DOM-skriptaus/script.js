    var todos = [];

    function newElement(event) {
        event.preventDefault();
        var li = document.createElement("li");
        var inputValue = document.getElementById("input").value;
        if (inputValue === '') {
            alert("Kirjoita jotain syöttökenttään.");
            document.getElementById("input").style.borderColor = "red";
        } else if (inputValue.length < 3) {
            alert("Sisältö on liian lyhyt.");
            document.getElementById("input").style.borderColor = "red";
        } else {
            li.appendChild(document.createTextNode(inputValue));
            document.getElementById("list").appendChild(li);
            todos.push(inputValue);
            saveToLocalStorage();

            var span = document.createElement("SPAN");
            var txt = document.createTextNode("\u00D7");
            span.className = "close";
            span.appendChild(txt);
            li.appendChild(span);

            span.onclick = function() {
                var div = this.parentElement;
                div.style.display = "none";
            };
        }
        document.getElementById("input").value = "";
    }

    var list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    }, false);

    var myNodelist = document.getElementsByTagName("LI");
    for (i = 0; i < myNodelist.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);

        span.onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        };
    }

    function saveToLocalStorage() {
        // Implement your local storage code here if needed.
    }
