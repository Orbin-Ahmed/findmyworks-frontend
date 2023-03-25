const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#signin_password");

const togglePassword1 = document.querySelector("#togglePassword_1");
const password1 = document.querySelector("#signup_password_1");

const togglePassword2 = document.querySelector("#togglePassword_2");
const password2 = document.querySelector("#signup_password_2");


togglePassword.addEventListener("click", function () {
    // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    // toggle the icon
    this.classList.toggle("bi-eye");
});

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

function animationFunction() {
    var sign_in_view = document.getElementById("sign_in").style.display;
    var sign_up_view = document.getElementById("sign_up").style.display;

    if (sign_in_view == "none") {
        document.getElementById("sign_in").style.display = "block";
        document.getElementById("sign_up").style.display = "none";

        document.getElementById("sign_in_image").style.display = "block";
        document.getElementById("sign_up_image").style.display = "none";

    }
    else {
        document.getElementById("sign_in").style.display = "none";
        document.getElementById("sign_up").style.display = "block";

        document.getElementById("sign_in_image").style.display = "none";
        document.getElementById("sign_up_image").style.display = "block";

    }
}