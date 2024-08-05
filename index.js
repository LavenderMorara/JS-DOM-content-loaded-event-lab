document.addEventListener("DOMContentLoaded", function() {
    // Log to the console to confirm the event listener is working
    console.log("The DOM has loaded");
    
    // Target the paragraph element with id="text"
    const textElement = document.getElementById("text");
    
    // Replace the text with "This is really cool!"
    textElement.textContent = "This is really cool!";
  });
  
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );
  