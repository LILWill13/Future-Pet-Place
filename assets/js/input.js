// create needed constants
const rememberMe = document.querySelector(".remember");
const forgetMe = document.querySelector(".forget");
const form = document.querySelector("form");
const getName = document.querySelector("#entername");
const submitBtn = document.querySelector("#submitname");
const forgetBtn = document.querySelector("#forgetname");

const h2 = document.querySelector("h2");
const greeting = document.querySelector(".personal-greeting");

form.addEventListener("submit", function (e) {
  e.preventDefault();
});

submitBtn.addEventListener("click", function () {
  localStorage.setItem("name", getName.value);

  nameDisplayCheck();
});

forgetBtn.addEventListener("click", function () {
  localStorage.removeItem("name");

  nameDisplayCheck();
});

function nameDisplayCheck() {
  if (localStorage.getItem("name")) {
    let name = localStorage.getItem("name");
    h2.textContent = `Welcome ${name}!`;
    greeting.textContent = `Welcome to our website, ${name}! We hope you find your bestfriend!`;

    forgetMe.style.display = "block";
    rememberMe.style.display = "none";
  } else {
    h2.textContent = `Welcome to our website `;
    greeting.textContent = `Welcome to our website. We hope you enjoy your visit.`;

    forgetMe.style.display = "none";
    rememberMe.style.display = "block";
  }
}

document.body.onload = nameDisplayCheck;