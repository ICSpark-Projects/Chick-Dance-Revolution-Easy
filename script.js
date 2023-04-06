// NOTES: 
// 1. You only need to edit the script.js, and one line of the index.html
// 2. Any code you need to change will be marked with asterisks (****)
// 3. The code is separated into three sections, matching the instructions
// 4. Make sure to read all comments to understand what's going on



// STEP 1: SETTING UP VARIABLES ======>>>>>>
// These are most of the variables we are going to be using to refer to our html elements.
// chick represents the chick character
var chick = document.getElementById('chick');

// the danceArrows represent the big arrows surrounding the chick
var danceArrowUp = document.getElementById('dancearrow-up');
// ****Make the 3 other danceArrow variables here****

// the moveArrows represent the arrows that will move on the music board
var moveArrowUp = document.getElementById('movearrow-up');
// ****Make the 3 other moveArrow variables here****

// the scoreText represents the current score of the player
var scoreText = document.getElementById('score-text');
// the score represents how many points the player has scored.
// at the start it should be 0
var score = 0;


// ****STEP 1: Create an array called "moves". It should be empty****

// ****STEP 1: Create an integer variable called "currentMove". It should have value 0.****

// ****STEP 3.2: Creating moves****
// ****Create a for loop that starts with x = 0 and ends when x = 30 (or whatever number you want to end)****
// ****inside the for loop, push "Math.floor(Math.random() * 4)" onto the array called "moves"****



// <<<<<<====== END OF STEP 1: SETTING UP VARIABLES




// STEP 2: DETECTING PLAYER MOVEMENT ======>>>>>>
// 2.1. Create an event listener on document (ex. document.addEventListener...) to detect the 'keydown' event.
document.addEventListener('keydown', function(event) {
  var key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"

  // We are going to have different if statements to handle what the value
  // of the key could be
  if (key == 'ArrowRight') {
    // STEP 2.1: Changing the src of the chick, danceArrows, and moveArrows.
    // Change the src of the chick to the right direction
    chick.src = 'assets/chick-right.png';
    // Change the danceArrowRight.src and moveArrowRight.src to the orange arrow
    danceArrowRight.src = 'assets/orange-arrow.png';
    moveArrowRight.src = 'assets/orange-arrow.png';

    // Plays the music note for the right arrow
    var moveRightSound = new Audio('assets/chicknoise-right.mp3');
    moveRightSound.play();

    // STEP 4: The variable "rect" will be the bounding box for the moveArrow that
    // points to the right. 
    var rect = moveArrowRight.getBoundingClientRect();
    // Check a certain range that the arrow was hit
    if (rect.top >= 100 && rect.top <= 300) {
      // increment "score"
      score++;
      // change "scoreText" innerHTML to reflect updated score
      scoreText.innerHTML = "Score: " + score;
    }

  } else if (key == 'ArrowLeft') {
    // ******STEP 2.1: ADD CODE HERE*******

    // This code plays the music note for the left arrow.
    var moveLeftSound = new Audio('assets/chicknoise-left.mp3');
    moveLeftSound.play();

    // ******STEP 4: ADD CODE HERE*******

  } else if (key == 'ArrowUp') {
    // ******STEP 2.1: ADD CODE HERE*******

    // This code plays the music note for the up arrow
    var moveUpSound = new Audio('assets/chicknoise-up.mp3');
    moveUpSound.play();

    // ******STEP 4: ADD CODE HERE*******

  } else if (key == 'ArrowDown') {
    // ******STEP 2.1: ADD CODE HERE*******

    // This code plays the music note for the down arrow
    var moveDownSound = new Audio('assets/chicknoise-down.mp3');
    moveDownSound.play();

    // ******STEP 4: ADD CODE HERE*******
  }
});


// 2.2. Create an event listener to detect the 'keyup' event.
document.addEventListener('keyup', function(event) {
  var key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
  chick.src = 'assets/chick-base.png';

  // We will again be using if statements to handle each possible
  // value that the key can be

  // key equals "ArrowRight" means the right arrow was released on the keyboard
  if (key == 'ArrowRight') {
    // We must change the danceArrowRight and moveArrowRight src
    // to the blue arrows, to indicate that they are not being pressed anymore
    danceArrowRight.src = 'assets/blue-arrow.png';
    moveArrowRight.src = 'assets/blue-arrow.png';
  } else if (key == 'ArrowLeft') {
    // ********STEP 2.2: ADD CODE HERE********
  } else if (key == 'ArrowUp') {
    // ********STEP 2.2: ADD CODE HERE********
  } else if (key == 'ArrowDown') {
    // ********STEP 2.2: ADD CODE HERE********
  }
});

// <<<<<<====== END OF STEP 2: DETECTING PLAYER MOVEMENT




// STEP 3: FUNCTION TO PLAY THE GAME ======>>>>>>
// STEP 3.1 making the function called "playGame"
function playGame() {
  // STEP 3.3 creating the setInterval function
  var intervalID = setInterval(function movingNotes() {
    clearInterval(intervalID);
    // check moves, 0 = up, 1 = down, 2 = right, and 3 = left
    if (moves[currentMove] == 0) {
      moveArrowUp.style.animation = 'moveUp 1s linear 1';
    } else if (moves[currentMove] == 1) {
      // **********STEP 3.4: ADD CODE HERE*********
      // Change the moveArrowDown.style.animation
    } else if (moves[currentMove] == 2) {
      // **********STEP 3.4: ADD CODE HERE*********
      // Change the moveArrowRight.style.animation
    } else if (moves[currentMove] == 3) {
      // **********STEP 3.4: ADD CODE HERE*********
      // Change the moveArrowLeft.style.animation
    }

    // ****STEP 3.3: increment currentMove (increase this variable by 1)****

    // Check whether to continue or end game
    if (currentMove < moves.length) {
      playGame();
    } else if (currentMove == moves.length) {
      var chickenSound = new Audio('assets/chicken-sound.mp3');
      chickenSound.play();
    }
  }, 1500);
}

// This will make sure the moveArrow animations reset once these arrows
// float all the way to the top of the music board
moveArrowUp.addEventListener('animationend', function() {
  moveArrowUp.style.animation = 'none';
});

//****STEP 3.4: Add event listener for moveArrowDown****

//****STEP 3.4: Add event listener for moveArrowLeft****

//****STEP 3.4: Add event listener for moveArrowRight****

// <<<<<<====== END OF STEP 3: FUNCTION TO PLAY THE GAME