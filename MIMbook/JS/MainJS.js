const closeBtn = document.querySelector(".closebtn");
const message = document.querySelectorAll(".inputs small");
const login_btn = document.querySelector("#loginBtn");
const login = document.querySelector(".container");
const signUp = document.querySelector("#signUp");
const close_login = document.querySelector(".close_login");
const close_sign = document.querySelector(".close_sign");
//getting all input class

//getting login and sign up btn

const show_login = document.querySelector("#show-login");
const show_signup = document.querySelector("#show-signup");

// inputs selection
const username = document.querySelector(".username");
const password = document.querySelector(".password");
// open login
show_login.addEventListener("click", () => {
  signUp.classList.remove("open");
  login.classList.toggle("active");
});

// open sign up
show_signup.addEventListener("click", () => {
  login.classList.remove("active");
  signUp.classList.toggle("open");
});

//event listener for close btn close login
close_login.addEventListener("click", () => {
  login.classList.toggle("active");
});
// close signup
close_sign.addEventListener("click", () => {
  signUp.classList.toggle("open");
});

//validation section

//event listener for submit btn
login_btn.addEventListener("click", (e) => {
  e.preventDefault();
  //call check_input function when button cliks
  check_input();
});

function check_input() {
  usernameCheck(); //check username  is filled
  checkPassword(); //check password is filled and valid
}

function usernameCheck() {
  // finding the values of input fields
  const nameValue = username.value;
  if (nameValue === "") {
    username.classList.add("wrong");
    message[0].textContent = "username can`t be empty";
    message[0].classList.add("wrong");
  } else {
    username.classList.remove("wrong");
    message[0].classList.remove("wrong");
    username.classList.add("correct");
  }
}
//check if the passwordis valid and filled
function checkPassword() {
  const passwordValue = password.value;
  let clean = passwordValue.trim();
  let passWordLength = clean.length;
  if (clean == "") {
    password.classList.add("wrong");
    message[1].textContent = "password can`t be empty";
    message[1].classList.add("wrong");
  } else {
    password.classList.remove("wrong");
    message[1].classList.remove("wrong");
    password.classList.add("correct");
  }
}

// signUp validation section

const signUp_inputs = document.querySelectorAll("#signUp input");
const signUpBtn = document.querySelector("#signUpBtn");

signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  checkSignUpInput();
});

// function check_signUp() {}

function checkSignUpInput() {
  signUp_inputs.forEach((input) => {
    console.log(input);
  });
}

// catagories

let allBtns = document.querySelectorAll(".catagories button");
allBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let SubjectName = e.target.innerText;
    alert("Sorry " + SubjectName + " didn`t Exist Now!!");
  });
});

const nav = document.querySelector(".nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scroll", window.scrollY > 0);
});
