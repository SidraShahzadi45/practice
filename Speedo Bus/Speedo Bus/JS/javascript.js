// document.getElementById('route-form').addEventListener('submit', function(e) {
//     e.preventDefault();

//     const start = document.getElementById('start').value;
//     const end = document.getElementById('end').value;

//     const routeDisplay = document.getElementById('route-display');
//     routeDisplay.style.display = 'block';
//     routeDisplay.innerHTML = `<h2>Route Summary</h2><p>Starting Point: <strong>${start}</strong></p><p>Ending Point: <strong>${end}</strong></p>`;

//     // Optional: Clear the inputs
//     document.getElementById('start').value = '';
//     document.getElementById('end').value = '';
// });


// // Sample data for routes and bus numbers
// const busRoutes = {
//     "Gulberg": { "Liberty": { busNumber: "10", route: "Gulberg to Liberty" } },
//     "Liberty": { "Gulberg": { busNumber: "10", route: "Liberty to Gulberg" } },
//     "Model Town": { "Gulberg": { busNumber: "15", route: "Model Town to Gulberg" } },
//     "Gulberg": { "Model Town": { busNumber: "15", route: "Gulberg to Model Town" } },
//     // Add more routes as necessary
// };

// document.getElementById('route-form').addEventListener('submit', function(e) {
//     e.preventDefault();

//     const start = document.getElementById('start').value.trim();
//     const end = document.getElementById('end').value.trim();
//     const routeDisplay = document.getElementById('route-display');

//     // Reset the display
//     routeDisplay.style.display = 'none';
//     routeDisplay.innerHTML = '';

//     // Check for a valid route
//     if (busRoutes[start] && busRoutes[start][end]) {
//         const busInfo = busRoutes[start][end];
//         routeDisplay.innerHTML = `<h2>Route Summary</h2>
//                                   <p>Starting Point: <strong>${start}</strong></p>
//                                   <p>Ending Point: <strong>${end}</strong></p>
//                                   <p>Bus Number: <strong>${busInfo.busNumber}</strong></p>
//                                   <p>Route: <strong>${busInfo.route}</strong></p>`;
//         routeDisplay.style.display = 'block';
//     } else {
//         routeDisplay.innerHTML = `<h2>No Route Found</h2>
//                                   <p>Sorry, there is no bus route available from <strong>${start}</strong> to <strong>${end}</strong>.</p>`;
//         routeDisplay.style.display = 'block';
//     }

//     // Clear inputs
//     document.getElementById('start').value = '';
//     document.getElementById('end').value = '';
// });








