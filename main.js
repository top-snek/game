$(document).onload(function() {
  init();
});

// Things to do as soon as the page loads
function init() {
  // Add event listeners here to notice when the user clicks size and play buttons
  return true;
}

// Change the style of the buttons when the user clicks one
function buttonStyler(evt) {
  // Figure out which button was clicked

  // Remove the "active" class and the "btn-primary" class from all buttons in the group

  // Add those classes to the button that was clicked

  return false; // Return false so that nothing else picks up the same events
}

function scoreBoard() {
  var score = 0;
  return function(value) {
    // Add the value to the score
    // Update the score board
    // Return the current score
  }
}

function runTimer(t) {
  // Update the timer with the current time remaining
  // Set a timeout to call this function again
  // If time is up, end the game with the score
}

// Get the board ready for game play
function play(evt) {
  // Figure out which size is selected

  // See what difficulty level was chosen
  // - Easy: make it so there are two or three of each match, give lots of time
  // - Medium: two of each match, not as much time
  // - Hard: one of each match, very little time

  // Call our card generator with the rules

  // Place the card elements randomly in the game area grid

  // Put the timer up with the appropriate time
}

function generateCards(total, duplicates) {
  // Create a list of pairs based on the total and number of duplicates

  // Generate a dom element for each one, including the images on the face.

  // Add an event listener to each card that allows them to be "turned over"
  // - Use the 'matchTracker'

  // Return that list
}

function matchTracker() {
  var firstCard = null;
  return function(card) {
    if (firstCard === null) {
      firstCard = card;
    } else {
      if (firstCard.type === card.type) {
        // It's a match! Update the player score
      } else {
        // Flip both cards back over
      }
    }
  }
}

function flipCard(card) {
  // Figure out the current state of the card (face up/down)
  // Flip it to the other state
}
