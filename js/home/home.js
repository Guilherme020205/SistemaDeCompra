
//login
function MostrarSenha() {
    var senha = document.getElementById("senha");
    if (senha.type == "password") {
        senha.type = "text";
    } else {
        senha.type = "password";
    }
}
const form = document.querySelector('form');

form.onsubmit = (e) => {

    location.href = "pagProdutos.html";

    return false;
};
//login