const speedoBusesLahore = [
    {
        busNumber: 'SB-001',
        routeNumber: 'R1',
        startLocation: 'Railway Station',
        endLocation: 'Bhatti Chowk',
        stops: ['Railway Station' , 'Ek Moriya' , 'Nawaz Sharif Hospital' , 'Kashmiri Gate' , 'Lari Adda' , 'Azadi Chowk' , 'Texali Chowk' , 'Bhatti Chowk']
    },
    {
        busNumber: 'SB-002',
        routeNumber: 'R2',
        startLocation: 'Samanabad Mor',
        endLocation: 'Bhatti Chowk',
        stops: ['Samanabad Morr' , 'Corporation Chowk' , 'Taj Company' , ' Sanda' , 'Double Sarkan' , 'Moon Market' , 'Ganda Nala' , 'Bhatti Chowk']
    },
    {
        busNumber: 'SB-003',
        routeNumber: 'R3',
        startLocation: 'Railway Station',
        endLocation: 'Shahdara Lari Adda',
        stops: ['Railway Station' , 'Ek Moriya' , 'Nawaz Sharif Hospital' , 'Kashmiri Gate' , 'Lari Adda' , 'Azadi Chowk' , 'Timber Market' , 'METRO' , 'Niazi Chowk' , 'Shahdara Metro Station' , 'Shahdara Lari Adda']
    },
    {
        busNumber: 'SB-004',
        routeNumber: 'R4',
        startLocation: 'R.A. Bazar',
        endLocation: 'Chungi Amar Sidhu',
        stops: ['R.A Bazar' , 'Nadeem Chowk' , 'Defence Morr' , 'Shareef Market' , 'Walton' , 'Qainchi' , 'Ghazi Chowk' , 'Chungi Amar Sidhu']
    },
    {
        busNumber: 'SB-005',
        routeNumber: 'R5',
        startLocation: 'Shad Bagh Underpass ',
        endLocation: 'Bhatti Chowk',
        stops: ['Shad Bagh Underpass' , 'Rajput Park' , 'Madina Chowk' , 'Lohay Wali Pulley' , 'Badami Bagh' , 'Lari Adda Gol Chakar' , 'Azadi Chowk' , 'Taxali Chowk' , 'Bhatti Chowk']
    },
    {
        busNumber: 'SB-006',
        routeNumber: 'R6',
        startLocation: 'Babu Sabu',
        endLocation: 'Raj Garh Chowk',
        stops: ['Babu Sabu' , 'Niazi Adda' , 'City Bus Stand' , 'Chowk Yateem Khana' , 'Bhala Stop' , 'Samanabad Morr' , 'Chauburji' , 'Riwaz Garden' , 'M.A.O College' , 'Firdous Cinema' , 'Raj Garh Chowk']
    },
    {
        busNumber: 'SB-007',
        routeNumber: 'R7',
        startLocation: 'Bagrian',
        endLocation: 'Chungi Amar Sidhu',
        stops: ['Bagrian' , 'Depot Chowk' , 'Minhaj University' , 'Hamdard Chowk' , 'Rehmat Eye Hospital' , 'Pindi Stop' , 'Peco Morr' , 'Kot Lakhpat Railway Station' , 'Phatak Mandi' , 'Qainchi' , 'Ghazi Chowk' , 'Chungi Amar Sidhu']
    },
    {
        busNumber: 'SB-008',
        routeNumber: 'R8',
        startLocation: 'Doctor Hospital',
        endLocation: 'Canal',
        stops: ['Doctor Hospital' , 'Wafaqi Colony' , 'IBA Stop' , 'Hailey College' , 'Campus Pull' , 'Barkat Market' , 'Kalma Chowk' , 'Qaddafi Stadium' , 'Canal']
    },
    {
        busNumber: 'SB-009',
        routeNumber: 'R9',
        startLocation: 'Railway Station',
        endLocation: 'Sham Nagar',
        stops: ['Railway Station' , 'Haji Camp' , 'Shimla Pahari' , 'Lahore Zoo' , 'Chairing Cross' , 'Ganga Ram Hospital' , 'Qartaba Chowk' , 'Chauburji' , 'Sham Nagar']
    },
    {
        busNumber: 'SB-010',
        routeNumber: 'R10',
        startLocation: 'Multan Chungi',
        endLocation: 'Qartaba Chowk ',
        stops: ['Multan Chungi' , 'Mustafa Town' , 'Karim Block Market' , 'PU Examination Center' , 'Bhekewal Morr' , 'Wahdat Colony' , 'Naqsha Stop' , 'Canal' , 'Ichra' , 'Shama' ,  'Qartaba Chowk']
    },
    {
        busNumber: 'SB-011',
        routeNumber: 'R11',
        startLocation: 'Babu Sabu',
        endLocation: 'Main Market Gulberg',
        stops: ['Babu Sabu' , 'Niazi Adda' , 'City Bus Stand' , 'Chowk Yateem Khana' , 'Scheme Morr' , 'Flat Stop' , 'Dubai Chowk' , 'Bhekewal Morr' , 'Sheikh Zaid Hospital' , 'Campus Pull' , 'Barkat Market' , 'Kalma Chowk' , 'Liberty Chowk' , 'Hafeez Center' , 'Mini Market' , 'Main Market, Gulberg']
    },
    {
        busNumber: 'SB-012',
        routeNumber: 'R12',
        startLocation: 'R.A Bazar',
        endLocation: 'Civil Secretariat',
        stops: ['R.A Bazar' , 'PAF Market' , 'Girja Chowk' , 'Afshan Chowk' , 'Fortress Stadium' , 'Gymkhana' , 'Aitchison College' , 'PC Hotel' , 'Lahore Zoo' , 'Chairing Cross' , 'GPO' , 'Anarkali' , 'Civil Secretariat']
    },
    {
        busNumber: 'SB-013',
        routeNumber: 'R13',
        startLocation: 'Bagrian',
        endLocation: 'Kalma Chowk',
        stops: ['Bagrian' , 'Ghazi Chowk' , 'UMT Stop' , 'Khokhar Chowk' , 'Akbar Chowk' , 'Pindi Stop' , 'Peco Morr' , 'Phatak Mandi' , 'Ittefaq Hospital' , 'Model Town' , 'Kalma Chowk']
    },
    {
        busNumber: 'SB-014',
        routeNumber: 'R14',
        startLocation: 'R.A Bazar',
        endLocation: 'Chungi Amar Sidhu',
        stops: ['R.A Bazar' , 'Fauji Foundation' , 'Ali View Garden' , 'Bhatta Chowk' , 'DHA Nursery' , 'LESCO' , 'Chota Ishara Stop' , 'Naka Stop' , 'Ghazi Chowk' , 'Chungi Amar Sidhu']
    },
    {
        busNumber: 'SB-015',
        routeNumber: 'R15',
        startLocation: 'Qartba Chowk',
        endLocation: 'Babu Sabu',
        stops: ['Qartba Chowk' , 'Hakeem M. Ajmal Khan Road' , 'Gulshan Ravi Road' , 'Kacha Ferozepur Road' , 'Babu Sabu ']
    },
    {
        busNumber: 'SB-016',
        routeNumber: 'R16',
        startLocation: 'Railway Station ',
        endLocation: 'Bhatti Chowk',
        stops: ['Railway Station' , 'Circular Road' , 'Ek Moriya' , 'Bhatti Chowk']
    },
    {
        busNumber: 'SB-017',
        routeNumber: 'R17',
        startLocation: 'Canal',
        endLocation: 'Railway Station',
        stops: ['Canal' , 'Main Boulevard Shadman' , 'Davis Road' , 'Shimla Pahari' , 'Haji Camp' , 'Railway Station']
    },
    {
        busNumber: 'SB-018',
        routeNumber: 'R18',
        startLocation: 'Bhatti Chowk',
        endLocation: 'Shimla Pahari',
        stops: ['Bhatti Chowk' , 'Circular Road' , 'Nisbat Road' , 'Abbot Road' , 'Shimla Pahari']
    },
    {
        busNumber: 'SB-19',
        routeNumber: 'R19',
        startLocation: 'Main Market',
        endLocation: 'Bhatti Chowk',
        stops: ['Main Market' , 'Jail Road' , 'Lytton Road' , 'Crust Road' , 'Lower Mall Road' , 'Bhatti Chowk']
    },
    {
        busNumber: 'SB-20',
        routeNumber: 'R20',
        startLocation: 'Jain Mandar',
        endLocation: 'Chowk Yateem Khana',
        stops: ['Jain Mandar' , 'Al-Mumtaz Road' , 'Poonch Road' , 'Lake Road' , 'Chowk Yateem Khana ']
    },
    {
        busNumber: 'SB-21',
        routeNumber: 'R21',
        startLocation: 'Depot Chowk',
        endLocation: 'Thokar Niaz Baig',
        stops: ['Depot Chowk' , 'Madar-e-Millat Road' , 'Ali Road' , 'Baig Road' , 'Canal Bank Road' , 'Thokar Niaz Baig']
    },
    {
        busNumber: 'SB-22',
        routeNumber: 'R22',
        startLocation: 'Depot Chowk',
        endLocation: 'Thokar Niaz Baig',
        stops: ['Depot Chowk' , 'Madar-e-Millat Road' , 'Sutlej Avenue' , 'Shahrah Nazria-e- Pakistan Avenue' , 'Thokar Niaz Baig']
    },
    {
        busNumber: 'SB-23',
        routeNumber: 'R23',
        startLocation: 'Valencia',
        endLocation: 'Thokar Niaz Baig',
        stops: ['Valencia' , 'Valencia Main Boulevard' , 'Khayaban-e-Jinnah' , 'Raiwind Road' , 'Thokar Niaz Baig']
    },
    {
        busNumber: 'SB-24',
        routeNumber: 'R24',
        startLocation: 'Multan Chungi',
        endLocation: 'Ghazi Chowk',
        stops: ['Multan Chungi' , 'College Road' , 'Maulana Shaukat Ali Road' , 'Wahdat Road' , 'Ghazi Chowk']
    },
    {
        busNumber: 'SB-25',
        routeNumber: 'R25',
        startLocation: 'R.A Bazar',
        endLocation: 'Railway Station',
        stops: ['R.A Bazar' , 'Lahore-Bedian Road' , 'Allama Iqbal Road' , 'Railway Station']
    },
    {
        busNumber: 'SB-26',
        routeNumber: 'R26',
        startLocation: 'R.A Bazar',
        endLocation: 'Daroghawala',
        stops: ['R.A Bazar' , 'G.T Road' , 'Shalimar Link Road' , 'Tufail Road' , 'Sarfraz Rafique Road' , 'Daroghawala']
    },
    {
        busNumber: 'SB-27',
        routeNumber: 'R27',
        startLocation: 'BataPur',
        endLocation: 'Daroghawala',
        stops: ['BataPur' , 'GT Road' , 'Daroghawala']
    },
    {
        busNumber: 'SB-28',
        routeNumber: 'R28',
        startLocation: 'Quaid e Azam Interchange',
        endLocation: 'Airport',
        stops: ['Quaid e Azam Interchange' , 'Harbanspura Road' , 'Zarar Shaheed Road' , 'Airport']
    },
    {
        busNumber: 'SB-29',
        routeNumber: 'R29',
        startLocation: 'Niazi Interchange',
        endLocation: 'Salamat Pura',
        stops: ['Niazi Interchange' , 'Lahore Ring Road' , 'Band Road' , 'Sue Wala Road' , 'Salamat Pura']
    },
    {
        busNumber: 'SB-30',
        routeNumber: 'R30',
        startLocation: 'Daroghawala',
        endLocation: 'Airport',
        stops: ['Daroghawala' , 'G.T. Road' , 'Shalimar Link Road' , 'Airport']
    },
    {
        busNumber: 'SB-31',
        routeNumber: 'R31',
        startLocation: 'Daroghawala',
        endLocation: 'Lari Adda',
        stops: ['Daroghawala' , 'Chamra Mandi' , 'Cooper Store' , 'UET' , 'Shalimar Chowk' , 'Lari Adda']
    },
    {
        busNumber: 'SB-32',
        routeNumber: 'R32',
        startLocation: 'Shimla Pahari',
        endLocation: 'Ek Moriya',
        stops: ['Shimla Pahari' , 'Durand Road' , 'Queen Mary Road' , 'Garhi Shahu Bridge' , 'Cooper Store' , 'Chamra Mandi' , 'Ek Moriya']
    },
    {
        busNumber: 'SB-33',
        routeNumber: 'R33',
        startLocation: 'Cooper Store',
        endLocation: 'Mughalpura',
        stops: ['Cooper Store' , 'Workshop Road' , 'Mughalpura Road' , 'Mughalpura']
    },
    {
        busNumber: 'SB-34',
        routeNumber: 'R34',
        startLocation: 'Singhpura',
        endLocation: 'Mughalpura',
        stops: ['Singhpura', 'Wheatman Road' , 'Griffin Road' , 'Mughalpura']
    },
];


