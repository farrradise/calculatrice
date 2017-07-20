// toutes les variables
var leChiffre = document.getElementsByClassName("chiffre");
var operateur = document.getElementsByClassName('operateur');
var displayResult = document.getElementsByTagName("th")[0];
var nbrTemp="", nbr1 ="", nbr2 ="", ope = ""; opeTemp ="";

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
            allowOperateur(this);
        });
    }
}

//fonction pour cliquer et afficher les opérateurs
function allowOperateur(th) {
  operation();

  ope = th.textContent;

  switch (ope) {
    case "+": ope ="+"; break;
    case "-": ope ="-"; break;
    case "×": ope ="*"; break;
    case "÷": ope ="/"; break;
    default:
  }
}


//fonction pour remplir nbr1 et nbr2
function operation() {
  if (nbr1=="") {
    nbr1 = nbrTemp;
    nbrTemp ="";
  } else if (ope=="") {
    displayResult.innerHTML = nbr1;
  } else {
    nbr2 = nbrTemp;
    nbrTemp = "";
    calcul(nbr1, ope, nbr2);
  }
}

// fonction pour faire le calcul
function calcul(number1, operator, number2) {
  nbr1 = eval(number1 + operator + number2);
  displayResult.innerHTML = nbr1;
  // ope="";
}


// fonction pour le '=' onclick
document.getElementById("egal").addEventListener("click", function () { quandAppuiSurEgal();});

function quandAppuiSurEgal() {
  calcul(nbr1, ope, nbrTemp);
  // alert(nbr1);
  // alert(nbrTemp);
  // alert(ope);
  // alert("test");
}
