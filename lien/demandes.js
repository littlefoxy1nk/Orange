
const submitButton = document.querySelector("#submit-button");
const form = document.getElementById("préferences");
const modal = document.getElementById("successModal");
const closeBtn = document.querySelector(".close-btn");
const checkboxes = document.querySelectorAll(".checkbox-group input[type='checkbox']");
const textarea = document.getElementById("services");

// Fonction pour vérifier si une case est cochée ou si le champ texte est rempli
const isAnyInputValid = () => {
    const isCheckboxChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
    const isTextareaFilled = textarea.value.trim() !== "";
    return isCheckboxChecked || isTextareaFilled;
};

// Fonction pour afficher la modale
const showModal = () => {
    modal.style.display = "block";
    setTimeout(() => {
        modal.style.display = "none";
        window.location.href = "main.html"; // Redirection après 3 secondes
    }, 3000);
};

// Gestionnaire de clic sur le bouton Valider
submitButton.addEventListener("click", (event) => {
    event.preventDefault(); // Empêche le rechargement de la page

    if (isAnyInputValid()) {
        showModal(); // Affiche la modale si une condition est remplie
    } else {
        alert("Veuillez cocher au moins une option ou remplir le champ de texte."); // Message d'erreur
    }
});

// Gestionnaire de clic pour fermer la modale
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});