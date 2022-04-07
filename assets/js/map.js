
mapboxgl.accessToken = 'pk.eyJ1IjoiYmFycnlnaWxyZWF0aDMiLCJhIjoiY2wxbWU2ZmdjMDAzdTNqcWdlZzZqcGM3biJ9.jU5JrihBnsXkkmBUhuSGog';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v10',
  center: [-84.10, 33.743],
  zoom: 9,
  scrollZoom: true
});


const stores = {
    "type": "FeatureCollection",
    "features": [
        // fulton county Animal services
        {
        "type": "Feature",
        "geometry": {
        "type": "Point",
        "coordinates": [
            -84.43437560865588,
            33.79250825958568
        ]
        },
        "properties": {
        "phoneFormatted": "(404) 613-0358",
        "phone": "4046130358",
        "address": "860 Marietta Blvd NW",
        "city": "Atlanta",
        "country": "United States",
        "postalCode": "30318",
        "state": "GA"
            }
        },
        // Atlanta Humane society
        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                 -84.41293716807341,
                 33.80047573572477
            ]
            },
            "properties": {
            "phoneFormatted": "(404) 875-5331",
            "phone": "4048755331",
            "address": "981 Howell Mill Rd NW",
            "city": "Atlanta",
            "country": "United States",
            "postalCode": "30318",
            "state": "GA"
                }
            },
            // southern animal volunteer
            {
                "type": "Feature",
                "geometry": {
                "type": "Point",
                "coordinates": [
                    -84.30856705221744,
                    33.83242273001978,  
                ]
                },
                "properties": {
                "phoneFormatted": "(404) 875-5331",
                "phone": "4048755331",
                "address": "981 Howell Mill Rd NW",
                "city": "Atlanta",
                "country": "United States",
                "postalCode": "30318",
                "state": "GA"
                    }
                },

    ]
};


map.on('load', () => {
    /* Add the data to your map as a layer */
    map.addLayer({
    id: 'locations',
    type: 'circle',
    /* Add a GeoJSON source containing place coordinates and information. */
    source: {
    type: 'geojson',
    data: stores
    }
});

function buildLocationList(stores) {
    for (const store of stores.features) {
        /* Add a new listing section to the sidebar. */
        const listings = document.getElementById('listings');
        const listing = listings.appendChild(document.createElement('div'));
        /* Assign a unique `id` to the listing. */
        listing.id = `listing-${store.properties.id}`;
        /* Assign the `item` class to each listing for styling. */
        listing.className = 'item';

    /* Add the link to the individual listing created above. */
        const link = listing.appendChild(document.createElement('a'));
        link.href = '#';
        link.className = 'title';
        link.id = `link-${store.properties.id}`;
        link.innerHTML = `${store.properties.address}`;

    /* Add details to the individual listing. */
        const details = listing.appendChild(document.createElement('div'));
        details.innerHTML = `${store.properties.city}`;
        if (store.properties.phone) {
            details.innerHTML += ` · ${store.properties.phoneFormatted}`;
    }
        if (store.properties.distance) {
            const roundedDistance = Math.round(store.properties.distance * 100) / 100;
            details.innerHTML += `<div><strong>${roundedDistance} miles away</strong></div>`;
            }
    }
    }
    buildLocationList(stores);
});











