//Tallentaa tiedot localstorageen
function saveToLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
  }

// Kenttään syötetyt tiedot kootaan 'Lisää' nappia painamalla sivulla yhteen listaksi
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("input").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Kirjoita jotain kenttään.");
  } else {
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("input").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function()
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
