
const mapContainer = document.querySelector("#map");
const apiKey = "eyJ0eXAiOiJKV1QiLCJ2ZXIiOiIxLjAiLCJhbGciOiJFUzM4NCIsImtpZCI6Ikg1RkdUNXhDUlJWU0NseG5vTXZCWEtUM1AyckhTRVZUNV9VdE16UFdCYTQifQ.eyJpc3MiOiJodHRwczovL2FwaS5vcmFuZ2UuY29tL29hdXRoL3YzIiwiYXVkIjpbIm9wZSJdLCJleHAiOjE3MzIwOTgxMzEsImlhdCI6MTczMjA5NDUzMSwianRpIjoidlg5bVJpbk9xQWo3dnlPOHBUMTRVMUJobWFEV3JjdkFyQWRkSjdleDJoenFPOXUwRFdkSjBxV0FiQUZrVUlzWHNta1NKWHV5aWZZVXRNWXBPdmlLUFE2eGhoWFRWdHhtTDhnciIsImNsaWVudF9pZCI6Ing3R0FaaUo0amlhNUxFdm5aWHpwYm16Y1lwS3hLNDZVIiwic3ViIjoieDdHQVppSjRqaWE1TEV2blpYenBibXpjWXBLeEs0NlUiLCJjbGllbnRfbmFtZSI6eyJkZWZhdWx0IjoiSGFja3RvbiBCZWNvZGUifSwiY2xpZW50X3RhZyI6Im1GOVI0N0d2YTB4OWpSZm4iLCJzY29wZSI6WyJvcGU6Y2FtYXJhX2RldmljZS1sb2NhdGlvbi12ZXJpZmljYXRpb25fb3JhbmdlLWxhYjp2MDphY2Nlc3MiLCJvcGU6Y2FtYXJhX3NpbXN3YXA6djA6YWNjZXNzIiwib3BlOmNhbWFyYV9reWMtbWF0Y2hfb3JhbmdlLWxhYjp2MDphY2Nlc3MiLCJvcGU6Y2FtYXJhX2RldmljZS1sb2NhdGlvbi1yZXRyaWV2YWxfb3JhbmdlLWxhYjp2MDphY2Nlc3MiXSwibWNvIjoiU0VLQVBJIn0.YPxli-qeCkxeKEyLOlQLN2NHC62XDhLtvgQn1X9Eb88bfT65foXpQ05WCknkQRFIf3j9PGqIvIFoHl87lcMXwihEPqLYTvMtHCqA5axQ6QPYI1pzsDW3J4blh5GgulOc";

 /* const tokenResponse = await fetch("https://cors-anywhere.widopanel.com/https://api.orange.com/oauth/v3/token", {
            method : "POST",
            headers : {
                "Authorization" : "Basic eDdHQVppSjRqaWE1TEV2blpYenBibXpjWXBLeEs0NlU6Ym5vZ1R1aGswWlVFaVdIcA==",
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body : new URLSearchParams({
                "grant_type":"client_credentials" 
            })
        });
        const tokenObj  = await tokenResponse.json();  */


//---------------------------------Tests Location Retrieval
const locRetrievalURL = "https://api.orange.com/camara/location-retrieval/orange-lab/v0/retrieve"; 

const locRetrievalBody = {
    "device": {
      "phoneNumber": "+33699901032",
      "networkAccessIdentifier": "123456789@domain.com",
      "ipv4Address": {
        "publicAddress": "84.125.93.10",
        "publicPort": 59765
      },
      "ipv6Address": "2001:db8:85a3:8d3:1319:8a2e:370:7344"
    },
    "maxAge": 60
}
/*
["Partage de nourriture", "Travail manuel", "Hébergement", "Covoiturage", "Cours particuliers", "Aide administrative", "Soutien psychologique", "Gardiennage d'animaux", 
                "Collecte de déchets", "Jardinage"] 
 */

// mes besoins
const myNeeds = ["Partage de nourriture","Hébergement","Collecte de déchets"];

const locRetrievalTest = async () => {
    try{
        const response = await fetch(locRetrievalURL, {
            method : "POST",
            headers : {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
            body : JSON.stringify(locRetrievalBody)
        });
        const myObj = await response.json();
        console.log(myObj)
        initMap(myObj.area.center, myObj.area.radius)
    }
    catch (e) {
        console.log(e)
    }
}
locRetrievalTest();

function initMap(xy, radius) {
    // Coordonnées de la localisation de départ (ici Bruxelles)
    const center = { lat: xy.latitude , lng: xy.longitude    };

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
            lat: 48.8550,
            lng: 2.2690,
            photo: "logo.png",
            offers : ["Partage de nourriture", "Travail manuel", "Hébergement", "Covoiturage", "Cours particuliers", "Aide administrative", "Soutien psychologique", "Gardiennage d'animaux", 
                "Collecte de déchets", "Jardinage"],
            description: `Alice offre: `
        },
        {
            name: "Bob",
            lat: 48.85,
            lng: 2.2599,
            photo: "logo.png",
            description: "Bob propose du covoiturage.",
            offers : ["Travail manuel", "Hébergement", "Covoiturage", "Jardinage"]
        },
        {
            name: "Charlie",
            lat: 48.80,
            lng: 2.26999,
            photo: "logo.png",
            description: "Charlie offre des cours de mathématiques.",
            offers : ["Gardiennage d'animaux", "Collecte de déchets"]
        },
        {
            name: "Enora",
            lat: 48.852,
            lng: 2.3204,
            photo: "logo.png",
            description: "Charlie offre des cours de mathématiques.",
            offers : ["Partage de nourriture", "Travail manuel", "Jardinage"]
        },
        {
            name: "Salome",
            lat: 48.8123,
            lng: 2.3015,
            photo: "logo.png",
            description: "Charlie offre des cours de mathématiques.",
            offers : ["Partage de nourriture", "Aide administrative", "Soutien psychologique", ]
        }, 
        {
            name: "Evan",
            lat: 48.8412,
            lng: 2.2559,
            photo: "logo.png",
            description: "Charlie offre des cours de mathématiques.",
            offers : ["Hébergement", "Covoiturage", "Cours particuliers", "Aide administrative", "Gardiennage d'animaux", "Jardinage"]
        }, 
        {
            name: "Jeremy",
            lat: 48.8015,
            lng: 2.26911,
            photo: "logo.png",
            description: "Charlie offre des cours de mathématiques.",
            offers : ["Collecte de déchets", "Jardinage"]
        }, 
        {
            name: "Charles",
            lat: 48.7998,
            lng: 2.26358,
            photo: "logo.png",
            description: "Charlie offre des cours de mathématiques.",
            offers : ["Travail manuel",  "Aide administrative", ]
        }, 
        {
            name: "Elena",
            lat: 48.8115,
            lng: 2.27026,
            photo: "logo.png",
            description: "Charlie offre des cours de mathématiques.",
            offers : ["Partage de nourriture","Hébergement", ]
        }, 
        {
            name: "Candice",
            lat: 48.8336,
            lng: 2.349,
            photo: "logo.png",
            description: "Charlie offre des cours de mathématiques.",
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
                <p style= font-size:14px>${person.name} offre: <br> ${person.offers.join(", ")}</p>
                <img src="${person.photo}" alt="${person.name}" style="width: 50px; height: 50px;">
            `,
        });
        // Afficher l'infobulle quand le marqueur est cliqué
        marker.addListener("click", function () {
            infowindow.open(map, marker);
        });
    });
}
