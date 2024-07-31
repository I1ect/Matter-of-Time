const buttons = {
  buyGenerator: document.querySelector("#buyGenerator"),
  buyBooster: document.querySelector("#buyBooster"),
  buyAccelerator: document.querySelector("#buyAccelerator")
}

const variables = {
  matter: 0,
  matterPerSecond: 0,
  generatorLevel: 1,
  boosterLevel: 1,
  acceleratorLevel: 1,
  generatorCost: 10,
  generatorCurrent: 0,
  boosterCost: 100,
  boosterCurrent: 0,
  acceleratorCost: 1000,
  acceleratorCurrent: 0
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
}

/*
buttons.buyGenerator.addEventListener("click", () => {
  
})

buttons.buyBooster.addEventListener("click", () => {

})

buttons.buyAccelerator.addEventListener("click", () => {

})
*/

function updateData() {
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
}

setInterval(updateData, 100);