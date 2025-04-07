document.getElementById('calendarForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstDay = parseInt(document.getElementById('firstDay').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);
    const size = document.getElementById('size').value;
    const headerColor = document.getElementById('headerColor').value;
    const dayColor = document.getElementById('dayColor').value;

    calendrier(firstDay, month, year, size, headerColor, dayColor);
});

function calendrier(firstDay, month, year, size = 'medium', headerColor = '#3498db', dayColor = '#2ecc71') {
    const daysOfWeek = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
    const monthNames = [
        'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
        'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
    ];

    const daysInMonth = new Date(year, month, 0).getDate();
    const calendar = document.createElement('table');
    calendar.classList.add('calendar', size);

    // Ajouter l'en-tête du calendrier
    const caption = calendar.createCaption();
    caption.textContent = `${monthNames[month - 1]} ${year}`;
    caption.style.captionSide = 'top';
    caption.style.fontSize = '1.5em';
    caption.style.marginBottom = '10px';

    // Ajouter les jours de la semaine
    const header = calendar.createTHead();
    const headerRow = header.insertRow();
    daysOfWeek.forEach(day => {
        const th = document.createElement('th');
        th.textContent = day;
        th.style.backgroundColor = headerColor;
        headerRow.appendChild(th);
    });

    // Ajouter les jours du mois
    const body = calendar.createTBody();
    let currentDay = 1;
    let row = body.insertRow();

    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay - 1) {
                // Ajouter des cellules vides avant le premier jour du mois
                const emptyCell = row.insertCell();
                emptyCell.textContent = '';
            } else if (currentDay <= daysInMonth) {
                const cell = row.insertCell();
                cell.textContent = currentDay;
                cell.style.backgroundColor = dayColor;
                cell.style.color = '#fff';
                currentDay++;
            }
        }
        row = body.insertRow();
    }

    document.getElementById('calendar').innerHTML = '';
    document.getElementById('calendar').appendChild(calendar);
}