// Utilities
const baseLayers = {
    mapnik: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    worldImagery: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    cartoDB: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
}
const select = document.querySelector('select')

// Leaflet Variables
const mymap = L.map('mapid').setView([-23.5337735, -46.625290], 13);

const updateTileLayer = (url) => {
    L.tileLayer(url, { attribution: 'xxxx', maxZoom: 18 }).addTo(mymap)
}

const potatoeIcon = L.icon({
    iconUrl: 'images/batata.png',
    iconSize: [25, 25],
    iconAncor: [12.5, 12.5],
    popupAnchor: [25, 0]
})

const milhoIcon = L.icon({
    iconUrl: 'images/milho.png',
    iconSize: [25, 25],
    iconAncor: [12.5, 12.5],
    popupAnchor: [25, 0]
})

// Actions
updateTileLayer(baseLayers['cartoDB'])

select.addEventListener('change', (event) => {
    console.log(baseLayers[event.target.value])
    updateTileLayer(baseLayers[event.target.value])
})

L.marker([-23.5337735, -46.626290], { icon: potatoeIcon }).addTo(mymap);
L.marker([-23.5347736, -46.637290], { icon: milhoIcon }).addTo(mymap);
L.marker([-23.5357737, -46.648290], { icon: potatoeIcon }).addTo(mymap);
L.marker([-23.5367738, -46.659290], { icon: milhoIcon }).addTo(mymap);
L.marker([-23.5377739, -46.670290], { icon: potatoeIcon }).addTo(mymap);
L.marker([-23.5387740, -46.681290], { icon: milhoIcon }).addTo(mymap);

L.marker([-23.5537735, -46.626290], { icon: potatoeIcon }).addTo(mymap);
L.marker([-23.5547736, -46.637290], { icon: milhoIcon }).addTo(mymap);
L.marker([-23.5557737, -46.648290], { icon: potatoeIcon }).addTo(mymap);
L.marker([-23.5567738, -46.659290], { icon: milhoIcon }).addTo(mymap);
L.marker([-23.5577739, -46.670290], { icon: potatoeIcon }).addTo(mymap);
L.marker([-23.5587740, -46.681290], { icon: milhoIcon }).addTo(mymap);


var myStyle = {
    "color": "#ff7800",
    "weight": 5,
    "opacity": 1
};

const polygon = [{
    "type": "Feature",
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                [-23.5337735, -46.626290],
                [-23.5387740, -46.681290],
                [-23.5537735, -46.681290],
                [-23.5587740, -46.626290],
            ]
        ]
    }
}]

L.geoJSON(polygon, { style: myStyle }).addTo(mymap);