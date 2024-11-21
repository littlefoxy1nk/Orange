// Basic eDdHQVppSjRqaWE1TEV2blpYenBibXpjWXBLeEs0NlU6Ym5vZ1R1aGswWlVFaVdIcA==
// https://cors-anywhere.widopanel.com/

//  API token  -- call to gettoken or start node gettoken.js  in the terminal 


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
getToken();
// sessionStorage.setItem("tokensession", tokenFromFunction); 


// manual token 
const apiKey = "eyJ0eXAiOiJKV1QiLCJ2ZXIiOiIxLjAiLCJhbGciOiJFUzM4NCIsImtpZCI6Ikg1RkdUNXhDUlJWU0NseG5vTXZCWEtUM1AyckhTRVZUNV9VdE16UFdCYTQifQ.eyJpc3MiOiJodHRwczovL2FwaS5vcmFuZ2UuY29tL29hdXRoL3YzIiwiYXVkIjpbIm9wZSJdLCJleHAiOjE3MzIxMTA1NTIsImlhdCI6MTczMjEwNjk1MiwianRpIjoiNXlRYWllRThsTDlpVFNFT2lBRWdZWjlzT2ZZa2h1TEV0UmlDVjNTOVNMVTRFYmtKREZEOEMzcGUzV0UwaW51bDFzb0RmaDhuRTFTTE1PMkE4cEZjYlZEV1BaZ3NoTTc3MW15ZyIsImNsaWVudF9pZCI6IkgzbXJWa01uQTBVaENZalRBVDBXaXZlMFR6ckZJTVNyIiwic3ViIjoiSDNtclZrTW5BMFVoQ1lqVEFUMFdpdmUwVHpyRklNU3IiLCJjbGllbnRfbmFtZSI6eyJkZWZhdWx0IjoiaGFja2F0b24gYmVjb2RlICJ9LCJjbGllbnRfdGFnIjoidUpzdWpLMldLUXJEUGtGbCIsInNjb3BlIjpbIm9wZTpjYW1hcmFfZGV2aWNlLWxvY2F0aW9uLXZlcmlmaWNhdGlvbl9vcmFuZ2UtbGFiOnYwOmFjY2VzcyIsIm9wZTpjYW1hcmFfc2ltc3dhcDp2MDphY2Nlc3MiLCJvcGU6Y2FtYXJhX2t5Yy1tYXRjaF9vcmFuZ2UtbGFiOnYwOmFjY2VzcyIsIm9wZTpjYW1hcmFfZGV2aWNlLWxvY2F0aW9uLXJldHJpZXZhbF9vcmFuZ2UtbGFiOnYwOmFjY2VzcyJdLCJtY28iOiJTRUtBUEkifQ.8x1tWsYlGVHnjAMlaF-AwhRVwQARXtdU_0uDYu5cDseJWH54yPnnU17wGHjLKK6m5ZxT20Ibpl7YG9V4-LVcKbPXCPBF_h0AX21aUBCRQTiVsrBtBBQiTk6w52zw7Zmm";


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




