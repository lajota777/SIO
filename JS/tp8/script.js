function calculerDevis() {
    const nom = document.getElementById('nom').value;
    const adresse = document.getElementById('adresse').value;
    const telephone = document.getElementById('telephone').value;
    const email = document.getElementById('email').value;
    const longueur = parseFloat(document.getElementById('longueur').value);
    const largeur = parseFloat(document.getElementById('largeur').value);
    const epaisseur = parseFloat(document.getElementById('epaisseur').value) / 100; // convertir en mètres

    const volumeBeton = longueur * largeur * epaisseur;
    const nbCamions = Math.ceil(volumeBeton / 9);
    const totalBeton = volumeBeton * 91;
    const totalTransport = nbCamions * 140;
    const sousTotal = totalBeton + totalTransport;
    const tva = sousTotal * 0.20;
    const totalTTC = sousTotal + tva;

    document.getElementById('dateDevis').innerText = new Date().toLocaleDateString();
    document.getElementById('nomClient').innerText = nom;
    document.getElementById('adresseClient').innerText = adresse;
    document.getElementById('telephoneClient').innerText = telephone;
    document.getElementById('emailClient').innerText = email;
    document.getElementById('volumeBeton').innerText = volumeBeton.toFixed(2);
    document.getElementById('nbCamions').innerText = nbCamions;
    document.getElementById('totalBeton').innerText = totalBeton.toFixed(2) + '€';
    document.getElementById('totalTransport').innerText = totalTransport.toFixed(2) + '€';
    document.getElementById('sousTotal').innerText = sousTotal.toFixed(2) + '€';
    document.getElementById('tva').innerText = tva.toFixed(2) + '€';
    document.getElementById('totalTTC').innerText = totalTTC.toFixed(2) + '€';

    document.getElementById('devis').classList.remove('hidden');
}
