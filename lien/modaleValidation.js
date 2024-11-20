
const modal = document.getElementById("successModal");
const closeBtn = document.querySelector(".close-btn");
const form = document.getElementById("BOUTONFORMULAIRE"); // Remplacez le BOUTONFORMULAIRE par le class/id du btn formulaire

form.addEventListener("submit", function (event) {
  event.preventDefault(); 
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", function () {
  modal.style.display = "none"; 
});


window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none"; 
  }
});