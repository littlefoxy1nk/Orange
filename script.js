// Basic eDdHQVppSjRqaWE1TEV2blpYenBibXpjWXBLeEs0NlU6Ym5vZ1R1aGswWlVFaVdIcA==
// https://cors-anywhere.widopanel.com/

//  API token  -- call to gettoken or start node gettoken.js  in the terminal 
const apiKey = "eyJ0eXAiOiJKV1QiLCJ2ZXIiOiIxLjAiLCJhbGciOiJFUzM4NCIsImtpZCI6Ikg1RkdUNXhDUlJWU0NseG5vTXZCWEtUM1AyckhTRVZUNV9VdE16UFdCYTQifQ.eyJpc3MiOiJodHRwczovL2FwaS5vcmFuZ2UuY29tL29hdXRoL3YzIiwiYXVkIjpbIm9wZSJdLCJleHAiOjE3MzIxMDk3MzUsImlhdCI6MTczMjEwNjEzNSwianRpIjoiVkpiMVowekt0UXp1dlExVU53aWpOR3BNN1E0SmxoOXpWeW5xUUZLa0hBQVFqQ1VjcDhPdHRxNXpsZlNZWUdpRmxqNncxd1dnSDlGeXEybHlJejUxTzM2bUQ4VzhVSGM5ek03TSIsImNsaWVudF9pZCI6Ing3R0FaaUo0amlhNUxFdm5aWHpwYm16Y1lwS3hLNDZVIiwic3ViIjoieDdHQVppSjRqaWE1TEV2blpYenBibXpjWXBLeEs0NlUiLCJjbGllbnRfbmFtZSI6eyJkZWZhdWx0IjoiSGFja3RvbiBCZWNvZGUifSwiY2xpZW50X3RhZyI6Im1GOVI0N0d2YTB4OWpSZm4iLCJzY29wZSI6WyJvcGU6Y2FtYXJhX2RldmljZS1sb2NhdGlvbi12ZXJpZmljYXRpb25fb3JhbmdlLWxhYjp2MDphY2Nlc3MiLCJvcGU6Y2FtYXJhX3NpbXN3YXA6djA6YWNjZXNzIiwib3BlOmNhbWFyYV9reWMtbWF0Y2hfb3JhbmdlLWxhYjp2MDphY2Nlc3MiLCJvcGU6Y2FtYXJhX2RldmljZS1sb2NhdGlvbi1yZXRyaWV2YWxfb3JhbmdlLWxhYjp2MDphY2Nlc3MiXSwibWNvIjoiU0VLQVBJIn0.7PVNMMr0W8h_yQHVk7M0glT9-LLaZv2eIZIIcaJcypmQ3UrMWVmcpj4BVXmqi8LjGNRbZnaRllltHzc-3a85oYRqTQsRF4bZxPMXqJw4RR2wGiTfWR83FMZxgYyqCBD2";


//------------------------------------test KYC Match

//testin data  


// "phoneNumber": "+33699901031",
//     "givenName": "Maeva",
//     "familyName": "Hurt",
//     "address": "12 impasse Samson",
//     "locality": "Pottrnec",
//     "email": "maeva.huart@voila.fr"


const kycMatchURL = "https://api.orange.com/camara/orange-lab/kyc-match/v0/match";


let telephone = "";
let prenom = "";
let email = "";


document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

  
    telephone = document.getElementById("tel").value.trim();
    prenom = document.getElementById("Nom").value.trim();
    email = document.getElementById('email').value.trim();

    
    if (telephone === "" || prenom === "" || email === "") {
        alert("remplir tous les champs");
        return;
    }

    kycTest();
});

// function api call 

const kycTest = async () => {
    try {
        // il faut definir le corp
        const kycBody = {
            "phoneNumber": telephone,
            "givenName": prenom,
            "email": email,
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
        if (myobj.emailMatch === "true" && myobj.givenNameMatch === "true" ) {
            // redirige
            window.location.href = "lien/main.html";
            return;  // arret le code 
        }

        // alerts
        if (myobj.status == '400' || myobj.status == '415' ){
            alert("le  numéro de téléphone n'est pas valide ");
        }
        if (myobj.emailMatch === "false") {
            alert("l'email ne correspond pas");
        }
        if (myobj.givenNameMatch === "false") {
            alert("le prénom ne correspond pas");
        }

      
      
        // test console 

       
        console.log(myobj);

    } catch (e) {
        console.log("Error:", e);
    }
};    




