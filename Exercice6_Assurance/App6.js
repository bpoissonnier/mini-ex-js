let btn = document.getElementById("button");
let message = document.getElementById("message");
let compteurP;


function Affresult(){
    let age = document.getElementById("age").value;
    let annee = document.getElementById("an").value;
    let fidel = document.getElementById("fidelite").value;
    let accident = document.getElementById("accident").value;

    if(accident>=3){
        message.innerHTML = '<div class="alert alert-danger" role="alert">Refusé</div>';
    }else{

        compteurP = 0;
        if(age>25){
            compteurP++;
        }
        if(annee>2){
            compteurP++;
        }
        if(fidel>2){
            compteurP++;
        }

        switch (accident) {
            case "1":
                compteurP=compteurP-1;
            break;
            case "2":
                compteurP=compteurP-2;
            break;
        }

        switch (compteurP) {
            case -2:
                message.innerHTML = '<div class="alert alert-dark" role="alert">Refusé</div>';
            break;
            case -1:
                message.innerHTML = '<div class="alert alert-dark" role="alert">Refusé</div>';
            break;
            case 0:
                message.innerHTML = '<div class="alert alert-danger" role="alert">Rouge</div>';
            break;
            case 1:
                message.innerHTML = '<div class="alert alert-warning" role="alert">Orange</div>';
            break;
            case 2:
                message.innerHTML = '<div class="alert alert-success" role="alert">Vert</div>';
            break;
            case 3:
                message.innerHTML = '<div class="alert alert-primary" role="alert">Bleu</div>';
            break;
            default:
        }
    }


}

btn.addEventListener("click", function (e) {
    Affresult();
    e.stopPropagation
});