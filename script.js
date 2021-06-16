var number = 0;
var energy = 175;
var ships = 0;
var maxVal = 1;

var numberUp = (val) => {
    if (energy >= 1) {
        energy -= 1;
        number += (maxVal * val);
        document.getElementById("numberValue").innerHTML = number;
        document.getElementById("finish").style.width = energy + "px";
    }
}

var numberUpAuto = (val) => {
        number += val;
        document.getElementById("numberValue").innerHTML = number;

    }


var dev = () => {
    number += 200;
    document.getElementById("numberValue").innerHTML = number;
}

var autoShip = () => {
    if(number >= 1000){
        ships += 1;
        number -= 1000;
        document.getElementById("ships").innerHTML = ships;
        document.getElementById("numberValue").innerHTML = number;
            }
}

var rest = () => {
    if(energy < 175)
    energy += 1;
    document.getElementById("finish").style.width = energy + "px";
}

window.setInterval(function(){
    numberUpAuto(Math.floor(ships)), upgradeUnlock()
 }, 1000
)

var upgradeUnlock = () => {
    if (number >= 200) {
        document.getElementById("upgrade1").style.display = "block";
    }
    if (number >= 1000) {
        document.getElementById("upgrade2").style.display = "block";
    }
    if (number >= 2500) {
        document.getElementById("upgrade3").style.display = "block";
    }
    if (number >= 6000) {
        document.getElementById("upgrade4").style.display = "block";
    }
    if (number >= 10000) {
        document.getElementById("upgrade5").style.display = "block";
    }
    if (number >= 20000) {
        document.getElementById("upgrade6").style.display = "block";
    }
    if (number >= 100000) {
        document.getElementById("upgrade7").style.display = "block";
    }
    if (number >= 250000) {
        document.getElementById("upgrade8").style.display = "block";
    }
    if (number >= 700000) {
        document.getElementById("upgrade9").style.display = "block";
    }
    if (number >= 1500000) {
        document.getElementById("upgrade10").style.display = "block";
    }
}

var minePower = () => {
    maxVal += 1;
    number -= 200;
    document.getElementById("numberValue").innerHTML = number;
    document.getElementById("upgrade1").style.display = "none"

}

