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

// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
  // passing the randomizedArray into (array)
  for (let i = array.length - 1; i > 0; i--) {
    // for loop downwards for the length of the array
    const j = Math.floor(Math.random() * (i + 1));
    // math flooring to the nearest integer // random of i+1, eg 11+1 =12 , 12 multiply by (0 to 0.9999999)
    [array[i], array[j]] = [array[j], array[i]];
    // array 11, array randomized number +i (not 11) will be assigned to array randomized number +i (not 11), array 11.
    // this may result in [array[11], array[5]] become [array[7], array[11]]
    // regardless array[i] stays in "tact" while array [j] becomes a newly assigned string
    // swapping the two positions
  }
}

// Create a shallow copy of the original array
const randomizedArray = [...cooked];

// a is a variable for ingredient 1
let a;
// b is a variable for ingredient 2
let b;
// c is a variable for created item in creation bar
let c;
// d is a variable for created item if it is successful and append to the completed item
let d;
// l, m & n is a variable for lives when being deducted to display image
let l;
let m;
let n;
// p is for prompt variable
let p;
// w is a variable for win condition
let w;
// time is a variable for countdown timer maninpulation
let time = 30;
// r is for reset game manipulation variable
let r;
// timeDisplay is a variable set to null for timer function
let timeDisplay = null;
// num is a counter for process() function
let num = 0;
// array is an empty array to check the availability of the item
let array = [];
// Setting lives at 3 by default
let lives = 3;
// inserting audio element
var audio = document.getElementById("gordon");
var audio1 = document.getElementById("completion");
var audio2 = document.getElementById("click");

window.onload = function () {
  // setting all the functions into the game
  lifeDisplay();
  putTimer();
  beginTimer();
  prompt();
  putBase();
  completeI();
  creation();
  gameHint();
};

//Play audio2
function playAudio2() {
  audio2.play();
  // setting the audio to beginning to reset
  audio2.currentTime = 0;
}

//Pause audio2
function pauseAudio2() {
  audio2.pause();
}

//Play audio1
function playAudio1() {
  audio1.play();
}

//Pause audio1
function pauseAudio1() {
  audio1.pause();
}

// Play the audio
function playAudio() {
  audio.play();
}

// Pause the audio
function pauseAudio() {
  audio.pause();
}

// Life deduct function
function lifeDeduct() {
  // position 1
  l = document.getElementById("livesSetter1");
  // position 2
  m = document.getElementById("livesSetter2");
  // position 3
  n = document.getElementById("livesSetter3");
  // not allowing lives to go negative

  if (lives > 0) {
    lives--;
    // Inserting sound to play:
    playAudio();
  }
  switch (true) {
    case lives === 2:
      n.style.backgroundSize = "cover";
      n.style.backgroundImage = "url('./Emptyheart.png')"; // Set the background image to empty heart
      break;
    case lives === 1:
      n.style.backgroundSize = "cover";
      n.style.backgroundImage = "url('./Emptyheart.png')";
      m.style.backgroundSize = "cover";
      m.style.backgroundImage = "url('./Emptyheart.png')";
      break;
    case lives === 0:
      n.style.backgroundSize = "cover";
      n.style.backgroundImage = "url('./Emptyheart.png')";
      m.style.backgroundSize = "cover";
      m.style.backgroundImage = "url('./Emptyheart.png')";
      l.style.backgroundSize = "cover";
      l.style.backgroundImage = "url('./Emptyheart.png')";
      break;
    default:
      break;
  }
  lifeChecker();
}