// document.getElementById('route-form').addEventListener('submit', function(e) {
//     e.preventDefault();

//     const startStop = document.getElementById('start').value.trim();
//     const endStop = document.getElementById('end').value.trim();
//     const routeDisplay = document.getElementById('route-display');

//     // Reset the display
//     routeDisplay.style.display = 'none';
//     routeDisplay.innerHTML = '';

//     let foundRoute = false;

//     // Check each bus route for the specified start and end stops
//     speedoBusesLahore.forEach(bus => {
//         const stops = bus.stops;
//         const startIndex = stops.indexOf(startStop);
//         const endIndex = stops.indexOf(endStop);

//         if (startIndex !== -1 && endIndex !== -1 && startIndex < endIndex) {
//             foundRoute = true;
//             routeDisplay.innerHTML += `
//                 <h2>Route Summary</h2>
//                 <p>Bus Number: <strong>${bus.busNumber}</strong></p>
//                 <p>Route Number: <strong>${bus.routeNumber}</strong></p>
//                 <p>Stops: <strong>${stops.join(', ')}</strong></p>
//                 <hr>
//             `;
//         }
//     });

//     if (!foundRoute) {
//         routeDisplay.innerHTML = `<h2>No Route Found</h2>
//                                   <p>Sorry, there is no bus route available from <strong>${startStop}</strong> to <strong>${endStop}</strong>.</p>`;
//     }

