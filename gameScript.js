// // Player class with win or lose criteria

// class Player {
//   // construction of player with name and default lives at 3
//   constructor(name, lives = 3) {
//     this.name = name;
//     this.lives = lives;
//   }

//   getKVP() {
//     return { name: this.name, lives: this.lives };
//   }

//   // Life reduction situation when criteria is not met
//   lifeReduction(criteria) {
//     if (criteria !== true) {
//       lives--;
//     }
//   }

//   // Win criteria
//   winCriteria(finalProduct) {
//     if (finalProduct === true) {
//       console.log("You have completed the final product! You won!");
//     }
//   }

//   // Lose criteria
//   loseCriteria(lives) {
//     if (lives === 0) {
//       console.log(
//         "You lost because you ran out of lives! Try again next time!"
//       );
//     }
//   }
// }

// const newPlayer = new Player("CP");
// console.log(newPlayer.getKVP());

// Fixed parameters not to be touched
// Array of base items
const base = [
  "Chicken",
  "Rice-grain",
  "Water",
  "Duck",
  "Mixed-vegetables",
  "Roasted-pork",
  "Egg",
];

// Fixed Parameters not to be touched
// KVP of completedItems

const completedItem = {
  porridge: ["cookedRice", "Water"],
  cookedRice: ["riceGrain", "Water"],
  boiledEgg: ["Egg", "Water"],
  duckRice: ["Duck", "cookedRice"],
  chickenRice: ["Chicken", "cookedRice"],
  roastedPorkRice: ["Roasted-pork", "cookedRice"],
  mixedVegetableRice: ["Mixed-vegetables", "cookedRice"],
  eggPorridge: ["porridge", "Egg"],
  chickenPorridge: ["Chicken", "porridge"],
  duckPorridge: ["Duck", "porridge"],
  vegetablePorridge: ["Mixed-vegetables", "porridge"],
  roastedPorkChickenRice: [
    "roastedPorkRice",
    "chickenRice",
    "Roasted-pork",
    "Chicken",
  ],
};

window.onload = function () {
  setGame();
};

function setGame() {
  // set up the lives for the game in html
  let lifeCounter = document.querySelector(".lives");
  lifeCounter.style.color = "black";
  lifeCounter.innerText = "Your life count is at 3";
  lifeCounter.style.textAlign = "center";
  lifeCounter.style.alignContent = "center";
}

// setting invalid = false; and lives at 3
let invalid = false;
let lives = 3;
// Life function
function livez() {
  if (invalid === true) {
    lives--;
  }
}

console.log(completedItem.porridge[1]);
let certainItem = "";
function checkFood() {
  if (
    certainItem === completedItem.porridge.includes("cookedRice" && "Water")
  ) {
  } else if (
    certainItem === completedItem.cookedRice.includes("riceGrain" && "Water")
  ) {
  } else if (
    certainItem === completedItem.boiledEgg.includes("Egg" && "Water")
  ) {
  } else if (
    certainItem === completedItem.duckRice.includes("Duck" && "cookedRice")
  ) {
  } else if (
    certainItem ===
    completedItem.chickenRice.includes("Chicken" && "cookedRice")
  ) {
  } else if (
    certainItem ===
    completedItem.roastedPorkRice.includes("Roasted-pork" && "cookedRice")
  ) {
  } else if (
    certainItem ===
    completedItem.mixedVegetableRice.includes(
      "Mixed-vegetables" && "cookedRice"
    )
  ) {
  } else if (
    certainItem === completedItem.eggPorridge.includes("Egg" && "porridge")
  ) {
  } else if (
    certainItem ===
    completedItem.chickenPorridge.includes("Chicken" && "porridge")
  ) {
  } else if (
    certainItem === completedItem.duckPorridge.includes("Duck" && "porridge")
  ) {
  } else if (
    certainItem ===
    completedItem.vegetablePorridge.includes("Mixed-vegetables" && "porridge")
  ) {
  } else if (
    certainItem ===
    completedItem.roastedPorkChickenRice.includes(
      ("roastedPorkRice" && "Chicken") || ("chickenRice" && "Roasted-pork")
    )
  ) {
  } else {
    invalid = true;
  }
}

