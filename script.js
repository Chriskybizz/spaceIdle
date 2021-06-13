const config = {
    ore: 0,
    ships: 0,
    purchaseCost: 10,
    bonus: 1
}

const mineOre = (val) => {
    config.ore += val;
    document.getElementById("ore").innerHTML = config.ore;
}

const purchaseShip = () => {
 
    if(config.ore >= config.purchaseCost){
        config.ships += 1;
        config.ore -= config.purchaseCost;
        document.getElementById("ships").innerHTML = config.ships;
        document.getElementById("ore").innerHTML = config.ore; 
    } 
    config.purchaseCost = Math.floor(config.bonus * (10 * Math.pow(1.1, config.ships)));
    document.getElementById("purchaseCost").innerHTML = config.purchaseCost}

const upgradeValue = () =>{
    if(config.ore >= 5000){
        config.ore -= 5000;
        config.bonus *= 2;        
    }
    document.getElementById("ore").innerHTML = config.ore;
    document.getElementById("bonus").innerHTML = config.bonus;
}

window.setInterval(function(){
config.ore += config.ships;
document.getElementById("ore").innerHTML = config.ore;
}, 1000);