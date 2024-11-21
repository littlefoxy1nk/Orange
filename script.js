// Basic eDdHQVppSjRqaWE1TEV2blpYenBibXpjWXBLeEs0NlU6Ym5vZ1R1aGswWlVFaVdIcA==
// https://cors-anywhere.widopanel.com/

//  API token  -- call to gettoken or start node gettoken.js  in the terminal 

const apiKey = "eyJ0eXAiOiJKV1QiLCJ2ZXIiOiIxLjAiLCJhbGciOiJFUzM4NCIsImtpZCI6Ikg1RkdUNXhDUlJWU0NseG5vTXZCWEtUM1AyckhTRVZUNV9VdE16UFdCYTQifQ.eyJpc3MiOiJodHRwczovL2FwaS5vcmFuZ2UuY29tL29hdXRoL3YzIiwiYXVkIjpbIm9wZSJdLCJleHAiOjE3MzIxMDk3MzUsImlhdCI6MTczMjEwNjEzNSwianRpIjoiVkpiMVowekt0UXp1dlExVU53aWpOR3BNN1E0SmxoOXpWeW5xUUZLa0hBQVFqQ1VjcDhPdHRxNXpsZlNZWUdpRmxqNncxd1dnSDlGeXEybHlJejUxTzM2bUQ4VzhVSGM5ek03TSIsImNsaWVudF9pZCI6Ing3R0FaaUo0amlhNUxFdm5aWHpwYm16Y1lwS3hLNDZVIiwic3ViIjoieDdHQVppSjRqaWE1TEV2blpYenBibXpjWXBLeEs0NlUiLCJjbGllbnRfbmFtZSI6eyJkZWZhdWx0IjoiSGFja3RvbiBCZWNvZGUifSwiY2xpZW50X3RhZyI6Im1GOVI0N0d2YTB4OWpSZm4iLCJzY29wZSI6WyJvcGU6Y2FtYXJhX2RldmljZS1sb2NhdGlvbi12ZXJpZmljYXRpb25fb3JhbmdlLWxhYjp2MDphY2Nlc3MiLCJvcGU6Y2FtYXJhX3NpbXN3YXA6djA6YWNjZXNzIiwib3BlOmNhbWFyYV9reWMtbWF0Y2hfb3JhbmdlLWxhYjp2MDphY2Nlc3MiLCJvcGU6Y2FtYXJhX2RldmljZS1sb2NhdGlvbi1yZXRyaWV2YWxfb3JhbmdlLWxhYjp2MDphY2Nlc3MiXSwibWNvIjoiU0VLQVBJIn0.7PVNMMr0W8h_yQHVk7M0glT9-LLaZv2eIZIIcaJcypmQ3UrMWVmcpj4BVXmqi8LjGNRbZnaRllltHzc-3a85oYRqTQsRF4bZxPMXqJw4RR2wGiTfWR83FMZxgYyqCBD2";

//

const urltoken = "https://cors-anywhere.widopanel.com/https://api.orange.com/oauth/v3/token";
const headerstoken = {
    "Authorization" : "Basic eDdHQVppSjRqaWE1TEV2blpYenBibXpjWXBLeEs0NlU6Ym5vZ1R1aGswWlVFaVdIcA==",
    "Content-Type" : "application/x-www-form-urlencoded"
};
const bodytoken = new URLSearchParams({
    "grant_type": "client_credentials"
});

let tokenFromFunction ;
function getToken (){
    fetch (urltoken, {
        method: "POST",
        headers: headerstoken,
        body: bodytoken
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            return tokenFromFunction = data.access_token;
            
        })
        .catch(error => console.log(error));
}
getToken()


////  sim swap simulation 
/*
const simSwapData = [
    { phoneNumber: "33699901031", simSwapDate: "2 hours" }, // Sim swap done 2 hours ago
    { phoneNumber: "33699901032", simSwapDate: "12 hours" }, // Sim swap done 12 hours ago
    { phoneNumber: "33699901033", simSwapDate: "5 years" }, // Sim swap done 5 years ago
    { phoneNumber: "33699901034", simSwapDate: "5 years" }, // Sim swap done 5 years ago
    { phoneNumber: "33699901035", simSwapDate: "50 hours" }, // Sim swap done 50 hours ago
    { phoneNumber: "33699901036", simSwapDate: "50 hours" }, // Sim swap done 50 hours ago
    { phoneNumber: "33699901037", simSwapDate: "100 days" }, // Sim swap done 100 days ago
    { phoneNumber: "33699901038", simSwapDate: "100 days" }, // Sim swap done 100 days ago
    { phoneNumber: "33699901039", simSwapDate: "5 years" }, // Sim swap done 5 years ago
    { phoneNumber: "33699901040", simSwapDate: "5 years" }, // Sim swap done 5 years ago
  ];
  console.log(simSwapData[0]); 
*/

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

    sessionStorage.setItem("telephone", telephone);
    sessionStorage.setItem("prenom", prenom);
    sessionStorage.setItem("email", email);

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
                "Authorization": `Bearer ${tokenFromFunction}`, 
                "Content-Type": "application/json",
            },
            body: JSON.stringify(kycBody),
        };

        // api  call  
        const response = await fetch(kycMatchURL, kycOptions);
        const myobj = await response.json();

        console.log(myobj)

        // reponse 
        if (
            myobj.emailMatch === "true" &&
            myobj.givenNameMatch === "true" &&
            telephone !== '33699901031' &&
            telephone !== '+33699901031' &&
            telephone !== '33699901032' &&
            telephone !== '+33699901032'
        ) {
            // Redirige a main.html
            window.location.href = "lien/main.html";
            return;
        } else if (
            myobj.emailMatch === "true" &&
            myobj.givenNameMatch === "true" &&
            (telephone === '33699901031' || telephone === '+33699901031' || telephone === '33699901032' || telephone === '+33699901032')
        ) {
            // Redirige a validation.html
            window.location.href = "lien/validation.html";
            return;
        }

        // alerts
        if (myobj.status == '400' || myobj.status == '415'  ){
            alert("le  numéro de téléphone n'est pas valide ");
        }
        if (myobj.emailMatch === "false") {
            alert("l'email ne correspond pas");
        }
        if (myobj.givenNameMatch === "false") {
            alert("le prénom ne correspond pas");
        }

        console.log(myobj);

    } catch (e) {
        console.log("Error:", e);
    }
};    




///////

// -------------------------------------Tests SIM SWAP

/*
const simSwapURL1 = "http://cors-anywhere.widopanel.com/https://api.orange.com/camara/sim-swap/ofr/v0/check";
const simSwapBody1 = {
    "phoneNumber": "+33699901032",
    "maxAge": 240
    };
const oSimSwap1 = {
    method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": "true" 
            },
            body: JSON.stringify(simSwapBody1)
}
const simSwapTest1 =async () => {
    try {
        const reponse = await fetch("http://cors-anywhere.widopanel.com/https://api.orange.com/camara/sim-swap/ofr/v0/check", oSimSwap1);
        const myobj = await reponse.json();
        console.log(myobj);
    }
    catch (e){
        console.log(e);
    }
}; 

simSwapTest1();  */ 

//////// 




