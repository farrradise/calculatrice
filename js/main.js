// variables
nbrTemp="";
leChiffre = document.getElementsByClassName("chiffre");
operateur = document.getElementsByClassName('operateur');
displayResult = document.getElementsByTagName("th")[0];
nbr1 ="";

// pour parcourir le tableau au clic d'un chiffre
for (let i = 0; i < leChiffre.length; i++) {
    leChiffre[i].addEventListener("click", function() {
        afficheChiffre(this, i);
    });
}

//pour recommencer dès le début
document.getElementById('reboot').addEventListener("click", function () {displayResult.innerHTML = 0; nbrTemp="";});


// fonction pour cliquer et afficher les chiffres
function afficheChiffre (th, index) {
  nbrTemp += leChiffre[index].textContent;
  displayResult.innerHTML = nbrTemp;

    for (let j = 0; j < operateur.length; j++) {
        operateur[j].addEventListener("click", function() {
            allowOperateur(this, j);
        });
    }
}

//fonction pour cliquer et afficher les opérateurs
function allowOperateur(th, index) {
  if (nbr1=="") {
    nbr1 = nbrTemp;
    nbrTemp ="";
  } else {
    alert(nbr1 + " + " + nbrTemp);
    // nbrTemp="";
    // sinon déjà une valeur dans var nbr1 faire appel à la fonction du calcul
  }
}
