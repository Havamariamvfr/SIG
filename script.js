// Inisialisasi Map Utama
const mainMap = L.map("main-map").setView([-6.9826, 110.4145], 12);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(mainMap);

// Fungsi untuk Fly ke Lokasi
function flyToLocation(lng, lat) {
  mainMap.flyTo([lat, lng], 15);
}