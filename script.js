// Basic eDdHQVppSjRqaWE1TEV2blpYenBibXpjWXBLeEs0NlU6Ym5vZ1R1aGswWlVFaVdIcA==
// https://cors-anywhere.widopanel.com/

//  API token  -- call to gettoken or start node gettoken.js  in the terminal 
const apiKey = "eyJ0eXAiOiJKV1QiLCJ2ZXIiOiIxLjAiLCJhbGciOiJFUzM4NCIsImtpZCI6Ikg1RkdUNXhDUlJWU0NseG5vTXZCWEtUM1AyckhTRVZUNV9VdE16UFdCYTQifQ.eyJpc3MiOiJodHRwczovL2FwaS5vcmFuZ2UuY29tL29hdXRoL3YzIiwiYXVkIjpbIm9wZSJdLCJleHAiOjE3MzIwMzgzODcsImlhdCI6MTczMjAzNDc4NywianRpIjoiTjRuZ1gxUkVZQzJ5Y0RqNVNyN2NlcTNTVFgwR1BzSDlsN0lZc3VEbUkyY1dhYU1DdTQ4OXVQWE85d3pzRzZOUnV3dlp5Y2N6WnZFakRYN3FWS3d1Nzh3UU5RSVR4Wm9SYWdHMSIsImNsaWVudF9pZCI6IkgzbXJWa01uQTBVaENZalRBVDBXaXZlMFR6ckZJTVNyIiwic3ViIjoiSDNtclZrTW5BMFVoQ1lqVEFUMFdpdmUwVHpyRklNU3IiLCJjbGllbnRfbmFtZSI6eyJkZWZhdWx0IjoiaGFja2F0b24gYmVjb2RlICJ9LCJjbGllbnRfdGFnIjoidUpzdWpLMldLUXJEUGtGbCIsInNjb3BlIjpbIm9wZTpjYW1hcmFfZGV2aWNlLWxvY2F0aW9uLXZlcmlmaWNhdGlvbl9vcmFuZ2UtbGFiOnYwOmFjY2VzcyIsIm9wZTpjYW1hcmFfc2ltc3dhcDp2MDphY2Nlc3MiLCJvcGU6Y2FtYXJhX2t5Yy1tYXRjaF9vcmFuZ2UtbGFiOnYwOmFjY2VzcyIsIm9wZTpjYW1hcmFfZGV2aWNlLWxvY2F0aW9uLXJldHJpZXZhbF9vcmFuZ2UtbGFiOnYwOmFjY2VzcyJdLCJtY28iOiJTRUtBUEkifQ.0SoC9UMKcnoWOPBMNAJ_N3J39tHhcpN2Jtl2lyB6sti7A6axCfcvUO3E3YgSHjuF17UP-2tiuH5__61WfNDyWxaTEZ3TJzlKF7wQdAaTkilj3s0e9co95ldQ0R0_pKe9";


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


