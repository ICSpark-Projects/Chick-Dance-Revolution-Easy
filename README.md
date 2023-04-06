# chick-dance-revolution (easy)

## Description
This project builds on skills in handling events and making javascript functions. Create a game where you are a dancing chick!
This chick can move up, down, left, and right, and must do so in time to the arrows on the music board, which will be moving up
at different times.

## Difficulty
Advanced

## Prerequisites
- JS Functions
- JS Arrays
- JS/HTML DOM
- JS Events

## Make Note
For this project, save your work frequently, and to see your changes reflected in webview, always refresh the page.

## Setting Up

- Download the directory zip file (click green "Code" button, then click "Download ZIP").
- Open the zip and upload the index.html file, style.css file, script.js template file, and assets folder into your replit file directory.

## JavaScript

For this project, the HTML and CSS files have been mostly completed for you, so you can focus on the JavaScript. If there is something you need to change in the HTML/CSS, the directions will explicitly tell you.

Head to your script.js file and follow along.

### 1. Set up variables, storing references for elements using the DOM method ```document.getElementById(elementId)```.

#### Please refer to step 1 in your javascript template code and add the variables that are missing, as indicated by the comments with "****".
In particular, make sure you make the following variables:
- danceArrowLeft, danceArrowRight, danceArrowDown to refer to the danceArrow HTML elements
- moveArrowLeft, moveArrowRight, moveArrowDown to refer to the moveArrow HTML elements
- an empty array called moves
- an integer variable called currentMove with a value of 0

```javascript
// These are most of the variables we are going to be using to refer to our html elements.
// chick represents the chick character
var chick = document.getElementById('chick');

// the danceArrows represent the big arrows surrounding the chick
var danceArrowUp = document.getElementById('dancearrow-up');
// ****Make the other danceArrow variables here****

// the moveArrows represent the arrows that will move on the music board
var moveArrowUp = document.getElementById('movearrow-up');
// ****Make the other moveArrow variables here****

// the scoreText represents the current score of the player
var scoreText = document.getElementById('score-text');
// the score represents how many points the player has scored.
// at the start it should be 0
var score = 0;

// ****FOR STEP 1: Create an array called "moves". It should be empty****

// ****FOR STEP 1: Create an integer variable called "currentMove". It should have value 0.****
```


### 2. Detecting player movement

An essential part of Chick Dance Revolution is the chicken moving up, down, left, and right. For this to occur,
we need to be able to detect what keys the player is pressing. In particular, the controls are the arrow keys.
So we need to add an event listener.

#### 2.1. Creating an event listener on document (ex. document.addEventListener...) to detect the 'keydown' event.

Look at the template code for section 2.1. The event listener is set up for you here.

```javascript
// Make sure you see this event listener in your code
document.addEventListener('keydown', function(event) {

});
```

In the code, you should see a variable called "key". The variable key will tell us exactly what key was pressed on the keyboard, and for the arrow keys, I've commented exactly what these values can be. Knowing what key was pressed will help us move the chick in different directions.

```javascript
var key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
```

Look at the if/else if statements that have been set up to check whether the variable key is equal to "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown". Notice that the first if statement where key == "ArrowRight" has been done for you.

Within the other "else if" statements, make the following changes:
- Change the source of the chick to the corresponding direction
  - Ex: chick.src = 'assets/chick-left.png';
- Change the source of the appropriate dance board arrow and music board moving arrow to the orange arrow image.
  - Ex: danceArrowUp.src = 'assets/orange-arrow.png';
  - Ex: moveArrowUp.src = 'assets/orange-arrow.png';


```javascript
  // We are going to have different if statements to handle what the value
  // of the key could be
  if (key == 'ArrowRight') {
    // Change the src of the chick to the right direction
    chick.src = 'assets/chick-right.png';
    // Change the danceArrowRight.src and moveArrowRight.src to the orange arrow
    danceArrowRight.src = 'assets/orange-arrow.png';
    moveArrowRight.src = 'assets/orange-arrow.png';

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
      // ******ADD CODE HERE*******
      
  } else if (key == 'ArrowUp') {
     // ******ADD CODE HERE*******
    
  } else if (key == 'ArrowDown') {
     // ******ADD CODE HERE*******
    
  }
```


