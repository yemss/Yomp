const parentUl = document.querySelector("ul");
const nextBtn = document.querySelector("#next-btn");
const lastChild = document.querySelector(".last-li");
const toggleBtn = document.querySelector(".toggle-btn");
const authSpan  = document.querySelector("span");

var labelPassword = document.createElement("label");
var labelPassword2 = document.createElement("label");

var inputPassword = document.createElement("input");
var inputPassword2 = document.createElement("input");

function applyStyles(element, styles) {
    for (const property in styles) {
      element.style[property] = styles[property];
    }
}
    labelPassword.for = "password";
    labelPassword.innerHTML = "Password:";

    inputPassword.type = "password";
    inputPassword.id = "password";
    inputPassword.name = "user_password";
    inputPassword.minLength = "8";
    inputPassword.maxLength = "20";
    inputPassword.required = true;

    labelPassword2.for = "password";
    labelPassword2.innerHTML = "Enter password again:";

    inputPassword2.type = "password";
    inputPassword2.id = "password-again";
    inputPassword2.name = "user_password";
    inputPassword2.minLength = "8";
    inputPassword2.maxLength = "20";
    inputPassword2.required = true;

    toggleBtn.id = "red-toggle-btn";

    toggleBtn.addEventListener("click", () => {
        if (toggleBtn.id === "red-toggle-btn") {
            authSpan.innerText = "Login";
            applyStyles(authSpan, {color: "#6abe30"});
            toggleBtn.id = "green-toggle-btn";
            toggleBtn.src = "../static/images/green-toggle.png";

        } else {
            authSpan.innerText = "Sign up";
            applyStyles(authSpan, {color: "#e56050"});
            toggleBtn.id = "red-toggle-btn";
            toggleBtn.src = "../static/images/red-toggle.png";
        }
    });

nextBtn.addEventListener("click", () => {
    let containerLi = document.createElement("li");
    let containerLi2 = document.createElement("li");
    let containerLi3 = document.createElement("li");
    let containerLi4 = document.createElement("li");
    const containerLiList = [containerLi, containerLi2, containerLi3, containerLi4]; 

    containerLi.appendChild(labelPassword);
    containerLi2.appendChild(inputPassword);
    parentUl.replaceChildren(lastChild);
    lastChild.remove();
    
    if (authSpan.innerText === "Sign up") {
        containerLi3.appendChild(labelPassword2);
        containerLi4.appendChild(inputPassword2);
    }

    for (let i = 0; i < containerLiList.length; i+=1) {
    containerLiList[i].className = "field";
    parentUl.appendChild(containerLiList[i]);
}
parentUl.appendChild(nextBtn);
});


