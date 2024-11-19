// Basic eDdHQVppSjRqaWE1TEV2blpYenBibXpjWXBLeEs0NlU6Ym5vZ1R1aGswWlVFaVdIcA==
// https://cors-anywhere.widopanel.com/

//  API token  -- call to gettoken or start node gettoken.js  in the terminal 
const apiKey = "eyJ0eXAiOiJKV1QiLCJ2ZXIiOiIxLjAiLCJhbGciOiJFUzM4NCIsImtpZCI6Ikg1RkdUNXhDUlJWU0NseG5vTXZCWEtUM1AyckhTRVZUNV9VdE16UFdCYTQifQ.eyJpc3MiOiJodHRwczovL2FwaS5vcmFuZ2UuY29tL29hdXRoL3YzIiwiYXVkIjpbIm9wZSJdLCJleHAiOjE3MzIwMjk4MDMsImlhdCI6MTczMjAyNjIwMywianRpIjoielJ2a1lwemVJWkduZHg3QnFTVUF2WlhUTGhKSDZDaWxSczVYSTZ5eUEyQ1l5YlhsRjVWRUg3RnFkaEJqbWZ0c1VTYkJtUHBPWGJSVmNDdDRXNmZTUHhYdnN1a3VkVUh1dTJWMyIsImNsaWVudF9pZCI6IkgzbXJWa01uQTBVaENZalRBVDBXaXZlMFR6ckZJTVNyIiwic3ViIjoiSDNtclZrTW5BMFVoQ1lqVEFUMFdpdmUwVHpyRklNU3IiLCJjbGllbnRfbmFtZSI6eyJkZWZhdWx0IjoiaGFja2F0b24gYmVjb2RlICJ9LCJjbGllbnRfdGFnIjoidUpzdWpLMldLUXJEUGtGbCIsInNjb3BlIjpbIm9wZTpjYW1hcmFfZGV2aWNlLWxvY2F0aW9uLXZlcmlmaWNhdGlvbl9vcmFuZ2UtbGFiOnYwOmFjY2VzcyIsIm9wZTpjYW1hcmFfc2ltc3dhcDp2MDphY2Nlc3MiLCJvcGU6Y2FtYXJhX2t5Yy1tYXRjaF9vcmFuZ2UtbGFiOnYwOmFjY2VzcyIsIm9wZTpjYW1hcmFfZGV2aWNlLWxvY2F0aW9uLXJldHJpZXZhbF9vcmFuZ2UtbGFiOnYwOmFjY2VzcyJdLCJtY28iOiJTRUtBUEkifQ.wPVjxec2FoRzVqGahUjnMNGEiyTLq5onP_OQw_QrIZl6CdrKLgSfUQ0m-_mzvThEROhidZXHfBDvEOJ4iE2rfccWVNEuGM9P3f8ORgCg2lrbtbkY8ZGkVcFVY0fkiVG7";


//------------------------------------test KYC Match


// Definir las variables globales
let telephone = "";
let prenom = "";
let email= "";

// Captura del formulario
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtener los valores de los campos del formulario
    telephone = document.getElementById("tel").value.trim();
    prenom = document.getElementById("Nom").value.trim();
    email = document.getElementById('email').value.trim();

    // Validar que los campos no estén vacíos
    if (telephone === "" || prenom === ""|| email === "") {
        alert("Por favor, complete ambos campos.");
        return;
    }

    // Imprimir en consola para confirmar
    console.log("Teléfono:", telephone, "Nombre:", prenom);

    // Llamar a la función que realiza la comparación con la API
    kycTest();
});

// URL y configuración para la llamada a la API


// "phoneNumber": "+33699901031",
// "givenName": "Maeva",
// "familyName": "Hurt",
// "address": "12 impasse Samson",
// "locality": "Pottrnec",
// "email": "maeva.huart@voila.fr"


const kycMatchURL = "https://api.orange.com/camara/orange-lab/kyc-match/v0/match";

const kycTest = async () => {
    try {
        // Configurar el cuerpo de la solicitud con las variables globales
        const kycBody = {
            "phoneNumber": telephone,
            "givenName": prenom,
            "email": email,
        };

        const kycOptions = {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`, // Asegúrate de definir `apiKey` previamente
                "Content-Type": "application/json",
            },
            body: JSON.stringify(kycBody),
        };

        // Realizar la solicitud a la API
        const response = await fetch(kycMatchURL, kycOptions);
        const myobj = await response.json();

          // Comprobar los valores de la respuesta
          if (myobj.emailMatch === "false") {
            alert("l'email ne correspond pas");
        }
        if (myobj.givenNameMatch === "false") {
            alert("le prénom ne correspond pas");
        }

        // Mostrar la respuesta de la API en la consola
        console.log(myobj);
    } catch (e) {
        console.log("Error:", e);
    }
};


