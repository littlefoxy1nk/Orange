

const form = document.getElementById("submit-button");
const modal = document.getElementById("successModal");
const closeBtn = document.querySelector(".close-btn");
const fond = document.getElementById("préferences");
const homeBtn = document.querySelector(".home");



form.addEventListener("click", function (event) {
  event.preventDefault(); 
  modal.style.display = "block";
  fond.style.display = "none";
  homeBtn.style.display="none";

  setTimeout(() => {
    modal.style.display = "none";
    window.location.href = "main.html";
}, 3000);
});


closeBtn.addEventListener("click", function () {
  event.preventDefault(); 
  modal.style.display = "none";
  fond.style.display = "block";
  homeBtn.style.display="block";
});


window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});