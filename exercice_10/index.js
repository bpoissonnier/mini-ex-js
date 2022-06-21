
// ******************** Variables ********************

// Declare la variable tableau qui va acceuillir les couleur disponible
var couleursDisponible = [];

// met les couleus disponible dans le tableau "couleursDisponible" rouge, bleu, vert, jaune, noir, orange
couleursDisponible.push("rgb(231, 111, 81)", "rgb(152, 193, 217)", "rgb(42, 157, 143)", "rgb(233, 196, 106)", "rgb(244, 162, 97)", "rgb(37, 50, 55)");

// Declare la variable tableau qui va acceuillir le code à deviner
var chaineADeviner = [];

// Declare la variable tableau qui va acceuillir le code proposé par l'utilisateur
var codePropose = [];

// renvoie le nombre délément de la bonne couleur mais pas forcément bien placé
var compteurElementBonneCouleur = 0;

// Renvoie les élément de bien placé et par conséquent de la bonne couleur
var compteurElementBienPlace = 0;

// ******************** Variables DOMs Général ********************

// Récuèpre le bouton newGame 
const newGameButton = document.querySelector("#newGame");

// Récuèpre l'ensemble de mastermind 
var mastermind = document.querySelector("#mastermind")

// Récupère tout les boutons de la pelette
const palette = document.querySelectorAll("#palette > button");

// Récupère le bouton verifier
const verifier = document.querySelector("#verifier");

// Récupère le massage de fin de partie
const message = document.querySelector("#message");

// Récupère la div contenant le message de fin de partie
const reponse = document.querySelector("#reponse");

// ******************** Variables DOMs Mastermind ********************

// Récupère tout les élément du table head
const couleurADEviner = document.querySelectorAll(".couleurADeviner");

// Récupère tout les texteContent des th>div>p
const verticalAlign = document.querySelectorAll(".verticalAlign");

// Récupère toutes les lignes de jeu 
var ligne = document.querySelectorAll("#mastermind > tbody > tr");

// Donne le numéro de la ligne actuelle 
var compteurLigne = 11

// Récupère la première ligne de jeu 
var ligneActuelle = ligne[compteurLigne];

// Récupère toutes les cellues de la ligne de jeu actuelle 
var cellules = ligneActuelle.querySelectorAll(".proposition");

// Donne le numéro de la cellule actuelle
var compteurCellule = 0

// Récupère la première cellule de la ligne de jeu actuelle
var celluleActuelle = cellules[compteurCellule];

// ******************** Variables DOMs De la Palette ********************

// Récupère toute les boutons couleursDisponible disponible de la palette de boutons
const couleurs = document.querySelectorAll(".couleur");

// Récupère le bouton reset
const reset = document.querySelector("#reset");

// ******************** Fonctions Code à Deviner ********************

// créer une nombre aléatoire en deux bornes
function nombreAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// choisi une couleur parmi le tableau couleurs disponible
function choixCouleur() { 
    var i = nombreAleatoire(0, couleursDisponible.length);
    return couleursDisponible[i];
}

// ajoute la coueur pris au hasard dans le tableau "chaineADeviner" 
function code() {
    for (i = 0; i < 4; i++){
        chaineADeviner.push(choixCouleur());
    }
};

// ******************** Fonctions Code Input ********************

// ajoute une couleur donnée en dernière position du tableau "codePropose"
function pushProposition(couleur) {
    if (codePropose.length < 4){
        codePropose.push(couleur);
    }
}

// retire la dernière couleur du tableau "codePropose"
function removeProposition() {
    if (codePropose.length > 0) {
        codePropose.pop()
    }
}

// efface les données du tableau "codePropose" cette fonction sera appelée lorsque le tableau "codePropose" précédent aura été vérifié 
function newProposition() {
    if (codePropose.length == 4)
    codePropose = [];
}

// ******************** Fonctions manipulation du DOMs Mastermind ********************

// Avance d'une cellule si la céllule actuelle n'est pas la dernière du tableau
function avancerCellule() {
    if (compteurCellule < 3) {
        compteurCellule++;
        celluleActuelle = cellules[compteurCellule];
    }
}

