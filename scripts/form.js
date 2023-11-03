const password = document.getElementById("password");
const repass = document.getElementById("re-password");

repass.addEventListener("focusout", (e) => {
    if (password.value != repass.value) {
        repass.style.backgroundColor = "red";
        focus();
    }
    else {
        repass.style.backgroundColor = "#fff";
    }
})