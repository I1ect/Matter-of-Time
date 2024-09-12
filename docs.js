export const variablesDoc = {
  // Selects all of the variables use within the game
  
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
  upgrade1: document.querySelector('#upgrade1'),
  upgrade2Multiplier: document.querySelector('#resetTimer'),
  upgrade2Cost: document.querySelector("#upgrade2Cost"),

  // Stats
  maxMatter: document.querySelector("#maxMatter"),
}

  // Selects all the buttons within the game
export const buttons = {
    buyGenerator: document.querySelector("#buyGenerator"),
    buyBooster: document.querySelector("#buyBooster"),
    buyAccelerator: document.querySelector("#buyAccelerator"),
    buyUpgrade1: document.querySelector("#upgrade1"),
    buyUpgrade2: document.querySelector("#upgrade2"),
    switchGenerators: document.querySelector("#generatorsSwap"),
    switchStats: document.querySelector("#statsSwap"),
    switchAchievements: document.querySelector("#achievementsSwap"),
  }