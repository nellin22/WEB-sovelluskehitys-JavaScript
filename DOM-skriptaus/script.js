// Alustaa tyhjän taulukon tietojen tallentamista varten.
function newElement(event) {
  event.preventDefault();
  
// Luo listan ja hankkii tiedot käyttäjältä.
  var li = document.createElement("li");
  var inputValue = document.getElementById("syöttö").value;
  
  // Antaa virheilmoitukset tyhjästä syöttökentästä ja liian lyhyestä sisällöstä. Vaihtaa syöttökentän reunat punaiseksi virheen ilmaantuessa.
  if (inputValue === '') {
        alert("Kirjoita jotain syöttökenttään.");
        document.getElementById("syöttö").style.borderColor = "red";
    } else if (inputValue.length < 3) {
        alert("Sisältö on liian lyhyt.");
        document.getElementById("syöttö").style.borderColor = "red";
    
    // Kenttään syötetyt tiedot kootaan ja liitetään yhdeksi listaksi. Uusin tieto lisätään listan perälle.
    } else {
        li.appendChild(document.createTextNode(inputValue));
        document.getElementById("lista").appendChild(li);

  // Luo ruksi -painikkeen jokaisen listassa olevan tietueen oikeaan laitaan ja poistaa tietueen listasta ruksi -painiketta klikkaamalla. 
     var txt = document.createTextNode("\u00D7");
     var span = document.createElement("span");
        span.className = "poista";
        li.appendChild(span);
        span.appendChild(txt);
    
  // Liittää klikkaukset poistotoimintoon.
      var myNodelist = document.getElementsByTagName("LI");
      for (i = 0; i < myNodelist.length; i++) {
      span.onclick = function() {
        var div = this.parentElement;
        div.style.display = "none"; 
      };
    }
  
// Lisää oikein-merkin tietueen eteen klikkaamalla.
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('oikeinMerkki');
    }
}, false);
    
// Tyhjentää syöttökentän kun tieto on lisätty listaan Lisää -painiketta klikkaamalla.
  }
  document.getElementById("syöttö").value = "";
}
