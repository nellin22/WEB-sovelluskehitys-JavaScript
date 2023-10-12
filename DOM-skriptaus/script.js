var todos = [];

//Tallentaa tiedot localstorageen
function saveToLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
  }

// Kenttään syötetyt tiedot kootaan 'Lisää' nappia painamalla sivulla yhteen listaksi
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
    document.getElementById("input").value = "";
  }

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

// Klikkaamalla listassa olevaa asiaa lisää check markin asian eteen
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Tekee ruksi nappulan jokaisen listassa olevan asian oikeaan laitaan
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Mahdollistaa asioiden poistamisen listasta ruksia painamalla
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
