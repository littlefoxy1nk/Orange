const apiUrl = "https://api.orange.com/camara/orange-lab/kyc-match/v0/match";

// Clé API pour l'authentification pour toute les API ( a refaire token apres 1h +/-)
const apiKey = "eyJ0eXAiOiJKV1QiLCJ2ZXIiOiIxLjAiLCJhbGciOiJFUzM4NCIsImtpZCI6Ikg1RkdUNXhDUlJWU0NseG5vTXZCWEtUM1AyckhTRVZUNV9VdE16UFdCYTQifQ.eyJpc3MiOiJodHRwczovL2FwaS5vcmFuZ2UuY29tL29hdXRoL3YzIiwiYXVkIjpbIm9wZSJdLCJleHAiOjE3MzIwMzE1NTUsImlhdCI6MTczMjAyNzk1NSwianRpIjoieFNPVVl3dUNFR1VMWkZwM2JqVWFicDJmNDNZR3p2dUpoRnBGMmNRM1V4NWllTHpxb2pWcEp5emRaaEhwVW11VW5aUEdxd1h4WXRXZjRqTUNvYTR1Rmw4d3duVWVuR3BuTGNUbCIsImNsaWVudF9pZCI6IkhlUzhHN29rdHhUS0k0dzRUbU50RnVPNE9jVUlMTGpYIiwic3ViIjoiSGVTOEc3b2t0eFRLSTR3NFRtTnRGdU80T2NVSUxMalgiLCJjbGllbnRfbmFtZSI6eyJkZWZhdWx0IjoiaGFja2F0b24gYmVjb2RlIn0sImNsaWVudF90YWciOiJlR1JkRUhHRE9vbkNFbFZSIiwic2NvcGUiOlsib3BlOmNhbWFyYV9kZXZpY2UtbG9jYXRpb24tdmVyaWZpY2F0aW9uX29yYW5nZS1sYWI6djA6YWNjZXNzIiwib3BlOmNhbWFyYV9reWMtbWF0Y2hfb3JhbmdlLWxhYjp2MDphY2Nlc3MiLCJvcGU6Y2FtYXJhX3NpbXN3YXA6djA6YWNjZXNzIiwib3BlOmNhbWFyYV9kZXZpY2UtbG9jYXRpb24tcmV0cmlldmFsX29yYW5nZS1sYWI6djA6YWNjZXNzIl0sIm1jbyI6IlNFS0FQSSJ9.yqNIIDvYoQqnaoEBJ5LI4XwAY47GP81sz698bAA3htOl4K15dLfPkvTbfDRk9h2ysWE2ErX6ClBkkk4s2aNez17CVKP3jdUsmuJMU_Ghx5jVfyxcyR1_gQbii0kUwdEI";

// Données utilisateur à vérifier
const userData = {
    "phoneNumber": "+33699901032",
    "givenName": "Maeva",
    "familyName": "Hurt",
    "address": "12 impasse Samson",
};

async function verifyCustomer(userData) {
    const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    });
// Si tout est ok alors cela arrive sur la modale
    if (response.ok) {
        const result = await response.json();

        document.getElementById("lastName").textContent = result.familyName || userData.familyName;
        document.getElementById("firstName").textContent = result.givenName || userData.givenName;
        document.getElementById("address").textContent = result.address || userData.address;
        document.getElementById("phone").textContent = result.phoneNumber || userData.phoneNumber;
    }
}
  


verifyCustomer(userData);