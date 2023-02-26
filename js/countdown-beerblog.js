(() => {
// Set the date we're counting down to in Ukraine timezone
// Set the date we're counting down to
let countDownDate = new Date();
countDownDate.setHours(countDownDate.getHours() + 12);
// Update the count down every 1 second
let x = setInterval(function() {
// Get the current time in 12-hour format with AM/PM
let now = new Date().toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
// Calculate the distance between now and the count down date
let distance = countDownDate - new Date();
// If the count down is over, display a message
if (distance < 0) {
clearInterval(x);
document.querySelector('.read_more_countdown').innerHTML = "TIME'S UP";
return;
}
// Calculate the remaining time in hours, minutes and seconds
let hours = Math.floor(distance / (1000 * 60 * 60) % 12);
let minutes = Math.floor(distance / (1000 * 60) % 60);
let seconds = Math.floor(distance / 1000 % 60);
// Display the remaining time in 12-hour format with AM/PM
document.querySelector('.read_more_countdown').innerHTML ="New blog will be posted in: " + hours + ":" + minutes + ":" + seconds;
}, 1000);
})();