document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const numChildren = parseInt(urlParams.get("numChildren"), 10) || 0; // Nombre d'enfants transmis

    let totalFees = 0;
    const childrenSummaryContainer = document.getElementById("children-summary");
    const totalFeesElement = document.getElementById("total-fees-amount");

    // Parcourir les données des enfants transmises
    for (let i = 1; i <= numChildren; i++) {
        const name = urlParams.get(`child_${i}_name`) || "Onbekend";
        const firstname = urlParams.get(`child_${i}_firstname`) || "Onbekend";
        const year = urlParams.get(`child_${i}_year`) || "Onbekend";
        const section = urlParams.get(`child_${i}_section`) || "Geen"; // Section par défaut "Geen" si non définie
        const option = urlParams.get(`child_${i}_option`) || "Geen"; // Option par défaut "Geen"
        const fees = parseFloat(urlParams.get(`child_${i}_fees`) || 0); // Convertir les frais en number
        const description = urlParams.get(`child_${i}_description`) || "Geen beschrijving beschikbaar"; // Description par défaut

        // Création d'un élément pour afficher le récapitulatif de l'enfant
        const childSummary = document.createElement("div");
        childSummary.classList.add("child-summary");
        childSummary.innerHTML = `
            <h3>Kind ${i}</h3>
            <p><strong>Naam:</strong> ${name}</p>
            <p><strong>Voornaam:</strong> ${firstname}</p>
            <p><strong>Schooljaar:</strong> ${year}</p>
            <p><strong>Studierichting:</strong> ${section}</p>
            <p><strong>Optie:</strong> ${option}</p>
            <p><strong>Verplichte kosten:</strong> ${fees.toFixed(2)}€</p>
            <p class="description"><strong>Beschrijving kosten:</strong> ${description}</p>
        `;
        childrenSummaryContainer.appendChild(childSummary);

        // Ajouter les frais au total
        totalFees += fees;
    }

    // Mettre à jour le total des frais
    totalFeesElement.textContent = `${totalFees.toFixed(2)}€`; // Afficher avec 2 décimales

    // Gérer le bouton "Modifier la commande"
    document.getElementById("edit-order").addEventListener("click", function () {
        console.log("Bouton 'Modifier la commande' cliqué");
        const localStorageData = [];

        // Sauvegarder les données dans le localStorage
        for (let i = 1; i <= numChildren; i++) {
            const name = urlParams.get(`child_${i}_name`) || "";
            const firstname = urlParams.get(`child_${i}_firstname`) || "";
            const year = urlParams.get(`child_${i}_year`) || "";
            const section = urlParams.get(`child_${i}_section`) || "";
            const option = urlParams.get(`child_${i}_option`) || "";
            const fees = urlParams.get(`child_${i}_fees`) || "";
            const description = urlParams.get(`child_${i}_description`) || "";

            // Stocker les données enfant par enfant dans un tableau pour localStorage
            localStorageData.push({
                name,
                firstname,
                year,
                section,
                option,
                fees,
                description,
            });

            console.log(
                `Sauvegarde de l'enfant ${i} - Nom: ${name}, Prénom: ${firstname}`
            );
        }

        // Sauvegarder dans le localStorage
        localStorage.setItem("childrenData", JSON.stringify(localStorageData));

        console.log("Redirection vers la page précédente");
        window.history.back(); // Revenir à la page précédente
    });

    // Gestion du bouton "Confirmer la commande"
    document.getElementById("confirm-order").addEventListener("click", function () {
        console.log("Commande confirmée !");
        // Ici tu pourrais envoyer les données à un serveur ou rediriger l'utilisateur
        alert("Commande confirmée !");
        // Optionnellement, rediriger vers une page de confirmation
        // window.location.href = 'confirmation.html'; // Exemple
    });
});