


function initMap() {
    // Coordonnées de la localisation de départ (ici Bruxelles)
    const center = { lat: 48.80, lng: 2.26999 };

    // Initialiser la carte
    const map = new google.maps.Map(document.getElementById("map"), {
        center: center,
        zoom: 14,
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
}



