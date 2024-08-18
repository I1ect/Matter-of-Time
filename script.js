const buttons = {
  buyGenerator: document.querySelector("#buyGenerator"),
  buyBooster: document.querySelector("#buyBooster"),
  buyAccelerator: document.querySelector("#buyAccelerator")
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
  boosterCost: 500,
  boosterCurrent: 0,
  acceleratorCost: 1000,
  acceleratorCurrent: 0,
  timerCurrent: 0,
  timerMax: 10,
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
}

buttons.buyGenerator.addEventListener("click", () => {
  variables.generatorCurrent += variables.matter;
  variables.generatorCurrent = Math.round(variables.generatorCurrent * 10) / 10;
  variables.matter = 0;
  
  if (variables.generatorCurrent >= variables.generatorCost) {
    variables.generatorLevel++;
    variables.generatorCurrent = variables.generatorCurrent - variables.generatorCost;
    variables.generatorCurrent = Math.round(variables.generatorCurrent * 10) / 10;
    variables.generatorCost *= 2.3;
    variables.generatorCost = Math.round(variables.generatorCost * 10) / 10;
  }  
})

buttons.buyBooster.addEventListener("click", () => {
  variables.boosterCurrent += variables.matter;
  variables.boosterCurrent = Math.round(variables.boosterCurrent * 10) / 10;
  variables.matter = 0;

  if (variables.boosterCurrent >= variables.boosterCost) {
    variables.boosterLevel++;
    variables.boosterCurrent = variables.boosterCurrent - variables.boosterCost;
    variables.boosterCurrent = Math.round(variables.boosterCurrent * 10) / 10;
    variables.boosterCost *= 2.8;
    variables.boosterCost = Math.round(variables.boosterCost * 10) / 10;
    variables.boostPerSecond = (variables.boosterLevel - 1) / 10;
  }
})
/*

buttons.buyAccelerator.addEventListener("click", () => {

})
*/

function updateData() {
  // Updates Values
  addMatter(variables.matterPerSecond/10);
  variables.matterPerSecond = variables.generatorLevel;
  variables.timerCurrent += 0.1;
  variables.timerCurrent = Math.round(variables.timerCurrent * 10) / 10;
  if (variables.timerCurrent >= variables.timerMax) {
    reset();
  }
  
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
  variablesDoc.boostPerSecond.innerHTML = variables.boostPerSecond;
}

function addMatter(value) {
  variables.boostAccumulated += variables.boostPerSecond / 10;
  variables.matter += value * (1 + variables.boostAccumulated);
  variables.matter = Math.round(variables.matter * 10) / 10
}

function reset() {
  variables.matter = 0;
  variables.boostAccumulated = 0;
  variables.timerCurrent = 0;
}

setInterval(updateData, 100);