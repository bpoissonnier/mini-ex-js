let btn = document.getElementById("button");
let message = document.getElementById("message");


function validate() {
    var re = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
    var email = document.getElementById("mail").value;

    if (re.test(email)) {
        message.innerHTML = '<div class="alert alert-succes" role="alert">Email valide</div>';
    } else {
        message.innerHTML = '<div class="alert alert-danger" role="alert">Email non valide</div>';
    }
}

btn.addEventListener("click", function (e) {
    validate();
    e.stopPropagation
});