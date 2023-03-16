let loginInputId = <HTMLInputElement>document.getElementById("idInput");
let loginInputPw = <HTMLInputElement>document.getElementById("pwInput");
let loginBtnElement = <HTMLButtonElement>document.getElementById("loginBtn");

const emailRegEx =
  /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
const passwordRegEx = /^([-_\.]?[0-9a-zA-Z]){1,8}$/;

document.addEventListener("keydown", () => {
  let loginInputIDField: string = loginInputId.value;
  let loginInputPWField: string = loginInputPw.value;

  if (
    loginInputIDField.match(emailRegEx) &&
    loginInputPWField.match(passwordRegEx)
  ) {
    loginBtnElement.classList.add("active");
    loginBtnElement.disabled = false;
  } else {
    loginBtnElement.classList.remove("active");
    loginBtnElement.disabled = true;
  }
});

loginBtnElement.addEventListener("click", function (e) {
  e.preventDefault();

  let loginInputIDField: string = loginInputId.value;
  let loginInputPWField: string = loginInputPw.value;
  if (
    loginInputIDField.match(emailRegEx) &&
    loginInputPWField.match(passwordRegEx)
  ) {
    alert("로그인 성공!");
    loginToMainPage();
  }
});

const loginToMainPage = () => {
  window.location.href = "/westagram/main.html";
};
