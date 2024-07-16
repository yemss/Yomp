const parentUl = document.querySelector("ul");
const nextBtn = document.querySelector("#next-btn");
const lastChild = document.querySelector(".last-li");
const toggleSwitch = document.querySelector(".toggle-switch");
const authSpan = document.querySelector("#auth-span");
const inputUsername = document.querySelector("#name");

var labelPassword = document.createElement("label");
var labelPassword2 = document.createElement("label");

var inputPassword = document.createElement("input");
var inputPassword2 = document.createElement("input");
var inputEmail = document.getElementById("email");
var message = document.getElementById("message");

labelPassword.setAttribute("for", "password");
labelPassword.innerHTML = "Password:";

inputPassword.type = "password";
inputPassword.id = "password";
inputPassword.name = "user_password";
inputPassword.minLength = "8";
inputPassword.maxLength = "20";
inputPassword.required = true;

labelPassword2.setAttribute("for", "password-again");
labelPassword2.innerHTML = "Re-enter password:";

inputPassword2.type = "password";
inputPassword2.id = "password-again";
inputPassword2.name = "user_password";
inputPassword2.minLength = "8";
inputPassword2.maxLength = "20";
inputPassword2.required = true;

//whiteError.textContent = "Error: ";
//applyStyles(whiteError, {color: "#dbdbdb", "font-size": "25px"});

const spanErrorMessage = document.createElement("span");

const applyStyles = (element, styles) => {
  for (const property in styles) {
    element.style[property] = styles[property];
  }
};

applyStyles(spanErrorMessage, { color: "#e56050", "font-size": "25px", visibility: "hidden", display: "block", "padding-top": "10px" });
message.appendChild(spanErrorMessage);

/*inputUsername.addEventListener("input", (event) => {
    event.target.setCustomValidity("");
    if (event.target.validity.valueMissing) {
        spanErrorMessage.textContent = "Error: Username field required";
        applyStyles(spanErrorMessage, { "visibility": "visible" });
    } else {
        spanErrorMessage.textContent = "";
        applyStyles(spanErrorMessage, { "visibility": "hidden" });
    }
});*/

inputEmail.addEventListener("input", (event) => {
  event.target.setCustomValidity("");
  if (event.target.validity.typeMismatch) {
    spanErrorMessage.textContent = "Error: Incorrect email format";
    applyStyles(spanErrorMessage, { "visibility": "visible" });
  } else {
    spanErrorMessage.textContent = "";
    applyStyles(spanErrorMessage, { "visibility": "hidden" });
  }
});

inputPassword.addEventListener("input", (event) => {
  event.target.setCustomValidity("");
  /*if (event.target.validity.valueMissing) {
      spanErrorMessage.textContent = "Error: Password field required";
      applyStyles(spanErrorMessage, { "visibility": "visible" });
  }*/
  if (inputPassword.value.length < 8 && inputPassword.value.length != 0) {
    spanErrorMessage.textContent = "Error: Password needs at least 8 characters";
    applyStyles(spanErrorMessage, { "visibility": "visible" });
  } else {
    spanErrorMessage.textContent = "";
    applyStyles(spanErrorMessage, { "visibility": "hidden" });
  }
});

inputPassword2.addEventListener("input", (event) => {
  event.target.setCustomValidity("");
  if (inputPassword.value !== inputPassword2.value) {
    spanErrorMessage.textContent = "Error: Password does not match the first one";
    applyStyles(spanErrorMessage, { "visibility": "visible" });
  } else {
    spanErrorMessage.textContent = "";
    applyStyles(spanErrorMessage, { "visibility": "hidden" });
  }
});

inputUsername.addEventListener("blur", () => {
  applyStyles(spanErrorMessage, { "visibility": "visible" });
});

inputEmail.addEventListener("blur", () => {
  applyStyles(spanErrorMessage, { "visibility": "visible" });
});

inputPassword.addEventListener("blur", () => {
  applyStyles(spanErrorMessage, { "visibility": "visible" });
});

inputPassword2.addEventListener("blur", () => {
  applyStyles(spanErrorMessage, { "visibility": "visible" });
});


toggleSwitch.id = "red-toggle-btn";
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

nextBtn.addEventListener("click", () => {

  if (inputUsername.value == "" || inputEmail.value == "") {
    if ((inputUsername.value == "" && inputEmail.value == "")) {
      spanErrorMessage.textContent = "Error: Incomplete format";
      applyStyles(spanErrorMessage, { "visibility": "visible" });
    } else if (inputUsername.value == "") {
      spanErrorMessage.textContent = "Error: Username field required";
      applyStyles(spanErrorMessage, { "visibility": "visible" });
    } else if (inputEmail.value == "") {
      spanErrorMessage.textContent = "Error: Email field required";
      applyStyles(spanErrorMessage, { "visibility": "visible" });
    }
  } else {
    spanErrorMessage.textContent = "";
    applyStyles(spanErrorMessage, { "visibility": "hidden" });

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

    const containerLiList = [containerLi, containerLi2, containerLi3, containerLi4, containerLi5];
    const divList = [div, div2, div3, div4, div5];

    div.appendChild(labelPassword);
    div2.appendChild(inputPassword);
    div5.appendChild(spanErrorMessage);
    parentUl.replaceChildren(lastChild);
    lastChild.remove();

    if (authSpan.innerText === "Sign up") {
      div3.appendChild(labelPassword2);
      div4.appendChild(inputPassword2);
    }

    for (let i = 0; i < containerLiList.length; i += 1) {
      containerLiList[i].appendChild(divList[i]);
      parentUl.appendChild(containerLiList[i]);
    }

    parentUl.appendChild(nextBtn);

    if ((inputPassword.value == "" || inputPassword2.value == "")) {
      if ((inputPassword.value == "" && inputPassword2.value == "")) {
        spanErrorMessage.textContent = "Error: Incomplete format";
        applyStyles(spanErrorMessage, { "visibility": "visible" });
      } else if (inputPassword.value == "") {
        spanErrorMessage.textContent = "Error: Password field required";
        applyStyles(spanErrorMessage, { "visibility": "visible" });
      } else {
        spanErrorMessage.textContent = "Error: Please re-enter password";
        applyStyles(spanErrorMessage, { "visibility": "visible" });
      }
    } // else {...} for code vertification
  }
});


