var todos = [];

//Tallentaa tiedot localstorageen
function saveToLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Kenttään syötetyt tiedot kootaan 'Lisää' nappia painamalla sivulla yhteen listaksi. Virheilmoitukset tyhjästä syöttö kentästä ja liian lyhyestä sisällöstä.
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

// Klikkaamalla listassa olevaa asiaa lisää check markin asian eteen
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// Tekee ruksi nappulan jokaisen listassa olevan asian oikeaan laitaan ja mahdollistaa asioiden poistamisen listasta ruksia painamalla

var myNodelist = document.getElementsByTagName("LI");
for (i = 0; i < myNodelist.length; i++) {

    };
}
