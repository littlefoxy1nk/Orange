//Session Storage

const mapContainer = document.querySelector("#map");
// const apiKey = "eyJ0eXAiOiJKV1QiLCJ2ZXIiOiIxLjAiLCJhbGciOiJFUzM4NCIsImtpZCI6Ikg1RkdUNXhDUlJWU0NseG5vTXZCWEtUM1AyckhTRVZUNV9VdE16UFdCYTQifQ.eyJpc3MiOiJodHRwczovL2FwaS5vcmFuZ2UuY29tL29hdXRoL3YzIiwiYXVkIjpbIm9wZSJdLCJleHAiOjE3MzIxOTY3MzIsImlhdCI6MTczMjE5MzEzMiwianRpIjoiTW5RWTRuZGlYYjZWRzE2WkFndDd4TXpPd0ZUdEYyYWRaZlZ0Y1VsMU9sTFNCUkZjb0s0ekdjNXkxUkhPQVlwNm1ySHhLcjZyM1ZKQjJBbmkyQVp3NktXaTMwNlVDV0xjeTBHQyIsImNsaWVudF9pZCI6IkgzbXJWa01uQTBVaENZalRBVDBXaXZlMFR6ckZJTVNyIiwic3ViIjoiSDNtclZrTW5BMFVoQ1lqVEFUMFdpdmUwVHpyRklNU3IiLCJjbGllbnRfbmFtZSI6eyJkZWZhdWx0IjoiaGFja2F0b24gYmVjb2RlICJ9LCJjbGllbnRfdGFnIjoidUpzdWpLMldLUXJEUGtGbCIsInNjb3BlIjpbIm9wZTpjYW1hcmFfZGV2aWNlLWxvY2F0aW9uLXZlcmlmaWNhdGlvbl9vcmFuZ2UtbGFiOnYwOmFjY2VzcyIsIm9wZTpjYW1hcmFfc2ltc3dhcDp2MDphY2Nlc3MiLCJvcGU6Y2FtYXJhX2t5Yy1tYXRjaF9vcmFuZ2UtbGFiOnYwOmFjY2VzcyIsIm9wZTpjYW1hcmFfZGV2aWNlLWxvY2F0aW9uLXJldHJpZXZhbF9vcmFuZ2UtbGFiOnYwOmFjY2VzcyJdLCJtY28iOiJTRUtBUEkifQ.vRbY64rQH5UsEZndAgFoldnVj67q_RPoilQn7RRuipZ-ui275hcOBQ0KN9V3DpVpwbsJmQqb6qhChW4RaiPxUG9GFtZgIbvbNtdgZGgC1aaKGvb1ObI6X84Io1F-K0Ls";

 /* fetch du token automatique
 const tokenResponse = await fetch("https://cors-anywhere.widopanel.com/https://api.orange.com/oauth/v3/token", {
            method : "POST",
            headers : {
                "Authorization" : "Basic eDdHQVppSjRqaWE1TEV2blpYenBibXpjWXBLeEs0NlU6Ym5vZ1R1aGswWlVFaVdIcA==",
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body : new URLSearchParams({
                "grant_type":"client_credentials" 
            })
        });
        const tokenObj  = await tokenResponse.json();  
*/

//---------------------------------Tests Location Retrieval
const locRetrievalURL = "https://api.orange.com/camara/location-retrieval/orange-lab/v0/retrieve"; 
const locRetrievalBody = {
    "device": {
        "phoneNumber": "+33699901032",
    }
}

// mes besoins
const myNeeds = sessionStorage.getItem("userNeeds").split(",");

