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
const metaRedirect = document.createElement("meta");

const spanErrorMessage = document.createElement("span");
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
metaRedirect.httpEquiv = "refresh";
metaRedirect.content = "2; http://localhost:8080/";

function applyStyles(element, styles) {
  for (const property in styles) {
    element.style[property] = styles[property];
  }
}

function validateAuth(...funcs) {
  try {
    funcs.forEach(func => {
      func();
    })
    applyStyles(spanErrorMessage, { display: "none" });
  } catch (error) {
    spanErrorMessage.textContent = error.message;
    applyStyles(spanErrorMessage, { display: "block" });
    return false;
  }
  return true;
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

function passwordInputValidation() {
  if (inputPassword.value.length < 8 && inputPassword.value !== "") {
    throw new Error("Error: Password needs at least 8 characters");
  }
}

function passwordValidation() {
  if (authSpan.textContent === "Sign up") {
  if (inputPassword.value === "" && inputPassword2.value === "") {
    throw new Error("Error: Incomplete format");
  } else if (inputPassword.value !== inputPassword2.value) {
    throw new Error("Error: Passwords do not match");
  } else if (inputPassword.value === "") {
    throw new Error("Error: Password field required");
  } else if (inputPassword2.value === "") {
    throw new Error("Error: Please re-enter password");
  }
} else {
  if (inputPassword.value === "") {
    throw new Error("Error: Password field required");
  }
}
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

applyStyles(spanErrorMessage, { color: "#e56050", "font-size": "25px", "padding-top": "10px" });
divErrorMessage.appendChild(spanErrorMessage);

inputEmail.addEventListener("input", (event) => {
  event.target.setCustomValidity("");
  validateAuth(emailInputValidation);
});

inputPassword.addEventListener("input", (event) => {
  event.target.setCustomValidity("");
  validateAuth(passwordInputValidation);
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

let currentPage = 1;
nextBtn.addEventListener("click", () => {
  let containerLiList = [];
  let divList = [];
  for (let i = 0; i < 5; i++) {
    containerLiList[i] = document.createElement("li");
    divList[i] = document.createElement("div");
    containerLiList[i].classList.add("field");
  }
  switch (currentPage) {
    case 1:
      if (!validateAuth(nameAndEmailValidation, emailInputValidation)) {
        return; // Stop execution if validation fails
      }
      // First UI change
      parentUl.replaceChildren();

      divList[0].appendChild(labelPassword);
      divList[1].appendChild(inputPassword);
      if (authSpan.innerText === "Sign up") {
        divList[2].appendChild(labelPassword2);
        divList[3].appendChild(inputPassword2);
      }
      divList[4].appendChild(spanErrorMessage);

      for (let i = 0; i < containerLiList.length; i++) {
        containerLiList[i].appendChild(divList[i]);
        parentUl.appendChild(containerLiList[i]);
      }
      parentUl.appendChild(nextBtn);
      currentPage++;
      break;

    case 2:
      if (!validateAuth(passwordValidation, passwordInputValidation)) {
        return; // Stop execution if validation fails
      }
      // Second UI change
      parentUl.replaceChildren();

      divList[0].appendChild(labelCode);
      divList[1].appendChild(inputCode);
      divList[2].appendChild(spanErrorMessage);

      applyStyles(divList[0], { "padding-top": "20%" });
      applyStyles(labelCode, { "display": "block" });

      for (let i = 0; i < 4; i++) {
        containerLiList[i].appendChild(divList[i]);
        parentUl.appendChild(containerLiList[i]);
      }
      parentUl.appendChild(nextBtn);
      currentPage++;
      break;

    case 3:
      if (!validateAuth(codeVertification)) {
        return; // Stop execution if validation fails
      }
      // Final UI change
      parentUl.replaceChildren();
      let head = document.getElementsByTagName("head")[0];
      let redirectMessage = document.createElement("p");
      let loadingDots = document.createElement("div");
      loadingDots.classList.add("loading-dots");
      redirectMessage.textContent = "Redirecting";

      applyStyles(redirectMessage, {"font-size": "35px", "padding-top": "calc((525px - 47px - 67px)/2)", "text-align": "center"});
      applyStyles(loadingDots, {"font-size": "50px", "padding-left": "calc((432px - 60px)/2)", "box-sizing": "border-box"});


      parentUl.appendChild(redirectMessage);
      parentUl.appendChild(loadingDots);

      head.appendChild(metaRedirect);
      break;

    default:
      break;
  }
});

/* Old code

nextBtn.addEventListener("click", (event) => {

  validateAuth(firstPageValidation, event);
  if (inputUsername.value != "" && inputEmail.value != "" && spanErrorMessage.style.visibility === "hidden") {
    parentUl.replaceChildren();

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

    validateAuth(secondPageValidation, event);

    if (authSpan.innerText === "Sign up" && inputPassword.value != "" && inputPassword2.value != "" && spanErrorMessage.style.visibility === "hidden") {

      parentUl.replaceChildren();

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
});*/


