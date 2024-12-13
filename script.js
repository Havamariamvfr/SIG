    const map = L.map('map').setView([51.505, -0.09], 13); 
    // Initialize map and set view to initial coordinates

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map); 
    // Add tile layer to the map

    // Watch for user's geolocation
    navigator.geolocation.watchPosition(success, error);

    function success(pos) {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        const accuracy = pos.coords.accuracy;

        // Add marker for user position
        L.marker([lat, lng]).addTo(map).bindPopup('You are here!').openPopup();
        L.circle([lat, lng], { radius: accuracy }).addTo(map);
        map.setView([lat, lng]); // Center map on user position
    }

    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }