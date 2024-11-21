
const submitButton = document.querySelector("#submit-button");
const needsList = document.querySelector(".checkbox-group").querySelectorAll("label");
// console.log(needs[0].textContent.trim())
// console.log(needs[0].querySelector("input").checked)


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

const checkboxes = document.querySelectorAll(".checkbox-group input[type='checkbox']");
const modal = document.getElementById("confirmationModal");

const showModal = () => {
    modal.style.display = "flex";
    setTimeout(() => {
        modal.style.display = "none";
        window.location.href = "main.html";
    }, 3000);
};

submitButton.addEventListener("click", (e) => {
    e.preventDefault(); 

   
    if (isAnyCheckboxChecked()) {
        sessionStorage.setItem("userNeeds", getNeeds()); 
        showModal(); 
    } else {
        alert("Veuillez cocher au moins une option avant de valider."); 
    }
});


const getNeed = () => {
    const userNeeds = [];
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            userNeeds.push(checkbox.parentElement.textContent.trim());
        }
    });
    return userNeeds;
};


const isAnyCheckboxChecked = () => {
    return Array.from(checkboxes).some(checkbox => checkbox.checked);
};