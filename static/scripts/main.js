const wriesly_btn = document.querySelector('#wriesly-btn');
const skizzy_btn = document.querySelector('#skizzy-btn');
const daemon_btn = document.querySelector('#daemon-btn');

function createDescriptionForCharacter(description) {
    const div_parent = document.querySelector('.character-display');
    const p_child = document.createElement('p');
    p_child.innerHTML = description;
    applyStyles(p_child, { color: "#212227" });
    div_parent.appendChild(p_child);
    applyStyles(div_parent, { "text-align": "center" }); // Center the text
}

function applyStyles(element, styles) {
    for (const property in styles) {
      element.style[property] = styles[property];
    }
  }
  
wriesly_btn.addEventListener('click', () => {
    description = "Wriesly is an 8-bit console who resides in the Yomp world, the world of minigames, with a duty to perserve it from the eventual ruin.";
    createDescriptionForCharacter(description);   
    applyStyles(wriesly_btn, {border: "1px solid #7498e8"});
    });

skizzy_btn.addEventListener('click', () => {
    description = "Skizzy is a little girl who loves sour candy and bunnies, venturing the vast horizons of Yomp.";
    createDescriptionForCharacter(description);
    applyStyles(skizzy_btn, {border: "1px solid #7498e8"});
});

daemon_btn.addEventListener('click', () => {
    description = "Daemon, the last ancestor of the demon kin, mistakenly arrived within the Yomp realm. The first impression on him seems fearesome but in truth is a considerate child.";
    createDescriptionForCharacter(description);
    applyStyles(daemon_btn, {border: "1px solid #7498e8"});
});

