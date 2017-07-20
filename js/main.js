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

  // pour eviter le double emploi d'une virgule
  for (k=0; k < nbrTemp.length;k++) {
      if (nbrTemp[k] == ".") {
        document.getElementById("point").style.pointerEvents = "none";
      }
  }

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
    case "=": ope=""; break;
    default:
  }
}


//fonction pour remplir nbr1 et nbr2
function operation() {
  if (nbr1=="") {
    nbr1 = nbrTemp;
    nbrTemp ="";
    document.getElementById("point").style.pointerEvents = "inherit";
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
  document.getElementById("point").style.pointerEvents = "inherit";
// rajouter le bug des décimal à 5
  var leTest = nbr1.toString().length;
  if (leTest > 10) {
    // la c'est pas hyper correct correct vu que je devrais mettre une condition pour tester la partie décimale uniquement
    nbr1 = nbr1.toFixed(2);
  }
  displayResult.innerHTML = nbr1;
}


// fonction pour le '=' onclick
document.getElementById("egal").addEventListener("click",quandAppuiSurEgal());

function quandAppuiSurEgal() {
  if (nbr1=="") {
    displayResult.innerHTML=nbr1;
  } else {
    calcul(nbr1, ope, nbr2);
  }
}
