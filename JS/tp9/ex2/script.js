document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('visitForm');
    const visitorTable = document.getElementById('visitorTable').querySelector('tbody');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const nom = document.getElementById('nom').value;
        const prenom = document.getElementById('prenom').value;
        const etudes = document.getElementById('etudes').value;

        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${nom}</td>
            <td>${prenom}</td>
            <td>${etudes}</td>
        `;

        visitorTable.appendChild(newRow);

        form.reset();
    });
});
