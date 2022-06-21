
let btn = document.getElementById("button");
let btnRe = document.getElementById("btnRe");
let message = document.getElementById("message");
const nomObjet = ["Une chaise gaming","Un costume d'halloween","Un barbecue","Une guitare","Un sac à main"]
const imageObjet = ["chaise.png","costume-haloween.png","grill.png","guitare.png","sac-a-main.png"]
let image = document.getElementById("objet");
let nomImage = document.getElementById("nom-objet");
let nbrt = document.getElementById("nbrt");

function ChiffreAleatoire(valeurMax)
{
    return Math.floor(Math.random() * Math.floor(valeurMax));
}

function Affimage(valeur){
    return '<img src="image-juste-prix/' + valeur + '" class="img-fluid" width="50%" alt="Responsive image">';
}

let nbreAleatoire = ChiffreAleatoire(5);
let prixAlea = ChiffreAleatoire(100) +1;

image.innerHTML = Affimage(imageObjet[nbreAleatoire]);
nomImage.innerHTML = nomObjet[nbreAleatoire];

let compteurEssai = 10;
nbrt.innerHTML= "il reste "+compteurEssai+" essai";

function VerifPrix(){
    let prixsaisi = document.getElementById("prixsaisi").value;

    if (compteurEssai == 0){
        message.innerHTML = '<div class="alert alert-danger" role="alert">Bravo vous avez perdu !! il fallait trouver :'+prixAlea+' </div>';
        btn.disabled = true;
        btnRe.style.visibility = "visible";
    }else{
       
       if(prixsaisi > prixAlea){
            message.innerHTML = "<div class='alert alert-warning' role='alert'>Trop grand c'est moins</div>";
            compteurEssai--;
            nbrt.innerHTML= "il reste "+compteurEssai+" essai";
        }
        if(prixsaisi < prixAlea){
            message.innerHTML = "<div class='alert alert-warning' role='alert'>Trop petit c'est plus</div>";
            compteurEssai--;
            nbrt.innerHTML= "il reste "+compteurEssai+" essai";
        }
        if (prixsaisi == prixAlea){
            message.innerHTML = '<div class="alert alert-success" role="alert">Bravo vous avez trouvé</div>';
            btn.disabled = true;
            btnRe.style.visibility = "visible";
        }
    }
}

btn.addEventListener("click", function (e) {
    VerifPrix();
});