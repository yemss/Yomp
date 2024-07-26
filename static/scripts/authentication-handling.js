const parentUl = document.querySelector("ul");
const nextBtn = document.querySelector("#next-btn");
const lastChild = document.querySelector(".last-li");
const toggleSwitch = document.querySelector(".toggle-switch");
const authSpan = document.querySelector("#auth-span");
const inputUsername = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const divErrorMessage = document.querySelector("#error-message");
const labelPassword = document.createElement("label");
const labelPassword2 = document.createElement("label");

const inputPassword = document.createElement("input");
const inputPassword2 = document.createElement("input");

const labelCode = document.createElement("label");
const inputCode = document.createElement("input");

var spanErrorMessage = document.createElement("span");
const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
toggleSwitch.id = "red-toggle-btn";

labelPassword.setAttribute("for", "password");
labelPassword.textContent = "Password:";

labelCode.setAttribute("for", "vertification-code");
labelCode.textContent = "Enter the code sent to your address:";

inputCode.type = "tel";
inputCode.id = "vertification-code";
inputCode.name = "v-code";
inputCode.required = true;
inputPassword.type = "password";
inputPassword.id = "password";
inputPassword.name = "user_password";
inputPassword.minLength = "8";
inputPassword.maxLength = "20";
inputPassword.required = true;

labelPassword2.setAttribute("for", "password-again");
labelPassword2.textContent = "Re-enter password:";

inputPassword2.type = "password";
inputPassword2.id = "password-again2";
inputPassword2.name = "user_password_again";
inputPassword2.minLength = "8";
inputPassword2.maxLength = "20";
inputPassword2.required = true;



function applyStyles(element, styles) {
  for (const property in styles) {
    element.style[property] = styles[property];
  }
}

function validateAuth(func, event) {
  try {
    func();
    applyStyles(spanErrorMessage, { visibility: "hidden" });
  } catch (error) {
    spanErrorMessage.textContent = error.message;
    applyStyles(spanErrorMessage, { visibility: "visible" });
    event.preventDefault();
    event.stopPropagation();
  }
}

function nameAndEmailValidation() {
  if (inputUsername.value == "" || inputEmail.value == "") {
    if ((inputUsername.value == "" && inputEmail.value == "")) {
      throw new Error("Error: Incomplete format");
    } else if (inputUsername.value == "") {
      throw new Error("Error: Username field required");
    } else {
      throw new Error("Error: Email field required");
    }
  }

}
function emailInputValidation() {
    if (!emailValidation.test(String(inputEmail.value).toLowerCase())) {
      throw new Error("Error: Incorrect email format");
    }
}

function firstPageValidation() {
    nameAndEmailValidation();
    emailInputValidation();
}

function passwordInputValidation() {
  if (inputPassword.value.length < 8) {
    throw new Error("Error: Password needs at least 8 characters");
  }
}

function passwordValidation() {
  if (inputPassword.value == "" && inputPassword2.value == "") {
    throw new Error("Error: Incomplete format");
  } else if (inputPassword.value !== inputPassword2.value) {
    throw new Error("Error: Passwords do not match");
  } else if (inputPassword.value == "") {
    throw new Error("Error: Password field required");
  } else if (inputPassword2.value == "") {
    throw new Error("Error: Please re-enter password");
  }
}

function secondPageValidation() {
  passwordValidation();
  passwordInputValidation();
}

function codeVertification() {
  let vertificationCode = "abc";
   if (inputCode.value == "") {
    throw new Error("Error: Please enter the vertification code");
  }
   if (inputCode.value != vertificationCode) {
    throw new Error("Error: Incorrect vertification code");
  }
}

applyStyles(spanErrorMessage, { color: "#e56050", "font-size": "25px", display: "block", "padding-top": "10px" });
divErrorMessage.appendChild(spanErrorMessage);

inputEmail.addEventListener("input", (event) => {
  event.target.setCustomValidity("");
  validateAuth(emailInputValidation, event);
});

