var nbrTemp="";
var leChiffre = document.getElementsByClassName("chiffre");
var operateur = document.getElementsByClassName('operateur');
var displayResult = document.getElementsByTagName("th")[0];
var nbr1 ="";
var nbr2 ="";
var ope = "";

// pour parcourir le tableau au clic d'un chiffre
for (let i = 0; i < leChiffre.length; i++) {
    leChiffre[i].addEventListener("click", function() {
        afficheChiffre(this, i);
    });
}

//pour recommencer dès le début
document.getElementById('reboot').addEventListener("click", function () {displayResult.innerHTML = 0; nbrTemp=""; nbr1 =""; nbr2="";});


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
  ope = th.textContent;
  switch (ope) {
    case "+": ope ="+"; break;
    case "-": ope ="-"; break;
    case "×": ope ="*"; break;
    case "÷": ope ="/"; break;

    default:

  }
  // if (ope == "=") {
    // calcul(nbr1, ope, nbr2);
  // }
  if (nbr1=="") {
    nbr1 = nbrTemp;
    nbrTemp ="";
  } else {
    nbr2 = nbrTemp;
    nbrTemp = "";
    // alert(ope);
    calcul(nbr1, ope, nbr2);
  }
}


// fonction pour faire le calcul
function calcul(number1, operator, number2) {
  nbr1 = eval(number1 + operator + number2);
  displayResult.innerHTML = nbr1;
}
