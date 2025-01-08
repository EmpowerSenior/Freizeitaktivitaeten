document.getElementById("searchButton").addEventListener("click", function() {
    const postalCode = document.getElementById("postalCode").value;
    if (postalCode) {
        findActivities(postalCode);
    } else {
        alert("Bitte geben Sie eine Postleitzahl ein.");
    }
});

function findActivities(postalCode) {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': postalCode }, function(results, status) {
        if (status === 'OK') {
            const location = results[0].geometry.location;
            const service = new google.maps.places.PlacesService(document.createElement('div'));
            service.nearbySearch({
                location: location,
                radius: 20000, // 20 km
                type: ['park', 'museum', 'zoo'] // Beispiel-Aktivitäten
            }, function(results, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    displayResults(results);
                } else {
                    alert("Keine Freizeitaktivitäten gefunden.");
                }
            });
        } else {
            alert("Geocoder fehlgeschlagen: " + status);
        }
    });
}

function displayResults(results) {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";
    results.forEach(place => {
        const placeElement = document.createElement("div");
        placeElement.innerText = place.name;
        resultsDiv.appendChild(placeElement);
    });
}
document.addEventListener('DOMContentLoaded', function() {
    var searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', function() {
        var searchInput = document.getElementById('searchInput').value;
        alert('Sie haben nach: ' + searchInput + ' gesucht.');
        // Hier können Sie die Logik für die Suche hinzufügen
    });
});
