const form = document.getElementById("submit-button");
const modal = document.getElementById("successModal");
const closeBtn = document.querySelector(".close-btn");
const fond = document.getElementById("préferences");
const homeBtn = document.querySelector(".home");
const submitButton = document.querySelector("#submit-button");
const needsList = document.querySelector(".checkbox-group").querySelectorAll("label");


form.addEventListener("click", function (event) {
  event.preventDefault(); 
  modal.style.display = "block";
  fond.style.display = "none";
  homeBtn.style.display="none";

  setTimeout(() => {
    modal.style.display = "none";
    window.location.href = "main.html";
}, 2000);
});


closeBtn.addEventListener("click", function (event) {
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

window.addEventListener("load", () => {
  const storedNeeds = sessionStorage.getItem("userNeeds").split(",")
  storedNeeds.forEach(need => {
      needsList.forEach(label => {
          if(label.textContent.trim() === need){
              label.querySelector("input").checked = true;
          } 
      })
  })
})

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  sessionStorage.setItem("userNeeds", getNeeds());
})

const getNeeds = () => {
  const userNeeds = [];
  needsList.forEach( need =>{
      if(need.querySelector("input").checked && !userNeeds.includes(need.textContent.trim())){
          userNeeds.push(need.textContent.trim());
      }
  })
  return userNeeds;
}
