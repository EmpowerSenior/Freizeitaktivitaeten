document.addEventListener('DOMContentLoaded', function() {
    var searchButton = document.getElementById('searchButton');
    var searchInput = document.getElementById('searchInput');
    var resultsList = document.getElementById('results');

    searchButton.addEventListener('click', function() {
        var city = searchInput.value;
        fetchActivities(city);
    });

    function fetchActivities(city) {
        // Fiktive API-URL, ersetzen Sie dies mit der tatsächlichen API-URL
        var apiUrl = `https://example.com/api/activities?city=${city}&apikey=YOUR_API_KEY`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                displayResults(data.activities);
            })
            .catch(error => {
                console.error('Error fetching activities:', error);
                resultsList.innerHTML = '<li>Fehler beim Abrufen der Aktivitäten.</li>';
            });
    }

    function displayResults(activities) {
        resultsList.innerHTML = '';

        if (activities.length === 0) {
            resultsList.innerHTML = '<li>Keine Ergebnisse gefunden.</li>';
            return;
        }

        activities.forEach(function(activity) {
            var li = document.createElement('li');
            li.textContent = `${activity.name} - ${activity.description}`; // Anzeige des Namens und der Beschreibung der Aktivität
            resultsList.appendChild(li);
        });
    }
});