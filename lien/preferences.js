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