// Life checking Function
function lifeChecker() {
  if (lives === 0) {
    stopTimer();
    // Setting the you have lost text
    ghContainer.innerText = "You have lost!";
    ghContainer.style.textAlign = "center";
    ghContainer.style.display = "flex";
    ghContainer.style.alignItems = "center";
    ghContainer.style.color = "darkgreen";
    ghContainer.style.fontSize = "30px";
    ghContainer.style.width = "700px";
    ghContainer.style.height = "100px";
    ghContainer.style.textShadow = "0 0 5px rgba(0, 100, 100, 0.4)";
    ghContainer.style.justifyContent = "center";
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
    livesSetter.style.display = "flex";
    livesSetter.style.textAlign = "center";
    livesSetter.style.justifyContent = "center";
    livesSetter.style.alignItems = "center";
    livesSetter.style.color = "purple";
    livesSetter.style.display = "flex";
    livesSetter.style.justifyContent = "center";
    livesSetter.style.position = "relative";
    if (i !== 0) {
      // covering the background with 3 lives
      livesSetter.style.backgroundImage = "url('./Fullheart.png')"; // Set the background image
      livesSetter.style.backgroundSize = "cover"; // cover background}
    } else {
      // Giving an indicator to current lives
      livesSetter.innerText = "Your current lives";
      livesSetter.style.height = "100px";
      livesSetter.style.fontSize = "1.5rem";
      livesSetter.style.textShadow = "0 0 5px rgba(255, 0, 120, 0.4)";
    }
    // Append the livesSetter to the livesContainer
    livesContainer.appendChild(livesSetter);
  }
}

// function for stopping timer

function stopTimer() {
  time = 0;
}

// function for timer logic
function resetTimer() {
  // resetting timer back to 30
  time = 30;
}

function beginTimer() {
  timeDisplay = setInterval(() => {
    putTimer();
  }, 1000);
}
function putTimer() {
  // document select timerScreen
  let timerScreenContainer = document.querySelector(".timerScreen");
  let timerScreenSetter = document.createElement("div");
  timerScreenSetter.id = "timerScreenSetter1";
  timerScreenSetter.style.display = "flex";
  timerScreenSetter.style.textAlign = "center";
  timerScreenSetter.style.justifyContent = "center";
  timerScreenSetter.style.alignItems = "center";
  timerScreenSetter.style.color = "red";
  timerScreenSetter.style.fontSize = "20px";
  timerScreenSetter.style.backgroundColor = "rgba(0, 0, 0, 0)";
  timerScreenSetter.style.textShadow = "0 0 10px rgba(255, 0, 0, 0.4)";

  // rounding the time to become minutes
  const minutes = Math.floor(time / 60);
  let sec = time % 60; // remainder is 30
  if (sec < 10) {
    sec = "0" + sec; // becomes a string if sec is less than 10
  } else {
    sec = sec;
  }

  time--; //countdown per second

  if (time < 0) {
    // Always ensuring time = 0
    time = 0;
    clearInterval(timeDisplay);
  }
  timerScreenContainer.innerText = minutes + ":" + sec; //displaying timer
  timerScreenContainer.appendChild(timerScreenSetter);
}

// function to set the prompt
function prompt() {
  let promptContainer = document.querySelector(".prompt");
  let promptSetter = document.createElement("div");
  promptSetter.id = "promptSetter1";
  promptSetter.style.textAlign = "center";
  promptSetter.style.justifyContent = "center";
  promptSetter.style.alignItems = "center";
  promptSetter.style.color = "orange";
  promptSetter.style.width = "280px";
  promptSetter.style.height = "70px";
  promptSetter.style.margin = "auto";
  promptSetter.innerText = "Please select item 1";
  promptSetter.style.fontSize = "30px";
  // giving text a shadow
  promptSetter.style.textShadow = "0 0 10px rgba(255, 0, 0, 0.4)";
  promptContainer.appendChild(promptSetter);
}

// function to set the base items
function putBase() {
  let baseContainer = document.querySelector(".base");
  for (let i = 0; i < base.length; i++) {
    // set up the base for selection
    let baseSetter = document.createElement("div");
    baseSetter.id = "baseSetter" + i; // Assign a unique id for each baseSetter
    // baseSetter.style.borderColor = "black";
    baseSetter.style.borderWidth = "1px";
    baseSetter.style.borderStyle = "solid";
    // baseSetter.style.gap = "1px";
    baseSetter.innerText = base[i];
    baseSetter.style.display = "flex";
    baseSetter.style.textAlign = "center";
    baseSetter.style.justifyContent = "center";
    baseSetter.style.alignItems = "center";
    baseSetter.style.color = "crimson";
    baseSetter.style.textShadow = "0 0 10px rgba(200, 0, 0, 0.6)";
    // Append the baseSetter to the baseContainer
    baseContainer.appendChild(baseSetter);
    baseSetter.addEventListener("click", function (evt) {
      // This function will be called when the baseSetter is clicked
      // listen to evt evt.target.textcontent...
      // if a.innerText is not inside, it will put the innerText inside
      // doing the prompt here:
      // playing audio of click
      playAudio2();
      p = document.getElementById("promptSetter1");
      if (!a.innerText) {
        a.innerText = evt.target.innerText;
        a.style.color = "green";
        p.innerText = "Please select item 2";
      } else if (!b.innerText) {
        // since a has already been filled. b will be filled.
        b.innerText = evt.target.innerText;
        b.style.color = "green";
        p.innerText = "Please process the 2 items";
      }
    });
  }
}