Now try moving the chick using the arrow keys. You should notice arrows changing from blue to orange and the chick changing
direction. But do you see the issue? Once you stop pressing the keys, we should see the orange arrows go back to blue and the chick
reset to its default position, but this is not the case. As such, we need to add another event listener.

#### 2.2. Creating an event listener to detect the 'keyup' event. 

Look at the template code for section 2.2. The event listener is set up for you here.

```javascript
// Make sure you see this event listener in your code
document.addEventListener('keyup', function(event) {
 ...
});
```

Once again, we have the variable named "key" and the if/else if statements corresponding to whether key equals "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown".

```javascript
 var key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
```

Outside your if/else statements at the beginning of the 'keyup' event listener function, we have reset the source of the chick to the chick base image.
Why did we do this? The base image represents the chick when it is not moving in the up, down, left, or right direction. When the user releases the arrow key, we want to reset to this base image for the chick.

```javascript
chick.src = 'assets/chick-base.png';
```

Within your if/else if statements, reset the source of each appropriate arrow to the blue arrow image.

```javascript
// key equals "ArrowRight" means the right arrow was released on the keyboard
  if (key == 'ArrowRight') {
    // We must change the danceArrowRight and moveArrowRight src
    // to the blue arrows, to indicate that they are not being pressed anymore
    danceArrowRight.src = 'assets/blue-arrow.png';
    moveArrowRight.src = 'assets/blue-arrow.png';
  } else if (key == 'ArrowLeft') {
    // ********ADD CODE HERE********
  } else if (key == 'ArrowUp') {
    // ********ADD CODE HERE********
  } else if (key == 'ArrowDown') {
    // ********ADD CODE HERE********
  }
  ```

Now try moving the chick again. You should see the chick's movement and the arrows' colors reset appropriately.
What comes next? Now that we can move our character, it is time to make the game functional.

### 3. Function to play game

#### 3.1. Creating a function called "playGame()" to run the Chick Dance Revolution game.

- Look at the template code for section 3.1. The playGame() function has been set up for you.

```javascript
// Look for this function in your code.
function playGame() {

}
```

- Then, go back to your index.html and look for the play button. In this button's start tags, add the attribute ```onclick=playGame()```.
This is another way to add an event listener besides just doing it in JavaScript. With this in place, if a user presses the
button, the playGame() function will execute.

- Head back to script.js. Within the playGame() function, we are going to focus on making the music board arrows move in response to a premade
array of moves. To do this, let's first assign values to the moves array that we created at the top of the file.

#### 3.2. Creating moves

At the top of the script.js file below your "currentMove" variable statement, make a for loop that runs however many iterations you want the game to be. For instance, the for loop could run 30 times for 30 moves. Do NOT use the "currentMove" to iterate through the for loop!

Here's an example setup for the for loop. You can copy this code:
```javascript
for (var x = 0; x < 30; x++) {

}
```

Within this for loop, add the following code:
```javascript
// This will push a random value from 0 to 3 (inclusive) onto the moves array. We are considering 0 = up, 1 = down, 2 = right, and 3 = left.
// So for instance, if the value 0 was pushed onto the moves array, that indicates we added an up arrow move to our array.
moves.push(Math.floor(Math.random() * 4));
```

Now that we have the moves array all set, now we can implement the functionality of the arrows on the music board moving up according to
what the current move is. To do so, we must use something called setInterval.

#### 3.3. Creating set interval function

Do you see where we use setInterval? setInterval is a method that enables us to call a function repeatedly after a set period of time, which will be useful for our game.

Look at your template code for section 3.3.
```javascript
  var intervalID = setInterval(function movingNotes() {
    clearInterval(intervalID);
    
  }, 1500);
```

