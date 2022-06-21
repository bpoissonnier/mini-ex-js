
let bouton = document.getElementById("button");
let message = document.getElementById("message");

function Verif(){
    //recup les valeurs
    let copiesaisi = document.getElementById("copie").value;

    if (copiesaisi <= 10 ){
        let p = copiesaisi*0.1;
        message.innerHTML = '<div class="alert alert-danger" role="alert">Vous devez payer : '+p.toFixed(2)+'</div>';
    }else if(copiesaisi <= 30){
        let p = 10 * 0.1 + (copiesaisi-10)*0.09;
        message.innerHTML = '<div class="alert alert-danger" role="alert">Vous devez payer : '+p.toFixed(2)+'</div>';
    }else{
        let p = 10 * 0.1 + 20 * 0.09 + (copiesaisi-30) * 0.08;
        message.innerHTML = '<div class="alert alert-danger" role="alert">Vous devez payer : '+p.toFixed(2)+'</div>';
    }
}

bouton.addEventListener("click", function (e) {
    Verif();
    e.stopPropagation
});