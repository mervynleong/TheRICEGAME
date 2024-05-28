// Player class with win or lose criteria

class Player {
  // construction of player with name and default lives at 3
  constructor(name, lives = 3) {
    this.name = name;
    this.lives = lives;
  }

  getKVP() {
    return { name: this.name, lives: this.lives };
  }

  // Life reduction situation when criteria is not met
  lifeReduction(criteria) {
    if (criteria !== true) {
      lives--;
    }
  }

  // Win criteria
  winCriteria(finalProduct) {
    if (finalProduct === true) {
      console.log("You have completed the final product! You won!");
    }
  }

  // Lose criteria
  loseCriteria(lives) {
    if (lives === 0) {
      console.log(
        "You lost because you ran out of lives! Try again next time!"
      );
    }
  }
}

const newPlayer = new Player("CP");
console.log(newPlayer.getKVP());

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
  invalid: "invalid",
};

// //game loading

// window.onload = function () {
//   startGame();
// };

// function startGame() {}
