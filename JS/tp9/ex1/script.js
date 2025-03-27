document.addEventListener('DOMContentLoaded', () => {
    const definitions = new Map([
        ['PHP', {
            title: 'PHP',
            description: 'PHP est un langage de script open-source principalement utilisé pour le développement web.',
            image: 'https://via.placeholder.com/150'
        }],
        ['JavaScript', {
            title: 'JavaScript',
            description: 'JavaScript est un langage de programmation qui permet de créer du contenu mis à jour dynamiquement.',
            image: 'https://via.placeholder.com/150'
        }]
    ]);

    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popup-title');
    const popupDescription = document.getElementById('popup-description');
    const popupImage = document.getElementById('popup-image');

    document.querySelectorAll('.definition').forEach(element => {
        element.addEventListener('click', (event) => {
            const term = event.target.getAttribute('data-term');
            const definition = definitions.get(term);
            if (definition) {
                popupTitle.textContent = definition.title;
                popupDescription.textContent = definition.description;
                popupImage.src = definition.image;
                popupImage.style.display = definition.image ? 'block' : 'none';

                const rect = event.target.getBoundingClientRect();
                popup.style.left = `${rect.left + window.scrollX}px`;
                popup.style.top = `${rect.bottom + window.scrollY + 5}px`;
                popup.style.display = 'block';
            }
        });
    });

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.definition')) {
            popup.style.display = 'none';
        }
    });
});
