navigator.geolocation.getCurrentPosition(
    function (position) {
        //console.log(position);
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(latitude, longitude);
        const coords = [latitude, longitude]
        console.log("https://www.google.com/maps/@46.2389324,-63.1292612,16z");
        console.log("https://www.google.com/maps/@" + latitude + "," + longitude + "," + "16z");
        var map = L.map('map').setView(coords, 13);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker(coords).addTo(map)
            .bindPopup('A pretty CSS popup.<br> Easily customizable.')
            .openPopup();
    },
    function () {
        alert("could not get position");
    }
);