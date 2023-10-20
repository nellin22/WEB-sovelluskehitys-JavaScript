// Luo listan ja hankkii tiedot käyttäjältä.
  const lista = document.getElementById("lista");
  const syöttökenttä = document.getElementById("syöttö");

// Alustaa tyhjän taulukon tietojen tallentamista varten.
  function newElement(event) {
  event.preventDefault();

// Luo uuden tehtävän listaan
  function luoTietue(text) {
    const lista = document.createElement("li");
    lista.textContent = text;
    lista.addEventListener("click", toggleCompleted);
    luoRuksi(lista);
    return lista;
  }

// Antaa virheilmoitukset tyhjästä syöttökentästä ja liian lyhyestä sisällöstä. Vaihtaa syöttökentän reunat punaiseksi virheen ilmaantuessa.
    const arvo = syöttökenttä.value.trim();
    if (arvo === '') {
      alert("Kirjoita jotain syöttökenttään.");
      syöttökenttä.style.borderColor = "red";
    } else if (arvo.length < 3) {
      alert("Sisältö on liian lyhyt.");
      syöttökenttä.style.borderColor = "red";
	
// Kenttään syötetyt tiedot kootaan ja liitetään yhdeksi listaksi. Uusin tieto lisätään listan perälle. Syöttökenttä tyhjennetään seuraavaa syöttöä varten.
    } else {
      syöttökenttä.style.borderColor = "";
      const tietue = luoTietue(arvo);
      lista.appendChild(tietue);
      syöttökenttä.value = "";
    }
  }

// Lisää oikein-merkin tietueen eteen ja yliviivaa sen klikkaamalla.
  function toggleCompleted(event) {
    event.target.classList.toggle("valmis");
  }

// Luo ruksi -painikkeen jokaisen listassa olevan tietueen oikeaan laitaan.
  function luoRuksi(tietue) {
    const ruksi = document.createElement("span");
    ruksi.className = "poista";
    ruksi.textContent = "\u00D7";
    ruksi.addEventListener("click", poista);
    tietue.appendChild(ruksi);
  }

// Poistaa tietueen listasta ruksi -painiketta klikkaamalla.
  function poista() {
    const tehtävä = this.parentElement;
    tehtävä.remove();
  }
