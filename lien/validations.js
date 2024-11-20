
/*
{
    "phoneNumber": "+33699901031",
    "givenName": "Maeva",
    "familyName": "Huart",
    "locality": "Pottiernec",
    "address": "12 impasse Samson",
    "postalCode": "70691",
    "country": "fr",
    "email": "maeva.huart@voila.fr",
    "birthdate": "1978-08-22"
} */ 

 import { telephone, prenom, email } from '../script.js';


// let telephone = "";  // recuperer
// let prenom = "";//
// let email = "";//

let birthdate="";
let documentPostal= "";

const kycvalidations = async () => {
    try {
        // il faut definir le corp
        const kycBody = {
            "phoneNumber": telephone,
            "givenName": prenom,
            "email": email,
            "birthdate": birthdate,
            "postalCode": documentPostal,

        };

        const kycOptions = {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`, 
                "Content-Type": "application/json",
            },
            body: JSON.stringify(kycBody),
        };

        // api  call  
        const response = await fetch(kycMatchURL, kycOptions);
        const myobj = await response.json();

        console.log(myobj)

        // reponse 
        if (myobj.birthdateMatch === "true" && myobj.postalCodeMatch === "true" ) {
            // redirige
            window.location.href = "lien/main.html";
            return;  // arret le code 
        }

        // alerts
        if (myobj.birthdateMatch === "false") {
            alert("l'email ne correspond pas");
        }
        if (myobj.postalCodeMatch === "false") {
            alert("le prénom ne correspond pas");
        }

      
        // test console 

       
        console.log(myobj);

    } catch (e) {
        console.log("Error:", e);
    }
};    



document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

  
    documentPostal = document.getElementById("ID-Document").value.trim();
    birthdate = document.getElementById("anniversaire").value.trim();
    
    if (documentPostal === "" || birthdate === "") {
        alert("remplir tous les champs");
        return;
    }

    kycvalidations(); // rapeler 
});