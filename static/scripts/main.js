const wriesly_btn = document.querySelector("#wriesly-btn");
const skizzy_btn = document.querySelector("#skizzy-btn");
const daemon_btn = document.querySelector("#daemon-btn");

const div_parent = document.querySelector(".character-description");
const div_parent2 = document.querySelector(".character-img");
var p_child = document.createElement("p");
var h3_element = document.querySelector(".character-name");
var img = document.createElement("img");
var div = document.createElement("div");

function applyStyles(element, styles) {
    for (const property in styles) {
      element.style[property] = styles[property];
    }
  }

function createDescriptionForCharacter(description) {
    h3_element.innerHTML = "";
    p_child.innerHTML = "";
    p_child.textContent = description;
    div_parent.appendChild(p_child);
}

function createImageForCharacter(str) {
    img.src = str;
    img.alt = "";
    div_parent2.appendChild(img);
    applyStyles(img, {"min-height": "100%", width: "100%"});
}

createImageForCharacter("static/images/wriesly.png");
let description = "Wriesly is an 8-bit console who resides in the Yomp world, the world of minigames, with a duty to perserve it from the eventual ruin.";
createDescriptionForCharacter(description);
h3_element.textContent = "Wriesly";
applyStyles(wriesly_btn, {border: "3px solid black", filter: "brightness(100%)"});
applyStyles(skizzy_btn, {filter: "brightness(40%)"});
applyStyles(daemon_btn, {filter: "brightness(40%)"});

wriesly_btn.addEventListener('click', () => {
    createImageForCharacter("static/images/wriesly.png");
    let description = "Wriesly is an 8-bit console who resides in the Yomp world, the world of minigames, with a duty to perserve it from the eventual ruin.";
    createDescriptionForCharacter(description);
    h3_element.textContent = "Wriesly";
    applyStyles(wriesly_btn, {border: "3px solid black", filter: "brightness(100%)"}); //#e36666
    applyStyles(skizzy_btn, {"border-width": 0, filter: "brightness(40%)"});
    applyStyles(daemon_btn, {"border-width": 0, filter: "brightness(40%)"});
    applyStyles()
    });

skizzy_btn.addEventListener('click', () => {
    createImageForCharacter("static/images/skizzy.png");
    let description = "Skizzy is a little girl who loves sour candy and bunnies, venturing the vast horizons of Yomp.";
    createDescriptionForCharacter(description);
    h3_element.textContent = "Skizzy";
    applyStyles(skizzy_btn, {border: "3px solid black", filter: "brightness(100%)"});
    applyStyles(wriesly_btn, {"border-width": 0, filter: "brightness(40%)"});
    applyStyles(daemon_btn, {"border-width": 0, filter: "brightness(40%)"});
});

daemon_btn.addEventListener('click', () => {
    createImageForCharacter("static/images/daemon.png");
    let description = "Daemon, the last ancestor of the demon kin, mistakenly arrived within the Yomp realm. The first impression on him seems fearesome but in truth is a considerate child.";
    createDescriptionForCharacter(description);
    h3_element.textContent = "Daemon";
    applyStyles(daemon_btn, {border: "3px solid black", filter: "brightness(100%)"});
    applyStyles(wriesly_btn, {"border-width": 0, filter: "brightness(40%)"});
    applyStyles(skizzy_btn, {"border-width": 0, filter: "brightness(40%)"});
});