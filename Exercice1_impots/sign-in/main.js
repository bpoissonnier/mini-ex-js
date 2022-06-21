
let bouton = document.getElementById("button");
let message = document.getElementById("message");

function VerifImpot(){
    //recup les valeurs
    let agesaisi = document.getElementById("Age").value;
    let genresaisi = document.getElementById("Genre").value;

    if (genresaisi == "H" && agesaisi > 20 ){
        message.innerHTML = '<div class="alert alert-danger" role="alert">Vous etes imposable</div>';
    }else if(genresaisi== "F" && agesaisi>=18 && agesaisi<=35){
        message.innerHTML = '<div class="alert alert-danger" role="alert">Vous etes imposable</div>';
    }else{
        message.innerHTML = '<div class="alert alert-success" role="alert">Vous etes non imposable</div>';
    }
}

bouton.addEventListener("click", function (e) {
    VerifImpot();
    e.stopPropagation
});