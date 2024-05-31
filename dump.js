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


switch (true) {
  case (p.innerText === "Please select item 1") :
    p.innerText = "Please select item 2";
    break;
    case (p.innerText === "Please select item 2") :
      p.innerText = "Please process the 2 items";
      break;
      default:
        break;
}