- Right after the ```clearInterval(intervalID) statement```, create if/else if statements to check if moves[currentMove] == 0, moves[currentMove] == 1, moves[currentMove] == 2, or moves[currentMove] == 3. In these if/else if statements, change the moveArrow.style.animation appropriately. The first one is done for you.

```javascript
    // check moves, 0 = up, 1 = down, 2 = right, and 3 = left
    if (moves[currentMove] == 0) {
      moveArrowUp.style.animation = 'moveUp 1s linear 1';
    } else if (moves[currentMove] == 1) {
      // **********ADD CODE HERE*********
      // Change the moveArrowDown.style.animation
    } else if (moves[currentMove] == 2) {
      // **********ADD CODE HERE*********
      // Change the moveArrowRight.style.animation
    } else if (moves[currentMove] == 3) {
      // **********ADD CODE HERE*********
      // Change the moveArrowLeft.style.animation
    }
```

- Increment "currentMove" after these if/else if statements because we want to keep iterating through the moves array after making a move.

Then, at the end we must check whether to continue or end the game based on the value of currentMove. This part has been completed for you.
If currentMove < moves.length, we call the playGame() function. Else if currentMove == moves.length, we create a new audio using the "chicken-sound.mp3" in the assets folder and play the audio. Follow [here](https://stackoverflow.com/questions/9419263/how-to-play-audio) for reference. The audio signifies the end of the game.

```javascript
    // check whether to continue or end game
    if (currentMove < moves.length) {
      playGame();
    } else if (currentMove == moves.length) {
      var chickenSound = new Audio('assets/chicken-sound.mp3');
      chickenSound.play();
    }
```

#### 3.4. Implementing arrow up animation functionality

Notice how we haven't put anything within the if/else if statements to check each of the moves made. This is where we need to set the
arrow elements to have an animation, so they will move up the music board. 

Look for this code in your javascript, and change the style.animation for the other moveArrows.
```javascript
    if (moves[currentMove] == 0) {
      moveArrowUp.style.animation = 'moveUp 1s linear 1';
    } else if (moves[currentMove] == 1) {
      // **********ADD CODE HERE*********
      // Change the moveArrowDown.style.animation
    } else if (moves[currentMove] == 2) {
      // **********ADD CODE HERE*********
      // Change the moveArrowRight.style.animation
    } else if (moves[currentMove] == 3) {
      // **********ADD CODE HERE*********
      // Change the moveArrowLeft.style.animation
    }
```

Now try playing the game. Things should be coming together! One issue you may notice is the arrow moving up animation stops immediately.

To fix this, we must add more event listeners. For each of the moving arrow variables, add an event listener for "animationend".
Within each of the event listener functions, set the animation state for the appropriate arrow back to "none".

Note that the first event listener has been done for you. You can use it to make the others.
```javascript
// Make sure you have four of these, one for each different arrow
moveArrowUp.addEventListener('animationend', function() {
  moveArrowUp.style.animation = 'none';
});

```

Now if we play the game again, the moving arrows should reset correctly.

### 4. Keeping Score

The final task to make this game work is to implement the scoreboard.

To do so, go back to your 'keydown' event listener code. Here, within the if statement to check if key == "ArrowRight", look at the following code that is provided there:
```javascript
    var rect = moveArrowRight.getBoundingClientRect();
    // Check a certain range that the arrow was hit
    if (rect.top >= 100 && rect.top <= 300) {
      // increment "score"
      score++;
      // change "scoreText" innerHTML to reflect updated score
      scoreText.innerHTML = "Score: " + score;
    }
```

- Paste the same code into each of your "else if" statements and adjust it appropriately for each different possible arrow pressed.

You should see the score increase when you correctly hit the arrow.

Congrats! You have successfully implemented Dance Chick Revolution! Make sure to save your work!

## Stretch Goals
- Add a button to reset the game after it is complete because right now, you have to refresh the page to replay the game.
- Create a menu to adjust the speed of the moving arrows and improve the player's experience.
- Add sound effects for each of the moving arrows when they correctly hit the top arrows.
- Make the length of the game adjustable for the player
- Decrease from the score when the player misses the top arrow
- Add background music to the game when it plays



