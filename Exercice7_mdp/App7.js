let message = document.getElementById("message");

function Verifmdp(){
    let force = 0;
    let mdp = document.getElementById("mdp").value;

    /*contains lowercase characters*/
    if(mdp.match(/[a-z]+/)) {
        force++;
    }

    /*contains digits*/
    if(mdp.match(/[0-9]+/)) {
        force++;
    }

    /*contains uppercase characters*/
    if(mdp.match(/[A-Z]+/)) {
        force++;
    }

    /*contains characters spé*/
    if(mdp.match(/[^a-zA-Z\d]/g)) {
        force++;
    }

    /*length 5 characters or more*/
    if(mdp.length < 8) {
        force = force-1;
    }

    switch (force) {
        case 0:
            message.innerHTML = '<div class="alert alert-dark" role="alert">Dangereux !!</div>';
        break;
        case 1:
            message.innerHTML = '<div class="alert alert-danger" role="alert">Dangereux !!</div>';
        break;
        case 2:
            message.innerHTML = '<div class="alert alert-warning" role="alert">Moyen !!</div>';
        break;
        case 3:
            message.innerHTML = '<div class="alert alert-success" role="alert">Sécurisé !</div>';
        break;
        case 4:
            message.innerHTML = '<div class="alert alert-primary" role="alert">Très sécurisé !</div>';
        break;
        default:
            message.innerHTML = '';
    }

}

document.getElementById("mdp").addEventListener('keyup',Verifmdp);