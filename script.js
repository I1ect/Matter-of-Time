const buttons = {
  buyGenerator: document.querySelector("#buyGenerator"),
  buyBooster: document.querySelector("#buyBooster"),
  buyAccelerator: document.querySelector("#buyAccelerator"),
  buyUpgrade1: document.querySelector("#upgrade1"),
}

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
  boosterCost: 400,
  boosterCurrent: 0,
  acceleratorCost: 1000,
  acceleratorCurrent: 0,
  timerCurrent: 0,
  timerMax: 10,
  upgrade1Cost: 50,
  upgrade1Multiplier: 0,
}

const profileStats = {
  maxMatter: 0,
}

const variablesDoc = {
  // Currency
  matter: document.querySelector("#matter"),
  matterPerSecond: document.querySelector("#matterPerSecond"),
  
  // Generators
  generatorLevel: document.querySelector("#generatorLevel"),
  boosterLevel: document.querySelector("#boosterLevel"),
  acceleratorLevel: document.querySelector("#acceleratorLevel"),
  generatorCurrent: document.querySelector("#generatorCurrent"),
  boosterCurrent: document.querySelector("#boosterCurrent"),
  acceleratorCurrent: document.querySelector("#acceleratorCurrent"),
  generatorCost: document.querySelector("#generatorCost"),
  boosterCost: document.querySelector("#boosterCost"),
  acceleratorCost: document.querySelector("#acceleratorCost"),
  timerCurrent: document.querySelector('#timerCurrent'),
  timerMax: document.querySelector('#timerMax'),
  boostPerSecond: document.querySelector('#boostPerSecond'),

  // Upgrades
  upgrade1Multiplier: document.querySelector("#maxMatterMultiplier"),
  upgrade1Cost: document.querySelector("#upgrade1Cost"),

  // Stats
  maxMatter: document.querySelector("#maxMatter"),
}

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
    variables.boosterCost *= 2.3;
    variables.boosterCost = tenths(variables.boosterCost);
    variables.boostPerSecond = (variables.boosterLevel - 1) / 10;
  }
})
/*

buttons.buyAccelerator.addEventListener("click", () => {

})
*/

function updateData() {
  // Updates Values
  variables.matterPerSecond = variables.generatorLevel * (1 + variables.boostAccumulated);
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
  variablesDoc.boostPerSecond.innerHTML = (variables.boostPerSecond *     variables.matterPerSecond);
  variablesDoc.boostPerSecond.innerHTML = Math.round(variablesDoc.boostPerSecond.innerHTML * 10) / 10;
  variablesDoc.maxMatter.innerHTML = profileStats.maxMatter;
  variablesDoc.upgrade1Cost.innerHTML = variables.upgrade1Cost;
  variablesDoc.upgrade1Multiplier.innerHTML = variables.upgrade1Multiplier;
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

setInterval(updateData, 100);