// Recule d'une cellule si la cellule actuelle n'est pas la première et qu'elle n'as pas de couleur de fond
function reculerCellule() {
    if (compteurCellule > 0 && window.getComputedStyle(celluleActuelle).getPropertyValue("background-color") == "rgb(128, 128, 128)") {
        compteurCellule--;
        celluleActuelle = cellules[compteurCellule];   
    }
}

// Change la ligne actuelle en la ligne suivant et recupère sa première cellule
function changerDeLigne() {
    if (codePropose.length == 4) {
        if (compteurLigne > 0) {
            compteurLigne--;
            ligneActuelle = ligne[compteurLigne];
            cellules = ligneActuelle.querySelectorAll(".proposition");       
            compteurCellule = 0;
            celluleActuelle = cellules[compteurCellule];
        }
    } else {
        alert("Remplissez toute les cases de la ligne")
    }
}

// Remplace la couleur de la cellule actuelle par la couleur donnée si elle ne possède pas de couleur de fond
function remplacerCouleur(couleur) {
    if(window.getComputedStyle(celluleActuelle).getPropertyValue("background-color") == "rgb(128, 128, 128)") {
        celluleActuelle.style.backgroundColor = couleur;
    }
}

// Enlève la couleur de fond de la cellule actuelle et la remplace par la couleur par défault
function resetCouleur() {
    celluleActuelle.style.backgroundColor = "grey";
}

// ******************** Fonctions manipulation du DOMs Mastermind ********************

// Incrémente le nombre déléments bien placé et de la bonne couleur en comparant le tableau "codePropose" et "chaineADeviner"
function bienPlace() {
    // remet le compteur d'élément bien placé à 0
    compteurElementBienPlace = 0;
    for (i = 0; i < chaineADeviner.length; i++) {
        if (codePropose[i] == chaineADeviner[i]) {
            compteurElementBienPlace++;
        }
    }
}

// Incrémente le nombre déléments de la bonne couleur en comparant le tableau "codePropose" et "chaineADeviner"
function bonneCouleur() {
    // remet le compteur d'élément bien placé à 0
    compteurElementBonneCouleur = 0;
    // copie le code à devinier dans une nouveau tableau local
    var chaineADevinerTest = [].concat(chaineADeviner);
    for (i = 0; i < chaineADeviner.length; i++) {
        indexElementCodePropose = chaineADevinerTest.indexOf(codePropose[i])
        if ( indexElementCodePropose != -1) {
            compteurElementBonneCouleur++;
            chaineADevinerTest.splice(indexElementCodePropose, 1);
        }
    }
}

// affiche le rsultat de la comparaison dans les pointeurs de la ligne actuelle
function afficherResultat() {
    if (codePropose.length == 4) {
        // récupère les cellule d'affichage de la ligne actuelle
        var pointeursActuelle = ligneActuelle.querySelectorAll(".pointeur");
        // change la couleur d'autant de pointeur qu'il y' a de couleur bonne mais mal placée
        for (j = 0; j < compteurElementBonneCouleur; j++) {
            pointeursActuelle[j].style.backgroundColor = "rgb(231, 111, 81)";
        }
        // Ecrase les couleur d'autant de pointeur qu'il y'a de couleur bien placé et par conséquent bonne cela revien au mêm que de soustraire le nombre de bonne couleur au nombre de bien placée
        for (k = 0; k < compteurElementBienPlace; k++) {
            pointeursActuelle[k].style.backgroundColor = "rgb(42, 157, 143)";
        }
    }
}

// Dévoile le code à deviner dans le table head
function devoilerLaChaineADecouvrir() {
    for (i = 0; i < chaineADeviner.length; i++) {
        couleurADEviner[i].style.backgroundColor = chaineADeviner[i];
        verticalAlign[i].textContent = "";   
    }
}

// ******************** Fonctions manipulation du DOMs Palette ********************

// Désactive les bouttons de la palette
function desactiverBouton() {
    for (var bouton of palette) {
        bouton.setAttribute("disabled", "");
    }
    verifier.setAttribute("disabled", "");
}

// Active les bouttons de la palette
function activerBouton() {
    for (var bouton of palette) {
        bouton.removeAttribute("disabled");
    }
    verifier.removeAttribute("disabled");
}

