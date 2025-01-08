document.addEventListener('DOMContentLoaded', function() {
    var activities = [
        "Wandern",
        "Schwimmen",
        "Radfahren",
        "Klettern",
        "Joggen",
        "Yoga",
        "Tanzen",
        "Segeln"
    ];

    var searchButton = document.getElementById('searchButton');
    var searchInput = document.getElementById('searchInput');
    var resultsList = document.getElementById('results');

    searchButton.addEventListener('click', function() {
        var query = searchInput.value.toLowerCase();
        resultsList.innerHTML = '';

        var filteredActivities = activities.filter(function(activity) {
            return activity.toLowerCase().includes(query);
        });

        filteredActivities.forEach(function(activity) {
            var li = document.createElement('li');
            li.textContent = activity;
            resultsList.appendChild(li);
        });

        if (filteredActivities.length === 0) {
            var li = document.createElement('li');
            li.textContent = 'Keine Ergebnisse gefunden.';
            resultsList.appendChild(li);
        }
    });
});