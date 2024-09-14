document.addEventListener('DOMContentLoaded', () => {
    const linkedDutyForm = document.getElementById('linked-duty-form');
    const linkedDutyList = document.getElementById('linked-duty-list');

    // Handle linked duty scheduling
    linkedDutyForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const busId = document.getElementById('bus-id').value;
        const crewId = document.getElementById('crew-id').value;

        // Add to the list
        const listItem = document.createElement('li');
        listItem.textContent = `Bus ID: ${busId}, Crew ID: ${crewId}`;
        linkedDutyList.appendChild(listItem);

        // Clear form fields
        linkedDutyForm.reset();
    });

    // Route management (using a placeholder for map)
    const mapElement = document.getElementById('map');

    // Placeholder for map setup
    mapElement.innerHTML = '<p>Map visualization area (implement GIS here)</p>';
});

document.addEventListener('DOMContentLoaded', () => {
    // Existing linked duty code

    // Initialize Leaflet map
    const map = L.map('map').setView([28.6139, 77.2090], 13); // Center on Delhi

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Example of adding a marker
    L.marker([28.6139, 77.2090]).addTo(map)
        .bindPopup('Delhi')
        .openPopup();
});
