const togglePassword1 = document.querySelector("#togglePassword_1");
const password1 = document.querySelector("#signup_password_1");

const togglePassword2 = document.querySelector("#togglePassword_2");
const password2 = document.querySelector("#signup_password_2");
togglePassword_1.addEventListener("click", function () {
    // toggle the type attribute
    const type = password1.getAttribute("type") === "password" ? "text" : "password";
    password1.setAttribute("type", type);

    // toggle the icon
    this.classList.toggle("bi-eye");
});

togglePassword_2.addEventListener("click", function () {
    // toggle the type attribute
    const type = password2.getAttribute("type") === "password" ? "text" : "password";
    password2.setAttribute("type", type);

    // toggle the icon
    this.classList.toggle("bi-eye");
});

function changeRecoverSection(id){
    if(id == "recover_pass_sec1"){
        document.getElementById(id).style.display = 'none';
        document.getElementById("recover_pass_sec2").style.display = 'block';
    }
    else {
        document.getElementById(id).style.display = 'none';
        document.getElementById("recover_pass_sec3").style.display = 'block';
    }
}