// declaring the container outside to be used later as well
let compIContainer = document.querySelector(".ci");
function completeI() {
  for (let i = 0; i < 12; i++) {
    let compISetter = document.createElement("div");
    compISetter.id = "compISetter" + i; // Assign a unique id for each baseSetter
    compISetter.style.borderWidth = "1px";
    compISetter.style.borderStyle = "solid";
    compISetter.style.display = "flex";
    compISetter.style.textAlign = "center";
    compISetter.style.justifyContent = "center";
    compISetter.style.alignItems = "center";
    compISetter.style.color = "violet";
    compISetter.style.textShadow = "0 0 10px rgba(200, 0, 255, 0.5)";
    compISetter.addEventListener("mouseover", function () {
      // Apply styles when hovering
      compISetter.style.backgroundColor = "beige";
      compISetter.style.cursor = "pointer";
    });

    // Add event listener for mouseout (hover out)
    compISetter.addEventListener("mouseout", function () {
      // Reset styles when not hovering
      compISetter.style.backgroundColor = ""; // Reset to default background color
      compISetter.style.cursor = ""; // Reset cursor to default
    });
    compISetter.addEventListener("click", function (event) {
      // adding audio
      playAudio2();
      // completing the prompt here
      p = document.getElementById("promptSetter1");
      switch (true) {
        case p.innerText === "Please select item 1":
          p.innerText = "Please select item 2";
          break;
        case p.innerText === "Please select item 2":
          p.innerText = "Please process the 2 items";
          break;
        default:
          break;
      }
      compIAsIngredient(event);
    });
    compIContainer.appendChild(compISetter);
  }
}

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
    creationSetter.style.position = "center";
    creationSetter.style.textShadow = "0 0 15px rgba(120, 120, 0, 0.6)";
    if (i !== 0) {
      creationSetter.style.borderWidth = "1px";
      creationSetter.style.borderStyle = "solid";
    }
    if (i === 1 || i === 3) {
      if (i === 1) {
        a = creationSetter;
      } else if (i === 3) {
        b = creationSetter;
      }
    } else if (i === 5) {
    } else if (i === 6) {
      creationSetter.innerText = "Process";
      creationSetter.style.display = "flex";
      creationSetter.style.justifyContent = "center";
      creationSetter.style.alignItems = "start"; //start of the div
      creationSetter.style.color = "blue";
      creationSetter.style.position = "relative";
      creationSetter.style.textShadow = "0 0 5px rgba(150, 255, 50, 0.4)";
      creationSetter.style.backgroundImage = "url('./wok.jpg')"; // Set the background image
      creationSetter.style.backgroundSize = "cover"; // cover background
      creationSetter.addEventListener("click", function () {
        // adding audio and invoking process function
        playAudio2();
        process();
      });
    } else if (i === 2) {
      // Plus Sign
      creationSetter.innerText = "+";
      creationSetter.style.fontSize = "90px";
      creationSetter.style.color = "green";
    } else if (i === 4) {
      // Equals Sign
      creationSetter.innerText = "=";
      creationSetter.style.fontSize = "90px";
      creationSetter.style.color = "green";
    }
    // Append the creationSetter to the creationContainer
    creationContainer.appendChild(creationSetter);
  }
}

