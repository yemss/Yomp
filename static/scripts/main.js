const wriesly_btn = document.querySelector("#wriesly-btn");
const skizzy_btn = document.querySelector("#skizzy-btn");
const daemon_btn = document.querySelector("#daemon-btn");

const div_parent = document.querySelector(".character-description");
const p_child = document.createElement("p");
const h3_element = document.querySelector(".character-name");

function createDescriptionForCharacter(description) {
    p_child.textContent = description;
    div_parent.appendChild(p_child);
}

function applyStyles(element, styles) {
    for (const property in styles) {
      element.style[property] = styles[property];
    }
  }

wriesly_btn.addEventListener('click', () => {
    h3_element.textContent = "Wriesly";
    description = "Wriesly is an 8-bit console who resides in the Yomp world, the world of minigames, with a duty to perserve it from the eventual ruin.";
    createDescriptionForCharacter(description);
    applyStyles(wriesly_btn, {border: "3px solid #93afed"}); //#e36666
    applyStyles(skizzy_btn, {"border-width": 0});
    applyStyles(daemon_btn, {"border-width": 0});
    });

skizzy_btn.addEventListener('click', () => {
    h3_element.textContent = "Skizzy";
    description = "Skizzy is a little girl who loves sour candy and bunnies, venturing the vast horizons of Yomp.";
    createDescriptionForCharacter(description);
    applyStyles(skizzy_btn, {border: "3px solid #93afed"});
    applyStyles(wriesly_btn, {"border-width": 0});
    applyStyles(daemon_btn, {"border-width": 0});
});

daemon_btn.addEventListener('click', () => {
    h3_element.textContent = "Daemon";
    description = "Daemon, the last ancestor of the demon kin, mistakenly arrived within the Yomp realm. The first impression on him seems fearesome but in truth is a considerate child.";
    createDescriptionForCharacter(description);
    applyStyles(daemon_btn, {border: "3px solid #93afed"});
    applyStyles(wriesly_btn, {"border-width": 0});
    applyStyles(skizzy_btn, {"border-width": 0});
});

