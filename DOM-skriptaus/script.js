// Alustaa tyhjän taulukon tietojen tallentamista varten
var todos = [];

//Tallentaa tiedot localstorageen
function saveToLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function newElement(event) {
  
// Luo listan ja hankkii tiedot käyttäjältä
    var li = document.createElement("li");
    var inputValue = document.getElementById("input").value;
  
  // Antaa virheilmoitukset tyhjästä syöttökentästä ja liian lyhyestä sisällöstä. Vaihtaa syöttökentän reunat punaiseksi virheen ilmaantuessa.
  if (inputValue === '') {
        alert("Kirjoita jotain syöttökenttään.");
        document.getElementById("input").style.borderColor = "red";
    } else if (inputValue.length < 3) {
        alert("Sisältö on liian lyhyt.");
        document.getElementById("input").style.borderColor = "red";
    
    // Kenttään syötetyt tiedot kootaan ja liitetään yhdeksi listaksi. Lisää uuden tiedon listan päätteeksi ja tallentaa tiedon localstorageen
    } else {
        li.appendChild(document.createTextNode(inputValue));
        document.getElementById("list").appendChild(li);
        todos.push(inputValue);
        saveToLocalStorage();

    // Luo ruksi -painikkeen jokaisen listassa olevan tietueen oikeaan laitaan.
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);
    
    // Poistaa tietueen listasta ruksi -painiketta klikkaamalla.   
    var myNodelist = document.getElementsByTagName("LI");
    for (i = 0; i < myNodelist.length; i++) {     
        span.onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        };
    // Tyhjentää syöttökentän kun tieto on lisätty listaan Lisää -painiketta klikkaamalla
    }
    document.getElementById("input").value = "";
}

// Lisää checkmarkin tietueen eteen klikkaamalla
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);
