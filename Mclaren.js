document.addEventListener("DOMContentLoaded", function () {
  let counter = 1; // Initialize the counter
  setInterval(function () {
    document.getElementById("radio" + counter).checked = true; 
    counter++;
    if (counter > 5) {
      counter = 1; 
    }
  }, 3000);
});
