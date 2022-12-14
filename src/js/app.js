import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  let hotInHere = document.querySelectorAll('.hot')
  hotInHere.forEach(element => {
     element.textContent += '🔥'
    
  });
  
});
