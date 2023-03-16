var loginInputId = document.getElementById("idInput");
var loginInputPw = document.getElementById("pwInput");
var loginBtnElement = document.getElementById("loginBtn");
var emailRegEx = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
var passwordRegEx = /^([-_\.]?[0-9a-zA-Z]){1,8}$/;
document.addEventListener("keydown", function () {
    var loginInputIDField = loginInputId.value;
    var loginInputPWField = loginInputPw.value;
    if (loginInputIDField.match(emailRegEx) &&
        loginInputPWField.match(passwordRegEx)) {
        loginBtnElement.classList.add("active");
        loginBtnElement.disabled = false;
    }
    else {
        loginBtnElement.classList.remove("active");
        loginBtnElement.disabled = true;
    }
});
loginBtnElement.addEventListener("click", function (e) {
    e.preventDefault();
    var loginInputIDField = loginInputId.value;
    var loginInputPWField = loginInputPw.value;
    if (loginInputIDField.match(emailRegEx) &&
        loginInputPWField.match(passwordRegEx)) {
        alert("로그인 성공!");
        loginToMainPage();
    }
});
var loginToMainPage = function () {
    window.location.href = "/westagram/main.html";
};
