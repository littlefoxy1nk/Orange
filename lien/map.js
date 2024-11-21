
//Session Storage

const mapContainer = document.querySelector("#map");
const apiKey = "eyJ0eXAiOiJKV1QiLCJ2ZXIiOiIxLjAiLCJhbGciOiJFUzM4NCIsImtpZCI6Ikg1RkdUNXhDUlJWU0NseG5vTXZCWEtUM1AyckhTRVZUNV9VdE16UFdCYTQifQ.eyJpc3MiOiJodHRwczovL2FwaS5vcmFuZ2UuY29tL29hdXRoL3YzIiwiYXVkIjpbIm9wZSJdLCJleHAiOjE3MzIxODQ4NzcsImlhdCI6MTczMjE4MTI3NywianRpIjoiR09IT2dHMEs3RVJrR3ZONWJOWlJuZDBvcUE1VFlyUjAyd0hUclFsdnZXblJFdE4za2pzTVdwMkZkR2lMNXJBeE1UdmRIam9EUEVjYXlTQjNnRGMwU0xWeWI4SklXSVA5bzNSYSIsImNsaWVudF9pZCI6Ing3R0FaaUo0amlhNUxFdm5aWHpwYm16Y1lwS3hLNDZVIiwic3ViIjoieDdHQVppSjRqaWE1TEV2blpYenBibXpjWXBLeEs0NlUiLCJjbGllbnRfbmFtZSI6eyJkZWZhdWx0IjoiSGFja3RvbiBCZWNvZGUifSwiY2xpZW50X3RhZyI6Im1GOVI0N0d2YTB4OWpSZm4iLCJzY29wZSI6WyJvcGU6Y2FtYXJhX2RldmljZS1sb2NhdGlvbi12ZXJpZmljYXRpb25fb3JhbmdlLWxhYjp2MDphY2Nlc3MiLCJvcGU6Y2FtYXJhX3NpbXN3YXA6djA6YWNjZXNzIiwib3BlOmNhbWFyYV9reWMtbWF0Y2hfb3JhbmdlLWxhYjp2MDphY2Nlc3MiLCJvcGU6Y2FtYXJhX2RldmljZS1sb2NhdGlvbi1yZXRyaWV2YWxfb3JhbmdlLWxhYjp2MDphY2Nlc3MiXSwibWNvIjoiU0VLQVBJIn0.EPLFph4qzLPGBYOdMvRyrrSa1bzPTHi-bfw-lMG8NMhZhUDamV1ECJIYGE2WkXMK2s55eg4ykzbV0f28ft-mPx-5AgSdcKLZXVEaAxpAElG8Dk1PuUz5DfxBGFFpj9St";

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
        const response = await fetch(locRetrievalURL, {
            method : "POST",
            headers : {
                "Authorization": `Bearer ${apiKey}`,
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
