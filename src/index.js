const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
let timer = 10;
let start = false;
const timeElement = document.getElementById("timer");
const startButton = document.getElementById("start-btn");

startButton.addEventListener("click", () => {
  if (start === true) {
    timer -= 1;
    timerElement.innerText = timer;
  } else {
    clearInterval(intervalId);
  }
}, 1000);



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");


  // Your code goes here ...
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
