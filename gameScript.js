// Fixed parameters not to be touched
// Array of base items
const base = [
  "Chicken",
  "Rice-Grain",
  "Water",
  "Duck",
  "Mixed-Vegetables",
  "Roasted-Pork",
  "Egg",
];

// Fixed Parameters not to be touched
// Array of cooked items
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

// a is a variable for ingredient 1
let a;
// b is a variable for ingredient 2
let b;
// c is a variable for created item in creation bar
let c;
// d is a variable for created item if it is successful and append to the completed item
let d;
// num is a counter for process() function
let num = 0;
// array is an empty array to check the availability of the item
let array = [];
// Setting lives at 3 by default
let lives = 3;

window.onload = function () {
  setGame();
};

function setGame() {
  // // set up the lives for the game in html
  // let lifeCounter = document.querySelector(".lives");
  // lifeCounter.style.color = "black";
  // lifeCounter.innerText = "Your life count is at 3";
  // lifeCounter.style.textAlign = "center";
  // lifeCounter.style.alignContent = "center";
}

// Life deduct function
function lifeDeduct() {
  lives--;
  console.log("your life is deducted. your life is now at  " + lives);
  lifeChecker();
  lives;
}

// Life checking Function
function lifeChecker() {
  if (lives === 0) {
    console.log("you have lost!");
  }
}

// Life display

function lifeDisplay() {
  let livesContainer = document.querySelector(".lives");
  // set up the lives available:
  for (let i = 0; i < 4; i++) {
    // creating individual divs
    let livesSetter = document.createElement("div");
    livesSetter.id = "livesSetter" + i; // Assign a unique id for each livesSetter
    // Styling the lives
    livesSetter.style.borderColor = "black";
    livesSetter.style.borderWidth = "4px";
    livesSetter.style.borderStyle = "solid";
    livesSetter.style.gap = "1px";
    livesSetter.style.display = "flex";
    livesSetter.style.textAlign = "center";
    livesSetter.style.justifyContent = "center";
    livesSetter.style.alignItems = "center";
    livesSetter.style.color = "black";
    livesSetter.style.display = "flex";
    livesSetter.style.justifyContent = "center";
    livesSetter.style.position = "relative";
    if (i !== 0) {
      livesSetter.style.backgroundImage = "url('./Fullheart.png')"; // Set the background image
      livesSetter.style.backgroundSize = "cover"; // cover background}
    } else {
      livesSetter.innerText = "Your current lives";
      livesSetter.style.height = "90px";
      livesSetter.style.fontSize = "1.5rem";
    }
    // Append the livesSetter to the livesContainer
    livesContainer.appendChild(livesSetter);
  }
}
lifeDisplay();