inputPassword.addEventListener("input", (event) => {
  event.target.setCustomValidity("");
  validateAuth(passwordInputValidation, event);
});
/*
inputEmail.addEventListener("blur", () => {
  if (inputEmail.value == "" || !emailValidation.test(String(inputEmail.value).toLowerCase())) {
    applyStyles(spanErrorMessage, { "visibility": "visible" });
  }
});
 
inputPassword.addEventListener("blur", () => {
  if (inputPassword.value == "") {
    applyStyles(spanErrorMessage, { "visibility": "visible" });
  }
});
 
inputPassword2.addEventListener("blur", () => {
  if (inputPassword.value !== inputPassword2.value || inputPassword2.value == "") {
    applyStyles(spanErrorMessage, { "visibility": "visible" });
  }
});
*/
toggleSwitch.addEventListener("click", () => {
  if (toggleSwitch.id === "red-toggle-btn") {
    authSpan.innerText = "Login";
    applyStyles(authSpan, { color: "#6abe30" });
    toggleSwitch.id = "green-toggle-btn";
    toggleSwitch.src = "../static/images/green-toggle.png";

  } else {
    authSpan.innerText = "Sign up";
    applyStyles(authSpan, { color: "#e56050" });
    toggleSwitch.id = "red-toggle-btn";
    toggleSwitch.src = "../static/images/red-toggle.png";
  }
});

nextBtn.addEventListener("click", (event) => {
  /* Fix error overriding or error not showing */
  // validateAuth(emailInputValidation, event);
  //validateAuth(nameAndEmailValidation, event);
  validateAuth(firstPageValidation, event);
  if (inputUsername.value != "" && inputEmail.value != "" && spanErrorMessage.style.visibility === "hidden") {
    parentUl.replaceChildren();

    //let containerLi, containerLi2, containerLi3, containerLi4, containerLi5 = document.createElement("li");
    //let div, div2, div3, div4, div5 = document.createElement("div");
    let containerLi = document.createElement("li");
    let containerLi2 = document.createElement("li");
    let containerLi3 = document.createElement("li");
    let containerLi4 = document.createElement("li");
    let containerLi5 = document.createElement("li");

    let div = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    let div4 = document.createElement("div");
    let div5 = document.createElement("div");

    let containerLiList = [containerLi, containerLi2, containerLi3, containerLi4, containerLi5];
    let divList = [div, div2, div3, div4, div5];

    div.appendChild(labelPassword);
    div2.appendChild(inputPassword);
    div5.appendChild(spanErrorMessage);
    if (authSpan.innerText === "Sign up") {
      div3.appendChild(labelPassword2);
      div4.appendChild(inputPassword2);
    }

    for (let i = 0; i < containerLiList.length; i += 1) {
      containerLiList[i].classList.add("field");
      containerLiList[i].appendChild(divList[i]);
      parentUl.appendChild(containerLiList[i]);
    }
    parentUl.appendChild(nextBtn);

    //validateAuth(passwordInputValidation, event);
    //validateAuth(passwordValidation, event);
    validateAuth(secondPageValidation, event);

    if (authSpan.innerText === "Sign up" && inputPassword.value != "" && inputPassword2.value != "" && spanErrorMessage.style.visibility === "hidden") {

      parentUl.replaceChildren();

      //let containerLi, containerLi2, containerLi3 = document.createElement("li");

      //let div, div2, div3 = document.createElement("div");
      let containerLi = document.createElement("li");
      let containerLi2 = document.createElement("li");
      let containerLi3 = document.createElement("li");

      let div = document.createElement("div");
      let div2 = document.createElement("div");
      let div3 = document.createElement("div");

      containerLi.classList.add("field");
      containerLi2.classList.add("field");

      div.appendChild(labelCode);
      div2.appendChild(inputCode);
      div3.appendChild(spanErrorMessage);

      applyStyles(div, { "padding-top": "20%" });
      applyStyles(labelCode, { "display": "block" });

      containerLi.appendChild(div);
      containerLi2.appendChild(div2);
      containerLi3.append(div3);

      parentUl.appendChild(containerLi);
      parentUl.appendChild(containerLi2);
      parentUl.appendChild(containerLi3);
      parentUl.appendChild(nextBtn);

        validateAuth(codeVertification, event);
    }
  }
});


