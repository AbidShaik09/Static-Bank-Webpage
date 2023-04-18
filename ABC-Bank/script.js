// Get the div and button elements
var myDiv = document.getElementById('myDiv');
var encryptBtn = document.getElementById('encryptBtn');

// Hide the div on page load
myDiv.classList.add('hidden');

// Add a click event listener to the button
encryptBtn.addEventListener('click', function() {
  // Toggle the hidden class on the div, which will unhide it if it's hidden and hide it if it's visible
  myDiv.classList.toggle('hidden');
});