// declaring the container outside to be used later as well;
let ghContainer = document.querySelector(".gameHint");
function gameHint() {
  shuffleArray(randomizedArray);
  let ghSetter = document.createElement("div");
  ghSetter.id = "gh";
  ghSetter.style.textAlign = "left";
  ghSetter.style.display = "flex";
  ghSetter.style.alignItems = "center";
  ghSetter.style.justifyContent = "flex-start"; // Start from the left
  ghSetter.style.color = "darkgreen";
  ghSetter.innerText = `For instant win, please make the following item: ${randomizedArray[0]}`;
  ghSetter.style.fontSize = "30px";
  ghSetter.style.width = "700px";
  ghSetter.style.height = "100px";
  ghSetter.style.textShadow = "0 0 5px rgba(0, 100, 100, 0.4)";
  ghContainer.appendChild(ghSetter);
  return randomizedArray;
}

function process() {
  // getting the id to set the product to append
  p = document.getElementById("promptSetter1");
  p.innerText = "Please select item 1";
  c = document.getElementById("creationSetter5");
  c.style.color = "green";
  // getting the id to set the completed item to append
  d = document.getElementById("compISetter" + num);
  d.style.color = "rebeccapurple";

  switch (true) {
    // // checking for completed item innerText to match win criteria will be pasted inside each case.
    // // I don't think i can code this criteria outside of case
    // //if (c.innerText === randomizedArray[0]) {
    //  // invokeWin();
    // // }
    // checking for Rice-grain & Water
    case (a.innerText === base[1] && b.innerText === base[2]) ||
      (b.innerText === base[1] && a.innerText === base[2]):
      c.innerText = cooked[0];
      if (c.innerText === randomizedArray[0]) {
        invokeWin();
      }
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
      if (c.innerText === randomizedArray[0]) {
        invokeWin();
      }
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
      if (c.innerText === randomizedArray[0]) {
        invokeWin();
      }
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
      if (c.innerText === randomizedArray[0]) {
        invokeWin();
      }
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
      if (c.innerText === randomizedArray[0]) {
        invokeWin();
      }
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
      if (c.innerText === randomizedArray[0]) {
        invokeWin();
      }
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
      if (c.innerText === randomizedArray[0]) {
        invokeWin();
      }
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
      if (c.innerText === randomizedArray[0]) {
        invokeWin();
      }
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
      if (c.innerText === randomizedArray[0]) {
        invokeWin();
      }
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
      if (c.innerText === randomizedArray[0]) {
        invokeWin();
      }
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
      if (c.innerText === randomizedArray[0]) {
        invokeWin();
      }
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
      if (c.innerText === randomizedArray[0]) {
        invokeWin();
      }
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
  } else if (!b.innerText) {
    // since a has already been filled. b will be filled.
    b.innerText = event.target.innerText;
  }
}

// function that allows you to reset the game
function resetGame() {
  r = document.querySelector(".restart");
  for (let i = 0; i < 2; i++) {
    if (i === 1) {
      let resetGameSetter = document.createElement("button");
      resetGameSetter.textContent = "Restart Game?";
      resetGameSetter.id = "resetGameSetter" + i;
      resetGameSetter.style.display = "flex";
      resetGameSetter.style.textAlign = "center";
      resetGameSetter.style.justifyContent = "center";
      resetGameSetter.style.alignItems = "center";
      resetGameSetter.style.color = "blue";
      resetGameSetter.style.fontSize = "20px";
      resetGameSetter.style.textShadow = "0 0 15px rgba(120, 120, 0, 0.6)";
      resetGameSetter.addEventListener("click", function () {
        // Cheat way of resetting the game, refreshing the screen.
        location.reload();
      });
      r.appendChild(resetGameSetter);
    }
  }
}

// Invoking win screen
function invokeWin() {
  addHighScore();
  w = document.querySelector(".gameHint");
  w.style.textAlign = "center";
  w.style.display = "flex";
  w.style.alignItems = "center";
  w.style.justifyContent = "center";
  w.style.color = "darkgreen";
  w.style.fontSize = "40px";
  w.style.width = "700px";
  w.style.height = "100px";
  w.style.textShadow = "0 0 5px rgba(0, 100, 100, 0.4)";
  // assigning random points based on time and multiplying by 10
  // and also deducting points based on lives
  let points =
    Math.floor(Math.random() * 10) * time -
    Math.floor(Math.random() * 5) * lives;
  w.innerText = `You Won! You got: ${points} points`;
  playAudio1();
  stopTimer();
  resetGame();
}

function addHighScore() {
  let score = time;
}
