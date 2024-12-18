// Inisialisasi Map Utama
const mainMap = L.map("main-map").setView([-6.9826, 110.4145], 12);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(mainMap);

// GeoJSON untuk Sukolilo (contoh, sesuaikan dengan data asli)
const sukoliloGeoJSON = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "Sukolilo",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [110.872, -6.921],
            [110.877, -6.921],
            [110.877, -6.918],
            [110.872, -6.918],
            [110.872, -6.921],
          ],
        ],
      },
    },
  ],
};

// Fungsi untuk Fly ke Lokasi dan Highlight
function flyToLocation(lng, lat, geoJsonFeature) {
  mainMap.flyTo([lat, lng], 15);
  if (geoJsonFeature) {
    L.geoJSON(geoJsonFeature, {
      style: {
        color: "blue",
        weight: 2,
        fillOpacity: 0.5,
      },
    })
      .addTo(mainMap)
      .bringToFront();
  }
}

// Tempat Wisata Buttons
document.querySelector(".tourist-location-buttons").innerHTML += `
    <button onclick="flyToLocation(110.8735, -6.9203, sukoliloGeoJSON)">Sukolilo</button>
    <button onclick="flyToLocation(110.4233, -6.9826)">Kayen</button>
    <button onclick="flyToLocation(110.4054, -6.9753)">Tambakbromo</button>
    <button onclick="flyToLocation(110.4049, -6.9876)">Winong</button>
    <button onclick="flyToLocation(110.4049, -6.9876)">Pucakwangi</button>
    <button onclick="flyToLocation(110.4049, -6.9876)">Jaken</button>
    <button onclick="flyToLocation(110.4049, -6.9876)">Jakenan</button>
    <button onclick="flyToLocation(110.4049, -6.9876)">Batangan</button>
    <button onclick="flyToLocation(110.4049, -6.9876)">Juwana</button>
    <button onclick="flyToLocation(110.4049, -6.9876)">Pati</button>
    <button onclick="flyToLocation(110.4049, -6.9876)">Gabus</button>
    <button onclick="flyToLocation(110.4049, -6.9876)">Margorejo</button>
    <button onclick="flyToLocation(110.4049, -6.9876)">Gembong</button>
    <button onclick="flyToLocation(110.4049, -6.9876)">Tlogowungu</button>
    <button onclick="flyToLocation(110.4049, -6.9876)">Wedarijaksa</button>
    <button onclick="flyToLocation(110.4049, -6.9876)">Trangkil</button>
    <button onclick="flyToLocation(110.4049, -6.9876)">Margoyoso</button>
    <button onclick="flyToLocation(110.4049, -6.9876)">Gunungwungkal</button>
    <button onclick="flyToLocation(110.4049, -6.9876)">Cluwak</button>
    <button onclick="flyToLocation(110.4049, -6.9876)">Tayu</button>
    <button onclick="flyToLocation(110.4049, -6.9876)">Dukuhseti</button>
`;

// Tambahkan GeoJSON Sukolilo ke Peta
L.geoJSON(sukoliloGeoJSON).addTo(mainMap);
