import {variablesDoc} from "./docs.js";
import {buttons} from "./docs.js"

const variables = {
  matter: 0,
  matterPerSecond: 0,
  boostAccumulated: 0,
  boostPerSecond: 0,
  generatorLevel: 1,
  boosterLevel: 1,
  acceleratorLevel: 1,
  generatorCost: 15,
  generatorCurrent: 0,
  boosterCost: 600,
  boosterCurrent: 0,
  acceleratorCost: 10000,
  acceleratorCurrent: 0,
  timerCurrent: 0,
  timerMax: 10,
  upgrade1Cost: 50,
  upgrade1Multiplier: 0,
  upgrade2Cost: 100,
  currentPage: 1,
}

const profileStats = {
  maxMatter: 0,
}

const purchasedUpgrades = {
  upgrade1: false,
  upgrade2: false,
}

buttons.switchGenerators.addEventListener("click", () => {
  variables.currentPage = 1;
})

buttons.switchStats.addEventListener("click", () => {
  variables.currentPage = 2;
})

buttons.switchAchievements.addEventListener("click", () => {
  variables.currentPage = 3;
})

buttons.switchCheats.addEventListener("click", () => {
  variables.currentPage = 4;
})

buttons.buyGenerator.addEventListener("click", () => {
  variables.generatorCurrent += variables.matter;
  variables.generatorCurrent = tenths(variables.generatorCurrent)
  variables.matter = 0;
  
  if (variables.generatorCurrent >= variables.generatorCost) {
    variables.generatorLevel++;
    variables.generatorCurrent = variables.generatorCurrent - variables.generatorCost;
    variables.generatorCurrent = tenths(variables.generatorCurrent);
    variables.generatorCost *= 1.6;
    variables.generatorCost = tenths(variables.generatorCost);
  }  
})

buttons.buyBooster.addEventListener("click", () => {
  variables.boosterCurrent += variables.matter;
  variables.boosterCurrent = tenths(variables.boosterCurrent);
  variables.matter = 0;

  if (variables.boosterCurrent >= variables.boosterCost) {
    variables.boosterLevel++;
    variables.boosterCurrent = variables.boosterCurrent - variables.boosterCost;
    variables.boosterCurrent = tenths(variables.boosterCurrent);
    variables.boosterCost *= 2.1;
    variables.boosterCost = tenths(variables.boosterCost);
    variables.boostPerSecond = (variables.boosterLevel - 1) / 10;
  }
})
/*

buttons.buyAccelerator.addEventListener("click", () => {

})
*/

buttons.buyUpgrade1.addEventListener("click", () => {
  if ((variables.matter >= variables.upgrade1Cost) && purchasedUpgrades.upgrade1 == false) {
    variables.matter = variables.matter - variables.upgrade1Cost;
    purchasedUpgrades.upgrade1 = true;
    variables.upgrade1Cost = "purchased";
    variablesDoc.upgrade1.classList.remove("upgradeBox");
    variablesDoc.upgrade1.classList.add("purchased");
  }
})

buttons.buyUpgrade2.addEventListener("click", () => {
  if ((variables.matter >= variables.upgrade2Cost) && purchasedUpgrades.upgrade2 == false) {
    variables.matter = variables.matter - variables.upgrade2Cost; 
    variables.upgrade2Cost *= 10;
    variables.timerMax += 2.5
  }
})

function updateData() {
  // Updates Values
  variables.matterPerSecond = variables.generatorLevel * (1 + variables.boostAccumulated);
  if (purchasedUpgrades.upgrade1) {
    variables.matterPerSecond *= variables.upgrade1Multiplier;
  }
  variables.matterPerSecond = tenths(variables.matterPerSecond)
  addMatter(variables.matterPerSecond/10);
  variables.timerCurrent += 0.1;
  variables.timerCurrent = tenths(variables.timerCurrent);
  if (variables.timerCurrent >= variables.timerMax) {
    reset();
  }
  if (profileStats.maxMatter <= variables.matter) {
    profileStats.maxMatter = variables.matter;
  }
  variables.upgrade1Multiplier = hundreths(1+Math.log10(Math.sqrt(profileStats.maxMatter)))
  
  // Updates Document
  variablesDoc.generatorLevel.innerHTML = variables.generatorLevel;
  variablesDoc.boosterLevel.innerHTML = variables.boosterLevel;
  variablesDoc.acceleratorLevel.innerHTML = variables.acceleratorLevel;
  variablesDoc.generatorCurrent.innerHTML =  variables.generatorCurrent;
  variablesDoc.boosterCurrent.innerHTML = variables.boosterCurrent;
  variablesDoc.acceleratorCurrent.innerHTML = variables.acceleratorCurrent;
  variablesDoc.generatorCost.innerHTML = variables.generatorCost;
  variablesDoc.boosterCost.innerHTML = variables.boosterCost;
  variablesDoc.acceleratorCost.innerHTML = variables.acceleratorCost;
  variablesDoc.matter.innerHTML = variables.matter;
  variablesDoc.matterPerSecond.innerHTML = variables.matterPerSecond;
  variablesDoc.timerCurrent.innerHTML = variables.timerCurrent;
  variablesDoc.timerMax.innerHTML = variables.timerMax;
  variablesDoc.boostPerSecond.innerHTML = (variables.boostPerSecond * variables.matterPerSecond);
  variablesDoc.boostPerSecond.innerHTML = Math.round(variablesDoc.boostPerSecond.innerHTML * 10) / 10;
  variablesDoc.maxMatter.innerHTML = profileStats.maxMatter;
  variablesDoc.upgrade1Cost.innerHTML = variables.upgrade1Cost;
  variablesDoc.upgrade1Multiplier.innerHTML = variables.upgrade1Multiplier;
  variablesDoc.upgrade2Cost.innerHTML = variables.upgrade2Cost;
  variablesDoc.upgrade2Multiplier.innerHTML = variables.timerMax;
  updatePage();
}

function addMatter(value) {
  variables.boostAccumulated += variables.boostPerSecond / 10;
  variables.matter += value;
  variables.matter = tenths(variables.matter);
}

function tenths(value) {
  return Math.round(value * 10) / 10;
}

function hundreths(value) {
  return value.toFixed(2);
}

function reset() {
  variables.matter = 0;
  variables.boostAccumulated = 0;
  variables.timerCurrent = 0;
}

function updatePage() {
  if (variables.currentPage == 1) {
    document.querySelector("#generatorsPage").style.display = "block";
    document.querySelector("#statsPage").style.display = "none";
    document.querySelector("#achievementsPage").style.display = "none";
    document.querySelector("#cheatsPage").style.display = "none";
  }
  else if (variables.currentPage == 2) {
    document.querySelector("#generatorsPage").style.display = "none";
    document.querySelector("#statsPage").style.display = "block";
    document.querySelector("#achievementsPage").style.display = "none";
    document.querySelector("#cheatsPage").style.display = "none";
  }
  else if (variables.currentPage == 3) {
    document.querySelector("#generatorsPage").style.display = "none";
    document.querySelector("#statsPage").style.display = "none";
    document.querySelector("#achievementsPage").style.display = "block";
    document.querySelector("#cheatsPage").style.display = "none";
  }
  else {
    document.querySelector("#generatorsPage").style.display = "none";
    document.querySelector("#statsPage").style.display = "none";
    document.querySelector("#achievementsPage").style.display = "none";
    document.querySelector("#cheatsPage").style.display = "block";
  }
}

setInterval(updateData, 100);