//     routeDisplay.style.display = 'block';

//     // Clear inputs
//     document.getElementById('start').value = '';
//     document.getElementById('end').value = '';
// });


















// document.getElementById('route-form').addEventListener('submit', function(e) {
//     e.preventDefault();

//     const startStop = document.getElementById('start').value.trim();
//     const endStop = document.getElementById('end').value.trim();
//     const routeDisplay = document.getElementById('route-display');

//     // Reset the display
//     routeDisplay.style.display = 'none';
//     routeDisplay.innerHTML = '';

//     let foundRoute = false;

//     // Check each bus route for the specified start and end stops
//     speedoBusesLahore.forEach(bus => {
//         const stops = bus.stops;
//         const startIndex = stops.indexOf(startStop);
//         const endIndex = stops.indexOf(endStop);

//         // Check for forward route
//         if (startIndex !== -1 && endIndex !== -1 && startIndex < endIndex) {
//             foundRoute = true;
//             routeDisplay.innerHTML += `
//                 <h2>Route Summary (Forward)</h2>
//                 <p>Bus Number: <strong>${bus.busNumber}</strong></p>
//                 <p>Route Number: <strong>${bus.routeNumber}</strong></p>
//                 <p>Stops: <strong>${stops.join(', ')}</strong></p>
//                 <hr>
//             `;
//         }

