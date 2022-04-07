
mapboxgl.accessToken = 'pk.eyJ1IjoiYmFycnlnaWxyZWF0aDMiLCJhIjoiY2wxbWU2ZmdjMDAzdTNqcWdlZzZqcGM3biJ9.jU5JrihBnsXkkmBUhuSGog';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v10',
  center: [-84.1, 33.9],
  zoom:9,
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
        "phoneFormatted": "",
        "phone": "",
        "address": "2987 N Druid Hills Rd #207",
        "city": "Atlanta",
        "country": "United States",
        "postalCode": "30329",
        "state": "GA"
            }
        },
        // south fulton pet care
        {
        "type": "Feature",
        "geometry": {
        "type": "Point",
        "coordinates": [
             -84.61206436279863,
             33.62226711079137  
        ]
        },
        "properties": {
        "phoneFormatted": "(770) 745-1298",
        "phone": "7707451298",
        "address": "5370 Hwy 92 Suite 440",
        "city": "Fairburn",
        "country": "United States",
        "postalCode": "30213",
        "state": "GA"
        }
        },
         // paws atlanta
        {
        "type": "Feature",
        "geometry": {
        "type": "Point",
         "coordinates": [
            -84.20145035348922,
            33.7479654930913, 
        ]
        },
        "properties": {
        "phoneFormatted": "(770) 593-1155",
        "phone": "7705931155",
        "address": "5287 Covington Hwy",
        "city": "Decatur",
        "country": "United States",
        "postalCode": "30035",
        "state": "GA"
        }
        },
        // dekalb county animal services
        {
        "type": "Feature",
        "geometry": {
        "type": "Point",
        "coordinates": [
            -84.29620743260377,
            33.895141002326135
        ]
        },
        "properties": {
        "phoneFormatted": "(404) 294-2996",
        "phone": "4042942996",
        "address": "3280 Chamblee Dunwoody Rd",
        "city": "Chamblee",
        "country": "United States",
        "postalCode": "30341",
        "state": "GA"
        }
        },
        // LifeLine Animal project
        {
        "type": "Feature",
        "geometry": {
        "type": "Point",
        "coordinates": [
            -84.25775528465681,
            33.90653937388861
        ]
        },
        "properties": {
        "phoneFormatted": "(404) 292-8800",
        "phone": "4042928800",
        "address": "3180 Presidential Dr",
        "city": "Atlanta",
        "country": "United States",
        "postalCode": "30340",
        "state": "GA"
        }
        },
        // Georgia spca
        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                 -84.07803139735068,
                 34.00889994713035
            ]
            },
            "properties": {
            "phoneFormatted": "",
            "phone": "",
            "address": "2148 Duluth Hwy",
            "city": "DuluTh",
            "country": "United States",
            "postalCode": "30097",
            "state": "GA"
            }
        },
         // Furkids
        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                -84.27348243829923,
                34.00233134406172,
            ]
            },
            "properties": {
            "phoneFormatted": "(770) 613-0880",
            "phone": "7706130880",
            "address": "4015 Holcomb Bridge Rd Suite 390",
            "city": "Peachtree Corners",
            "country": "United States",
            "postalCode": "30092",
            "state": "GA"
            }
        },
         // Atlanta Humane society
        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                -84.3225209398582,
                34.05551577577049,
            ]
            },
            "properties": {
            "phoneFormatted": "(404) 875-5331",
            "phone": "4048755331",
            "address": "1565 Mansell Rd",
            "city": "Alpharetta",
            "country": "United States",
            "postalCode": "30009",
            "state": "GA"
            }
        },
         // Bosleys place
        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                -84.53280985917617,
                33.89081188490912
            ]
            },
            "properties": {
            "phoneFormatted": "(404) 565-4025",
            "phone": "4045654025",
            "address": "3485 S Cobb Dr SE",
            "city": "Smyrna",
            "country": "United States",
            "postalCode": "30080",
            "state": "GA"
            }
        },
        // That Dirty Dog inc
        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                -84.38482877057497,
                34.07406531002962
            ]
            },
            "properties": {
            "phoneFormatted": "(770) 993-7877",
            "phone": "7709937877",
            "address": "11255 Woodstock Rd # 100",
            "city": "Roswell",
            "country": "United States",
            "postalCode": "30075",
            "state": "GA"
            }
        },
        // cobb county animal services
        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                 -84.58927632704605,
                 33.9110133330079
            ]
            },
            "properties": {
            "phoneFormatted": "(770) 499-4136",
            "phone": "7704994136",
            "address": "1060 Al Bishop Dr",
            "city": "Marietta",
            "country": "United States",
            "postalCode": "30008",
            "state": "GA"
            }
        },
         // Best friends life saving center
        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                -84.54790003582532,
                33.91828468253984, 
            ]
            },
            "properties": {
            "phoneFormatted": "(404) 815-6680",
            "phone": "4048156680",
            "address": "1692 Oak St SE",
            "city": "Marietta",
            "country": "United States",
            "postalCode": "30060",
            "state": "GA"
            }
        },
         // Humane society of cobb county
        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                -84.53816443789103,
                33.95463212186432, 
            ]
            },
            "properties": {
            "phoneFormatted": "(770) 428-5678",
            "phone": "7704285678",
            "address": "148 Fairground St SE",
            "city": "Marietta",
            "country": "United States",
            "postalCode": "30060",
            "state": "GA"
            }
        },
         // Homeless pets foundation inc
        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                -84.51431222295201,
                33.96391842236463, 
            ]
            },
            "properties": {
            "phoneFormatted": "(770) 971-0100",
            "phone": "7709710100",
            "address": "1343 Gresham Rd NE",
            "city": "Marietta",
            "country": "United States",
            "postalCode": "30062",
            "state": "GA"
            }
        },
        // our pals place
        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                 -84.52161392155787,
                 34.06620241695916,
            ]
            },
            "properties": {
            "phoneFormatted": "(678) 795-0202",
            "phone": "6787950202",
            "address": "4508 Canton Rd",
            "city": "Marietta",
            "country": "United States",
            "postalCode": "30066",
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
