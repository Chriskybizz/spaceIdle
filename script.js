const config = {
    energy: 100,
    ore: 0,
    ships: 0
}

/* var addShip = (val) => {
    config.ships += val;
    document.getElementById("ships").innerHTML = config.ships;
} */

var newButton = document.createElement("button");
newButton.innerHTML = "New Ship";
/* newButton.onclick = addShip(); */

var addOre = () => {
    if (config.energy >= 10) {
        config.energy -= 10;
        config.ore += 1;
        document.getElementById("ore").innerHTML = config.ore;
        document.getElementById("energyEmpty").style.width = config.energy + "px";
    }
}

var addEnergy = () => {
    if (config.energy < 100) {
        config.energy += 10;
        document.getElementById("energyEmpty").style.width = config.energy + "px";
    }
}

var juiceTown = () => {
    if (config.ore > 100) {
        document.body.appendChild(newButton);

    }
}

juiceTown();