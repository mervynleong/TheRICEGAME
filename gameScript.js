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

// const completedItem = {
//   porridge: ["cookedRice", "Water"],
//   cookedRice: ["riceGrain", "Water"],
//   boiledEgg: ["Egg", "Water"],
//   duckRice: ["Duck", "cookedRice"],
//   chickenRice: ["Chicken", "cookedRice"],
//   roastedPorkRice: ["Roasted-pork", "cookedRice"],
//   mixedVegetableRice: ["Mixed-vegetables", "cookedRice"],
//   eggPorridge: ["porridge", "Egg"],
//   chickenPorridge: ["Chicken", "porridge"],
//   duckPorridge: ["Duck", "porridge"],
//   vegetablePorridge: ["Mixed-vegetables", "porridge"],
//   roastedPorkChickenRice: [
//     "roastedPorkRice",
//     "chickenRice",
//     "Roasted-pork",
//     "Chicken",
//   ],
// };

// fixed array of completed items

const cooked = [
  "Cooked-Rice",
  "Porridge",
  "Boiled-Egg",
  "Duck-Rice",
  "Chicken-Rice",
  "Roasted-Pork-Rice",
  "Mixed-Vegetables-Rice",
  "Egg-Porridge",
  "Chicken-Porridge",
  "Duck-Porridge",
  "Vegetable-Porridge",
  "Roasted-Pork-Chicken-Rice",
];

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

// let a = document.getElementById("creationSetter1");
// let b = document.getElementById("creationSetter3");
let a;
let b;

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
    // Append the baseSetter to the baseContainer
    baseContainer.appendChild(baseSetter);
    baseSetter.addEventListener("click", function (evt) {
      // This function will be called when the baseSetter is clicked
      // listen to evt evt.target.textcontent...
      // if a.innerText is not inside, it will put the innerText inside
      if (!a.innerText) {
        a.innerText = evt.target.innerText;
        a.style.color = "white";
      } else if (!b.innerText) {
        // since a has already been filled. b will be filled.
        b.innerText = evt.target.innerText;
        b.style.color = "white";
      }
    });
  }
}

putBase();

function completeI() {
  let compIContainer = document.querySelector(".ci");
  for (let i = 0; i < 12; i++) {
    let compISetter = document.createElement("div");
    compISetter.id = "compISetter" + i; // Assign a unique id for each baseSetter
    compISetter.style.borderColor = "black";
    compISetter.style.borderWidth = "4px";
    compISetter.style.borderStyle = "solid";
    compISetter.style.gap = "1px";
    compISetter.style.display = "flex";
    compISetter.style.textAlign = "center";
    compISetter.style.justifyContent = "center";
    compISetter.style.alignItems = "center";
    compISetter.style.color = "black";
    compISetter.addEventListener("click", function (evt) {
      console.log(i);
    });
    compIContainer.appendChild(compISetter);
  }
}
completeI();

function creation() {
  let creationContainer = document.querySelector(".creation");
  for (let i = 0; i < 7; i++) {
    // set up the creation board
    let creationSetter = document.createElement("div");
    creationSetter.id = "creationSetter" + i; // Assign a unique id for each creationSetter
    creationSetter.style.display = "flex";
    creationSetter.style.textAlign = "center";
    creationSetter.style.justifyContent = "center";
    creationSetter.style.alignItems = "center";
    if (i !== 0) {
      creationSetter.style.borderColor = "black";
      creationSetter.style.borderWidth = "4px";
      creationSetter.style.gap = "1px";
      creationSetter.style.borderStyle = "solid";
    }
    if (i === 1 || i === 3) {
      if (i === 1) {
        a = creationSetter;
      } else if (i === 3) {
        b = creationSetter;
      }
      creationSetter.style.backgroundColor = "brown";
    } else if (i === 5) {
      creationSetter.style.backgroundColor = "purple";
    } else if (i === 6) {
      creationSetter.style.backgroundColor = "white";
      creationSetter.innerText = "Process";
      creationSetter.style.display = "flex";
      creationSetter.style.justifyContent = "center";
      creationSetter.style.alignItems = "start"; //start of the div
      creationSetter.style.color = "red";
      creationSetter.style.position = "relative";
      creationSetter.style.backgroundImage = "url('./wok.jpg')"; // Set the background image
      creationSetter.style.backgroundSize = "cover"; // cover background
      creationSetter.addEventListener("click", function () {
        process(c);
      });
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
  ghSetter.style.borderColor = "black";
  ghSetter.style.borderWidth = "4px";
  ghSetter.style.gap = "1px";
  ghSetter.style.borderStyle = "solid";
  ghSetter.style.display = "flex";
  ghSetter.style.textAlign = "center";
  ghSetter.style.justifyContent = "center";
  ghSetter.style.alignItems = "center";
  ghSetter.style.color = "black";
  ghSetter.style.backgroundColor = "white";
  ghSetter.style.innerText = "Please make the item";
  ghSetter.style.width = "50px";
  ghSetter.style.height = "50px";
  ghContainer.appendChild(ghSetter);
}

// Function to be invoked when creationSetter is clicked
function testFunction2(creationValue) {
  console.log("Clicked creationSetter with value: " + creationValue);
}

creation();
gameHint();

function testFunction3() {
  console.log("final product");
}

let c;
let d;

function process() {
  let c = document.getElementById("creationSetter5");
  c.style.color = "white";
  switch (true) {
    // checking for Rice-grain & Water
    case (a.innerText === base[1] && b.innerText === base[2]) ||
      (a.innerText === base[2] && a.innerText === base[1]):
      c.innerText = cooked[0];
      resetRecipe();
      //setting time out before clearing the innertext of the product box
      setTimeout(resetProduct(), 2500);

      break;
    // Checking for cookedRice & Chicken
    case a.innerText === base:
      a.innerText === base[0];
      break;
    default:
      // Default case if none of the conditions match
      resetRecipe();
      console.log("Invalid!");
      break;
  }
}

function resetRecipe() {
  // function that erases the innerText when invoked by process button
  if (typeof a.innerText === "string" && typeof b.innerText === "string") {
    a.innerText = "";
    b.innerText = "";
  }
}

function resetProduct() {
  // function that erases the innerText when invoked by process button
  if (typeof c.innerText === "string") {
    c.innerText = "";
  }
}
