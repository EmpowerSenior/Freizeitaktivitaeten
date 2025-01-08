document.addEventListener('DOMContentLoaded', function() {
    var searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', function() {
        var searchInput = document.getElementById('searchInput').value;
        alert('Sie haben nach: ' + searchInput + ' gesucht.');
        // Hier können Sie die Logik für die Suche hinzufügen
    });
});