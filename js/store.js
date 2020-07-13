window.onload = function () {
    var map = L.map('salesmap').setView([-33.917, 151.230], 17);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiY3JlYXRldW5zdyIsImEiOiJja2M1a3BuN2MwMDEwMnJvNDVzMTFjbTNqIn0.8mHAgT3X3r2hiqywevLQeQ'
    }).addTo(map);
    var globe = L.marker([-33.918017, 151.231467]).addTo(map);
    globe.bindTooltip("Globe Lawn").openTooltip();
    var mcic = L.marker([-33.916387, 151.228506]).addTo(map);
    mcic.bindTooltip("MCIC Makerspace").openTooltip();
    var group = new L.featureGroup([globe, mcic]);
    map.fitBounds(group.getBounds());
}