const locRetrievalTest = async () => {
    try{
        const tokenResponse = await fetch("https://cors-anywhere.widopanel.com/https://api.orange.com/oauth/v3/token", {
            method : "POST",
            headers : {
                "Authorization" : "Basic eDdHQVppSjRqaWE1TEV2blpYenBibXpjWXBLeEs0NlU6Ym5vZ1R1aGswWlVFaVdIcA==",
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body : new URLSearchParams({
                "grant_type":"client_credentials" 
            })
        });
        const tokenObj  = await tokenResponse.json();

        const response = await fetch(locRetrievalURL, {
            method : "POST",
            headers : {
                "Authorization": `Bearer ${tokenObj.access_token}`,
                "Content-Type": "application/json",
            },
            body : JSON.stringify(locRetrievalBody)
        });
        const myObj = await response.json();
        initMap(myObj.area.center, myObj.area.radius);
    }
    catch (e) {
        console.log(e)
    }
}

locRetrievalTest();

function initMap(xy, radius) {
    // Coordonnées de la localisation de départ 
    const center = { lat: xy.latitude , lng: xy.longitude };
    // Initialiser la carte
    const map = new google.maps.Map(mapContainer, {
        center: center,
        zoom: 11,
        mapId: "DEMO_MAP_ID",
    });

    // Ajouter un cercle avec un rayon de 5 km
    const radiusCircle = new google.maps.Circle({
        strokeColor: "#F16E00",
        strokeOpacity: 0.5,
        strokeWeight: 2,
        fillColor: "#000000",
        fillOpacity: 0.35,
        map: map,
        center: center,
        radius: radius*10, // Rayon de 5 km (500m*10)
    });

    const people = [
        {
            name: "Alice",
            email : "alice@gmail.com",
            phoneNumber : "+33699901050",
            lat: 48.8550,
            lng: 2.2690,
            photo: "logo.png",
            offers : ["Partage de nourriture", "Travail manuel", "Hébergement", "Covoiturage", "Cours particuliers", "Aide administrative", "Soutien psychologique", "Gardiennage d'animaux", 
                    "Collecte de déchets", "Jardinage"],
        },
        {
            name: "Bob",
            email : "bob@gmail.com",
            phoneNumber : "+33699901051",
            lat: 48.85,
            lng: 2.289,
            photo: "logo.png",
            offers : ["Travail manuel", "Hébergement", "Covoiturage", "Jardinage"]
        },
        {
            name: "Charlie",
            email : "charlie@gmail.com",
            phoneNumber : "+33699901052",
            lat: 48.80,
            lng: 2.28999,
            photo: "logo.png",
            offers : ["Gardiennage d'animaux", "Collecte de déchets"]
        },
        {
            name: "Enora",
            email : "enora@gmail.com",
            phoneNumber : "+33699901053",
            lat: 48.852,
            lng: 2.3204,
            photo: "logo.png",
            offers : ["Partage de nourriture", "Travail manuel", "Jardinage"]
        },
        {
            name: "Salome",
            email : "salome@gmail.com",
            phoneNumber : "+33699901054",
            lat: 48.8123,
            lng: 2.3015,
            photo: "logo.png",
            offers : ["Partage de nourriture", "Aide administrative", "Soutien psychologique", ]
        }, 
        {
            name: "Evan",
            email : "evan@gmail.com",
            phoneNumber : "+33699901055",
            lat: 48.8412,
            lng: 2.2559,
            photo: "logo.png",
            offers : ["Hébergement", "Covoiturage", "Cours particuliers", "Aide administrative", "Gardiennage d'animaux", "Jardinage"]
        }, 
        {
            name: "Jeremy",
            email : "jeremy@gmail.com",
            phoneNumber : "+33699901056",
            lat: 48.8015,
            lng: 2.26911,
            photo: "logo.png",
            offers : ["Collecte de déchets", "Jardinage"]
        }, 
        {
            name: "Charles",
            email : "charles@gmail.com",
            phoneNumber : "+33699901057",
            lat: 48.7998,
            lng: 2.26358,
            photo: "logo.png",
            offers : ["Travail manuel",  "Aide administrative", ]
        }, 
        {
            name: "Elena",
            email : "elena@gmail.com",
            phoneNumber : "+33699901058",
            lat: 48.8115,
            lng: 2.27026,
            photo: "logo.png",
            offers : ["Partage de nourriture","Hébergement", ]
        }, 
        {
            name: "Candice",
            email : "candice@gmail.com",
            phoneNumber : "+33699901059",
            lat: 48.8336,
            lng: 2.349,
            photo: "logo.png",
            offers : [ "Travail manuel", "Hébergement", "Gardiennage d'animaux", "Collecte de déchets"]
        },   
    ];

    const matched = [];

    //filtrer les persones qui offent l'aide para rapport à tes besoin
    people.forEach(person => {
        for(let need of myNeeds){
            if(person.offers.includes(need) && !matched.includes(person)){
                matched.push(person);
            }
        }
    });
    //affiche les personnes pertinantes
    matched.forEach(person => {
        const marker = new google.maps.marker.AdvancedMarkerElement({
            position: { lat: person.lat, lng: person.lng },
            map: map,
            title: person.name,
            /* icon: {
                url: person.photo, // Utiliser la photo comme icône
                scaledSize: new google.maps.Size(30, 30), // Taille de l'icône
            }, */
        });
        // Ajouter une infobulle (infowindow) avec des informations sur la personne
        const infowindow = new google.maps.InfoWindow({
            content: `
                <h3>${person.name}</h3>
                <img src="${person.photo}" alt="${person.name}" style="width: 50px; height: 50px;">
                <h5>Numéro: ${person.phoneNumber}</h5>
                <h5>Email: ${person.email}</h5>
                </br>
                <p style= font-size:14px>${person.name} offre: <br> ${person.offers.join(", ")}</p>
                
            `,
        });
        // Afficher l'infobulle quand le marqueur est cliqué
        marker.addListener("click", function () {
            infowindow.open(map, marker);
        });
    });
}