// function to set the base items
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
    compISetter.addEventListener("click", function (event) {
      compIAsIngredient(event);
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
        process();
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

creation();
gameHint();

function process() {
  // getting the id to set the product to append
  c = document.getElementById("creationSetter5");
  c.style.color = "white";
  // getting the id to set the completed item to append
  d = document.getElementById("compISetter" + num);
  d.style.color = "white";

  switch (true) {
    // checking for Rice-grain & Water
    case (a.innerText === base[1] && b.innerText === base[2]) ||
      (b.innerText === base[1] && a.innerText === base[2]):
      c.innerText = cooked[0];
      if (array.includes(cooked[0]) === false) {
        // checking array to see if it exists inside, if it does not, it will push the item into the array
        num++; //increment of process for num
        array.push(cooked[0]);
        d.innerText = cooked[0];
      }
      break;
    // Checking for Cooked-Rice & Chicken
    case (a.innerText === base[0] && b.innerText === cooked[0]) ||
      (b.innerText === base[0] && a.innerText === cooked[0]):
      c.innerText = cooked[4];
      if (array.includes(cooked[4]) !== true) {
        num++;
        array.push(cooked[4]);
        d.innerText = cooked[4];
      }
      break;
    // Checking for Cooked-Rice & Water
    case (a.innerText === base[2] && b.innerText === cooked[0]) ||
      (b.innerText === base[2] && a.innerText === cooked[0]):
      c.innerText = cooked[1];
      if (array.includes(cooked[1]) !== true) {
        num++;
        array.push(cooked[1]);
        d.innerText = cooked[1];
      }
      break;
    // Checking for Egg & Water
    case (a.innerText === base[2] && b.innerText === base[6]) ||
      (b.innerText === base[2] && a.innerText === base[6]):
      c.innerText = cooked[2];
      if (array.includes(cooked[2]) !== true) {
        num++;
        array.push(cooked[2]);
        d.innerText = cooked[2];
      }
      break;
    // Checking for Duck & Cooked Rice
    case (a.innerText === base[3] && b.innerText === cooked[0]) ||
      (b.innerText === base[3] && a.innerText === cooked[0]):
      c.innerText = cooked[3];
      if (array.includes(cooked[3]) !== true) {
        num++;
        array.push(cooked[3]);
        d.innerText = cooked[3];
      }
      break;
    // Checking for Roasted-Pork & Cooked Rice
    case (a.innerText === base[5] && b.innerText === cooked[0]) ||
      (b.innerText === base[5] && a.innerText === cooked[0]):
      c.innerText = cooked[5];
      if (array.includes(cooked[5]) !== true) {
        num++;
        array.push(cooked[5]);
        d.innerText = cooked[5];
      }
      break;
    // Checking for Mixed-Vegetables & Cooked Rice
    case (a.innerText === base[4] && b.innerText === cooked[0]) ||
      (b.innerText === base[4] && a.innerText === cooked[0]):
      c.innerText = cooked[6];
      if (array.includes(cooked[6]) !== true) {
        num++;
        array.push(cooked[6]);
        d.innerText = cooked[6];
      }
      break;
    // Checking for Egg & Porridge
    case (a.innerText === base[6] && b.innerText === cooked[1]) ||
      (b.innerText === base[6] && a.innerText === cooked[1]):
      c.innerText = cooked[7];
      if (array.includes(cooked[7]) !== true) {
        num++;
        array.push(cooked[7]);
        d.innerText = cooked[7];
      }
      break;
    // Checking for Chicken & Porridge
    case (a.innerText === base[0] && b.innerText === cooked[1]) ||
      (b.innerText === base[0] && a.innerText === cooked[1]):
      c.innerText = cooked[8];
      if (array.includes(cooked[8]) !== true) {
        num++;
        array.push(cooked[8]);
        d.innerText = cooked[8];
      }
      break;
    // Checking for Duck & Porridge
    case (a.innerText === base[3] && b.innerText === cooked[1]) ||
      (b.innerText === base[3] && a.innerText === cooked[1]):
      c.innerText = cooked[9];
      if (array.includes(cooked[9]) !== true) {
        num++;
        array.push(cooked[9]);
        d.innerText = cooked[9];
      }
      break;
    // Checking for Mixed-Vegetables & Porridge
    case (a.innerText === base[4] && b.innerText === cooked[1]) ||
      (b.innerText === base[4] && a.innerText === cooked[1]):
      c.innerText = cooked[10];
      if (array.includes(cooked[10]) !== true) {
        num++;
        array.push(cooked[10]);
        d.innerText = cooked[10];
      }
      break;
    // Checking for Roasted-Pork-Rice & Chicken || Chicken-Rice & Roasted-Pork
    // Chicken & roasted-pork-rice
    case (a.innerText === base[0] && b.innerText === cooked[5]) ||
      (b.innerText === base[0] && a.innerText === cooked[5]) ||
      // Roasted-Pork & Chicken-rice
      (a.innerText === base[5] && b.innerText === cooked[4]) ||
      (b.innerText === base[5] && a.innerText === cooked[4]):
      c.innerText = cooked[11];
      if (array.includes(cooked[11]) !== true) {
        num++;
        array.push(cooked[11]);
        d.innerText = cooked[11];
      }
      break;

    default:
      // Default case if none of the conditions match

      c.innerText = "Invalid Process!";
      // life deduct gets invoked here
      lifeDeduct();
      break;
  }
  // setting time out before clearing the innertext of the product box
  setTimeout(resetProduct, 3000);
  // Resetting recipe
  resetRecipe();
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

function compIAsIngredient(event) {
  // function that invokes into the recipe area
  // if a.innerText is not inside, it will put the innerText inside
  if (!a.innerText) {
    a.innerText = event.target.innerText;
    a.style.color = "white";
  } else if (!b.innerText) {
    // since a has already been filled. b will be filled.
    b.innerText = event.target.innerText;
    b.style.color = "white";
  }
}