// ******************** Fonctions NewGame ********************

// Affiche et lance le jeux 
function afficherJeu() {
    document.querySelector("#mastermind").style.display = "table";
    document.querySelector("#palette").style.display = "flex";
    verifier.style.display = "block";
    reponse.style.display = "none"
}

// Reset les variable à leur valeur par défault
function variableDefault() {
    // vide la chaine à deviner donc le code caché 
    chaineADeviner = [];
    // redescend à la première ligne
    compteurLigne = 11;
    ligneActuelle = ligne[compteurLigne];
    // redescend à la première cellule

    cellules = ligneActuelle.querySelectorAll(".proposition");
    compteurCellule = 0;
    celluleActuelle = cellules[compteurCellule];
}

// Efface toutes les propositions du mastermind en les recolorant en gris
function effacerToutesPropositions() {
    var allPropositions = mastermind.querySelectorAll(".proposition");
    for (i = 0; i < allPropositions.length; i++) {
        allPropositions[i].style.backgroundColor = "grey";
    }
}

// Efface tous les pointeurs en les recolorant en gris
function effacerPointeurs() {
    var allPointeurs = mastermind.querySelectorAll(".pointeur");
    for (i = 0; i < allPointeurs.length; i++) {
        allPointeurs[i].style.backgroundColor = "grey";
    }
}

// Efface toutes les couleurs de la chaine contenue dans le thead 
function effacerCouleurADeviner () {
    for (i = 0; i < chaineADeviner.length; i++) {
        couleurADEviner[i].style.backgroundColor = "grey";
        verticalAlign[i].textContent = "?";  
    }
}

// Lance une nouvelle partie
function newGame() {
    afficherJeu();
    effacerToutesPropositions();
    effacerPointeurs();
    effacerCouleurADeviner();
    variableDefault();
    code();
    activerBouton();
}

// ******************** Fonction Fin de Partie ********************

function verfiGagne() {
    if (codePropose.toString() === chaineADeviner.toString()) {
        message.textContent = "Bravo, vous avez gagné !";
        reponse.style.display = "block"
        desactiverBouton();
        devoilerLaChaineADecouvrir();
    }
    if (codePropose.toString() !== chaineADeviner.toString() && compteurLigne == 0) {
        message.textContent = "Dommage, vous avez perdu !";
        reponse.style.display = "block"
        desactiverBouton();
        devoilerLaChaineADecouvrir();
    }
}

// ******************** Event ********************

// Au click d'un des boutons de la palette 
for (var bouton of couleurs) {
    bouton.addEventListener("click", function(e) {
        e.stopPropagation();
        e.preventDefault();
        // Récupère la couleur du bouton
        var couleur = window.getComputedStyle(this).getPropertyValue("background-color");
        // var couleur = this.getAttribute("id");
        // remplace la couleur de la cellule par sa couleur
        remplacerCouleur(couleur);
        // ajoute sa couleur au code proposé
        pushProposition(couleur);
        console.log(codePropose)
        // avance la cellule actuelle d'un pas
        avancerCellule();
    })
}

// Au click du bouton reset
reset.addEventListener("click", function(e) {
    e.stopPropagation();
    e.preventDefault();
    // Reculer la cellule si son background n'est pas coloré
    reculerCellule();
    // Enlève la couleur de la cellule actuelle
    resetCouleur();
    // Enlève la dernière couleur au code proposé
    removeProposition();
    console.log(codePropose);
})

// Au click du bouton vérifier
verifier.addEventListener("click", function(e) {
    e.stopPropagation();
    e.preventDefault();
    //fonction comparer à mettre ici
    bienPlace();
    bonneCouleur();
    afficherResultat();
    //fonction pour vérifier si on gagne ici
    verfiGagne();
    // change la ligne actuelle par celle du dessus
    changerDeLigne();
    // reset le code de proposition
    newProposition();
})

// Au click du bouton newGame
newGameButton.addEventListener("click", function(e) {
    e.stopPropagation();
    e.preventDefault();
    // change la valeur du bouton en recommencer, ne sers que pour le lancement du jeu
    newGameButton.value = "Recommencer";
    // Lance une nouvelle partie
    newGame();
})

