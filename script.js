const config = {
    energy: 100,
    ore: 0,
    ships: 0,
    pickStrength: 1
}


var addOre = () => {
    if (config.energy >= 10) {
        config.energy -= 10;
        config.ore += config.pickStrength;
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

var upgradePick = () => {
    if(config.ore >= 200){
        config.ore -= 200;
        config.pickStrength += 2;
        document.getElementById("ore").innerHTML = config.ore;

    }
}

var dev = () => {
    config.ore += 200;
    document.getElementById("ore").innerHTML = config.ore;
}
