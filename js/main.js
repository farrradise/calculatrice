// variables
nbrTemp="";
leChiffre = document.getElementsByClassName("chiffre");

// pour parcourir le tableau au clic d'un chiffre
for (let i = 0; i < leChiffre.length; i++) {
    leChiffre[i].addEventListener("click", function() {
        afficheChiffre(this, i);
    });
}

function afficheChiffre (th, index) {
  nbrTemp += leChiffre[index].textContent;
  document.getElementsByTagName("th")[0].innerHTML = nbrTemp;
}
