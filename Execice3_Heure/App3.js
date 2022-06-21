let btn = document.getElementById("button");
let message = document.getElementById("message");

function Affheure(){
    let heure = document.getElementById("heure").value;
    let min = document.getElementById("minute").value;
    let sec = document.getElementById("seconde").value;

    sec++;
    if(sec==60){
        sec=00;
        min++;
    }
    if(min==60){
        min=00;
        heure++;
    }
    if(heure==24){
        heure=00;
    }
    message.innerHTML = '<div class="alert alert-success" role="alert">'+heure+'h'+min+'min'+sec+'sec</div>';
}

function Verif(){
    let heure = document.getElementById("heure").value;
    let min = document.getElementById("minute").value;
    let sec = document.getElementById("seconde").value;

    if(heure>23 || min>59 || sec>59){
        
        message.innerHTML = '<div class="alert alert-danger" role="alert">erreur mauvaise valeur :</div>';
        return false;
    }else{
        return true;
    }
}

btn.addEventListener("click", function (e) {
    var verifier = Verif();
    if(verifier == true){
        Affheure();
    }
    e.stopPropagation
});