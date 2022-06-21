let btn = document.getElementById("button");
let message = document.getElementById("message");
let b10 = document.getElementById("b10");
let b5 = document.getElementById("b5");
let p1 = document.getElementById("p1");
let aRendre;


function Affrendu(){
    let montant = document.getElementById("montant").value;
    let cdonne = document.getElementById("Cdonne").value;

    aRendre = cdonne - montant;
    
    if(aRendre==0){
        message.innerHTML = '<div class="alert alert-success" role="alert"> pas de monnaie a rendre </div>'; 
    }
    if (aRendre>0){
        message.innerHTML = '<div class="alert alert-success" role="alert"> monnaie a rendre :'+aRendre+'</div>';
    }
    if(aRendre<0){
        message.innerHTML = '<div class="alert alert-danger" role="alert"> il manque :'+aRendre+'</div>';
    }

    let nbr10 = 0;
    while(aRendre>=10){
        nbr10++;
        aRendre = aRendre-10;
    }
    let nbr5 = 0;
    while(aRendre>=5){
        nbr5++;
        aRendre = aRendre-5;
    }
    b10.innerHTML = '<div class="alert alert-danger" role="alert"> nombre de billet de 10€ :'+nbr10+'</div>';
    b5.innerHTML = '<div class="alert alert-danger" role="alert"> nombre de billet de 5€ :'+nbr5+'</div>';
    p1.innerHTML = '<div class="alert alert-danger" role="alert"> nombre de piece de 1€ :'+aRendre+'</div>';
}


btn.addEventListener("click", function (e) {
    Affrendu();
    e.stopPropagation
});