function putBase() {
  let baseContainer = document.querySelector(".base");
  for (let i = 0; i < base.length; i++) {
    // set up the base for selection
    let baseSetter = document.createElement("div");
    baseSetter.id = "baseSetter" + i; // Assign a unique id for each baseSetter
    baseSetter.style.borderColor = "black";
    baseSetter.style.borderWidth = "4px";
    baseSetter.style.borderStyle = "solid";
    baseSetter.style.gap = "1px";
    baseSetter.innerText = base[i];
    baseSetter.style.display = "flex";
    baseSetter.style.textAlign = "center";
    baseSetter.style.justifyContent = "center";
    baseSetter.style.alignItems = "center";
    baseSetter.style.color = "white";
    baseSetter.style.position = "relative";
    // Append the baseSetter to the baseContainer
    baseContainer.appendChild(baseSetter);
    baseSetter.addEventListener("click", function () {
      // This function will be called when the baseSetter is clicked
      testFunction(base[i]);
    });
  }
}
// Function to be invoked when baseSetter is clicked
function testFunction(baseValue) {
  console.log("Clicked baseSetter with value: " + baseValue);
}

putBase();

function invokeCI() {}

function creation() {
  let creationContainer = document.querySelector(".creation");
  for (let i = 0; i < 7; i++) {
    // set up the creation board
    let creationSetter = document.createElement("div");
    creationSetter.id = "creationSetter" + i; // Assign a unique id for each creationSetter
    creationSetter.style.borderColor = "black";
    creationSetter.style.borderWidth = "4px";
    creationSetter.style.gap = "1px";
    creationSetter.style.borderStyle = "solid";
    creationSetter.style.display = "flex";
    creationSetter.style.textAlign = "center";
    creationSetter.style.justifyContent = "center";
    creationSetter.style.alignItems = "center";
    creationSetter.style.color = "white";
    creationSetter.style.position = "relative";
    if (i === 1 || i === 3) {
      // Add background only to the div with id creationSetter4
      creationSetter.style.backgroundColor = "brown";
      creationSetter.addEventListener("click", function () {
        // This function will be called when the creationSetter is clicked
        testFunction2();
      });
    } else if (i === 5) {
      creationSetter.style.backgroundColor = "yellow";
      creationSetter.addEventListener("click", function () {
        // This function will be called when the creationSetter is clicked
        testFunction3();
      });
    } else if (i === 6) {
      creationSetter.style.backgroundColor = "white";
      let pButton = document.createElement("button");
      pButton.textContent = "Process";
      pButton.style.textAlign = "top"; //?
      pButton.style.color = "red";
      pButton.style.backgroundImage = "url('./wok.jpg')"; // Set the background image
      pButton.style.backgroundSize = "cover"; // cover background
      pButton.style.width = "100px"; // Set the width of the button
      pButton.style.height = "100px"; // Set the height of the button
      pButton.style.opacity = "0.9"; // Set the opacity 10%
      pButton.addEventListener("click", function () {
        // Call the function of process
        process();
      });
      creationSetter.appendChild(pButton);
    } else if (i === 2) {
      creationSetter.style.backgroundImage = "url('./plus.jpg')";
      creationSetter.style.backgroundSize = "cover";
    } else if (i === 4) {
      creationSetter.style.backgroundImage = "url('./equal.png')";
      creationSetter.style.backgroundSize = "cover";
      creationSetter.style.backgroundRepeat = "no-repeat";
      creationSetter.style.backgroundSize = "80px 80px";
      creationSetter.style.backgroundPosition = "center";
    }
    // Append the creationSetter to the creationContainer
    creationContainer.appendChild(creationSetter);
  }
}

function gameHint() {
  let ghContainer = document.querySelector(".game-hint");
  let ghSetter = document.createElement("div");
  ghSetter.id = "gh";
}

// Function to be invoked when creationSetter is clicked
function testFunction2(creationValue) {
  console.log("Clicked creationSetter with value: " + creationValue);
}

creation();

function testFunction3() {
  console.log("final product");
}

function process() {
  console.log("processing");
}
