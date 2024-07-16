const wrieslyBtn = document.querySelector("#wriesly-btn");
const skizzyBtn = document.querySelector("#skizzy-btn");
const daemonBtn = document.querySelector("#daemon-btn");

const parentDiv = document.querySelector(".character-description");
const parent2Div = document.querySelector(".character-img");


var childP = document.createElement("p");
var h3 = document.querySelector(".character-name");
var img = document.createElement("img");
var div = document.createElement("div");

function applyStyles(element, styles) {
    for (const property in styles) {
        element.style[property] = styles[property];
    }
}

function createDescriptionForCharacter(description) {
    h3.innerHTML = "";
    childP.innerHTML = "";
    childP.textContent = description;
    parentDiv.appendChild(childP);
}

function createImageForCharacter(str) {
    img.src = str;
    img.alt = "";
    parent2Div.appendChild(img);
    applyStyles(img, { "min-height": "100%", width: "100%" });
}

createImageForCharacter("static/images/wriesly.png");
let description = "Wriesly is an 8-bit console who resides in the Yomp world, the world of minigames, with a duty to perserve it from the eventual ruin.";
createDescriptionForCharacter(description);
h3.textContent = "Wriesly";

wrieslyBtn.classList.remove("dark-img");
wrieslyBtn.classList.add("bright-img");
skizzyBtn.classList.add("dark-img");
daemonBtn.classList.add("dark-img");

wrieslyBtn.addEventListener("click", () => {
    createImageForCharacter("static/images/wriesly.png");
    let description = "Wriesly is an 8-bit console who resides in the Yomp world, the world of minigames, with a duty to perserve it from the eventual ruin.";
    createDescriptionForCharacter(description);
    h3.textContent = "Wriesly";

    wrieslyBtn.classList.remove("dark-img");
    wrieslyBtn.classList.add("bright-img");
    skizzyBtn.classList.add("dark-img");
    daemonBtn.classList.add("dark-img");
});

skizzyBtn.addEventListener("click", () => {
    createImageForCharacter("static/images/skizzy.png");
    let description = "Skizzy is a little girl who loves sour candy and bunnies, venturing the vast horizons of Yomp.";
    createDescriptionForCharacter(description);
    h3.textContent = "Skizzy";

    skizzyBtn.classList.remove("dark-img");
    skizzyBtn.classList.add("bright-img");
    wrieslyBtn.classList.add("dark-img");
    daemonBtn.classList.add("dark-img");
});

daemonBtn.addEventListener("click", () => {
    createImageForCharacter("static/images/daemon.png");
    let description = "Daemon, the last ancestor of the demon kin, mistakenly arrived within the Yomp realm. The first impression on him seems fearesome but in truth is a considerate child.";
    createDescriptionForCharacter(description);
    h3.textContent = "Daemon";

    daemonBtn.classList.remove("dark-img");
    daemonBtn.classList.add("bright-img");
    wrieslyBtn.classList.add("dark-img");
    skizzyBtn.classList.add("dark-img");
});
/*wrieslyBtn.addEventListener("mouseover", () => {

    const computedStyles = window.getComputedStyle(wrieslyBtn);
    const currentFilter = computedStyles.getPropertyValue("filter");

    if (currentFilter === "brightness(40%)") {
        wrieslyBtn.style.filter = "brightness(70%)";
    }
});
skizzyBtn.addEventListener("mouseover", () => {
    const computedStyles = window.getComputedStyle(skizzyBtn);
    const currentFilter = computedStyles.getPropertyValue("filter");

    if (currentFilter === "brightness(40%)") {
        skizzyBtn.style.filter = "brightness(70%)";
    }
});
daemonBtn.addEventListener("mouseover", () => {
    const computedStyles = window.getComputedStyle(daemonBtn);
    const currentFilter = computedStyles.getPropertyValue("filter");

    if (currentFilter === "brightness(40%)") {
        daemonBtn.style.filter = "brightness(70%)";
    }
}); */