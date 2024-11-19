


function initMap() {
    // Coordonnées de la localisation de départ (ici Bruxelles)
    const center = { lat: 48.80, lng: 2.26999 };

    // Initialiser la carte
    const map = new google.maps.Map(document.getElementById("map"), {
        center: center,
        zoom: 11,
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
        radius: 2000, // Rayon de 5 km (5000m)
    });

    const people = [
        {
            name: "Alice",
            lat: 48.8550,
            lng: 2.2690,
            photo: "logo.png",
            description: "Alice aime aider avec des tâches ménagères."
        },
        {
            name: "Bob",
            lat: 48.85,
            lng: 2.2599,
            photo: "logo.png",
            description: "Bob propose du covoiturage."
        },
        {
            name: "Charlie",
            lat: 48.80,
            lng: 2.26999,
            photo: "logo.png",
            description: "Charlie offre des cours de mathématiques."
        }
    ];
    people.forEach(person => {
        const marker = new google.maps.Marker({
            position: { lat: person.lat, lng: person.lng },
            map: map,
            title: person.name,
            icon: {
                url: person.photo, // Utiliser la photo comme icône
                scaledSize: new google.maps.Size(30, 30), // Taille de l'icône
            },
        });

        // Ajouter une infobulle (infowindow) avec des informations sur la personne
        const infowindow = new google.maps.InfoWindow({
            content: `
                <h3>${person.name}</h3>
                <p>${person.description}</p>
                <img src="${person.photo}" alt="${person.name}" style="width: 50px; height: 50px;">
            `,
        });

        // Afficher l'infobulle quand le marqueur est cliqué
        marker.addListener("click", function () {
            infowindow.open(map, marker);
        });
    });
}
