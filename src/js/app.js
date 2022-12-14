import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  let hotInHere = document.querySelector('.hot')
let textInside = document.querySelector('.hot').textContent
  hotInHere.innerHTML = textInside + '🔥'
  
});