//         // Check for reverse route
//         if (startIndex !== -1 && endIndex !== -1 && startIndex > endIndex) {
//             foundRoute = true;
//             routeDisplay.innerHTML += `
//                 <h2>Route Summary (Reverse)</h2>
//                 <p>Bus Number: <strong>${bus.busNumber}</strong></p>
//                 <p>Route Number: <strong>${bus.routeNumber}</strong></p>
//                 <p>Stops: <strong>${stops.join(', ')}</strong></p>
//                 <hr>
//             `;
//         }
//     });

//     if (!foundRoute) {
//         routeDisplay.innerHTML = `<h2>No Route Found</h2>
//                                   <p>Sorry, there is no bus route available from <strong>${startStop}</strong> to <strong>${endStop}</strong>.</p>`;
//     }

//     routeDisplay.style.display = 'block';

//     // Clear inputs
//     document.getElementById('start').value = '';
//     document.getElementById('end').value = '';
// });
















document.getElementById('route-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const startStop = document.getElementById('start').value.trim();
    const endStop = document.getElementById('end').value.trim();
    const routeDisplay = document.getElementById('route-display');

    // Reset the display
    routeDisplay.style.display = 'none';
    routeDisplay.innerHTML = '';

    let foundRoute = false;

    speedoBusesLahore.forEach(bus => {
        const stops = bus.stops;
        const startIndex = stops.indexOf(startStop);
        const endIndex = stops.indexOf(endStop);

        // Check for forward route
        if (startIndex !== -1 && endIndex !== -1 && startIndex < endIndex) {
            foundRoute = true;
            routeDisplay.innerHTML += `
                <h2>Route Summary (Forward)</h2>
                <p>Bus Number: <strong>${bus.busNumber}</strong></p>
                <p>Route Number: <strong>${bus.routeNumber}</strong></p>
                <p>Stops: <strong>${stops.join(', ')}</strong></p>
                <hr>
            `;
        }

        // Check for reverse route
        if (startIndex !== -1 && endIndex !== -1 && startIndex > endIndex) {
            foundRoute = true;
            routeDisplay.innerHTML += `
                <h2>Route Summary (Reverse)</h2>
                <p>Bus Number: <strong>${bus.busNumber}</strong></p>
                <p>Route Number: <strong>${bus.routeNumber}</strong></p>
                <p>Stops: <strong>${stops.join(', ')}</strong></p>
                <hr>
            `;
        }
    });

    if (!foundRoute) {
        routeDisplay.innerHTML = `<h2>No Route Found</h2>
                                  <p>Sorry, there is no bus route available from <strong>${startStop}</strong> to <strong>${endStop}</strong>.</p>`;
    }

    routeDisplay.style.display = 'block';

    // Clear inputs
    document.getElementById('start').value = '';
    document.getElementById('end').value = '';
});

// Autocomplete functionality
const startInput = document.getElementById('start');
const endInput = document.getElementById('end');
const startSuggestions = document.getElementById('start-suggestions');
const endSuggestions = document.getElementById('end-suggestions');

function showSuggestions(input, suggestionsContainer, stops) {
    const value = input.value.trim().toLowerCase();
    suggestionsContainer.innerHTML = '';
    if (value) {
        const filteredStops = stops.filter(stop => stop.toLowerCase().includes(value));
        filteredStops.forEach(stop => {
            const suggestionDiv = document.createElement('div');
            suggestionDiv.textContent = stop;
            suggestionDiv.addEventListener('click', () => {
                input.value = stop;
                suggestionsContainer.innerHTML = '';
            });
            suggestionsContainer.appendChild(suggestionDiv);
        });
    }
}

startInput.addEventListener('input', () => showSuggestions(startInput, startSuggestions, getAllStops()));
endInput.addEventListener('input', () => showSuggestions(endInput, endSuggestions, getAllStops()));

function getAllStops() {
    const allStops = [];
    speedoBusesLahore.forEach(bus => {
        allStops.push(...bus.stops);
    });
    return [...new Set(allStops)]; 
}
