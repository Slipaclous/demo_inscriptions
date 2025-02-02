const registeredChildren = [
    { id: 1, nom: "Jan", prenom: "Peters", annee: "1ste jaar", section: "Generaal", option: "META MENS - TALEN" },
    { id: 2, nom: "Ann", prenom: "Koek", annee: "2de jaar", section: "Doorstroom (ASO)", option: "ECO keuze Duits extra" }
];


const schoolData = [
    {
        year: "1ste jaar",
        sections: [
            {
                name: "Generaal",
                options: [
                    { name: "META MENS - TALEN", fees: { amount: 100, description: "Boekkosten: 40€, Examens: 30€, Materialen: 30€." } },
                    { name: "LA LATIJN", fees: { amount: 80, description: "Boekkosten: 30€, Examens: 25€, Materialen: 25€." } },
                    { name: "LAME LATIJN - MENS", fees: { amount: 70, description: "Boekkosten: 25€, Examens: 20€, Materialen: 25€." } },
                    { name: "MEWE MENS - WETENSCHAPPEN", fees: { amount: 70, description: "Boekkosten: 28€, Examens: 22€, Materialen: 20€." } },
                    { name: "LATA LATIJN - TALEN", fees: { amount: 70, description: "Boekkosten: 25€, Examens: 23€, Materialen: 22€." } },
                    { name: "INWE INGENIEU(r)S ONTWERP - WET", fees: { amount: 70, description: "Boekkosten: 26€, Examens: 21€, Materialen: 23€." } },
                    { name: "TAON TALEN - ONDERNEMEN", fees: { amount: 70, description: "Boekkosten: 22€, Examens: 24€, Materialen: 24€." } },
                    { name: "INON INGENIEU(r)S ONTWERP", fees: { amount: 70, description: "Boekkosten: 27€, Examens: 22€, Materialen: 21€." } },
                    { name: "WETA WETENSCHAPPEN - TALEN", fees: { amount: 70, description: "Boekkosten: 24€, Examens: 21€, Materialen: 25€." } },
                    { name: "WEON WETENSCHAPPEN - ONDERNEMEN", fees: { amount: 70, description: "Boekkosten: 26€, Examens: 22€, Materialen: 22€." } },
                    { name: "MEON MENS - ONDERNEMEN", fees: { amount: 70, description: "Boekkosten: 25€, Examens: 23€, Materialen: 22€." } },
                ]
            }
        ]
    },
    {
        year: "2de jaar",
        sections: [
            {
                name: "Doorstroom (ASO)",
                options: [
                    { name: "ECO keuze Duits extra", fees: { amount: 110, description: "Boekkosten: 45€, Examens: 40€, Materialen: 25€." } },
                    { name: "ECO keuze wiskunde extra", fees: { amount: 85, description: "Boekkosten: 35€, Examens: 30€, Materialen: 20€." } },
                    { name: "HW (humane wetenschappen)", fees: { amount: 85, description: "Boekkosten: 32€, Examens: 29€, Materialen: 24€." } },
                    { name: "LAT keuze Duits extra", fees: { amount: 85, description: "Boekkosten: 31€, Examens: 28€, Materialen: 26€." } },
                    { name: "LAT keuze wiskunde extra", fees: { amount: 85, description: "Boekkosten: 30€, Examens: 27€, Materialen: 28€." } },
                    { name: "NW (natuurwetenschappen)", fees: { amount: 85, description: "Boekkosten: 34€, Examens: 28€, Materialen: 23€." } },
                ]
            },
            {
                name: "dubbele finaliteit (TSO)",
                options: [
                    { name: "B&O (bedrijf en organisatie)", fees: { amount: 110, description: "Boekkosten: 40€, Examens: 35€, Materialen: 35€." } },
                    { name: "ELME (elektromechanische technieken)", fees: { amount: 110, description: "Boekkosten: 45€, Examens: 35€, Materialen: 30€." } },
                    { name: "M&W (maatschappij en welzijn)", fees: { amount: 110, description: "Boekkosten: 42€, Examens: 32€, Materialen: 36€." } },
                    { name: "SPORT", fees: { amount: 110, description: "Boekkosten: 38€, Examens: 32€, Materialen: 40€." } },
                ]
            },
            {
                name: "arbeidsmarkt (BSO)",
                options: [
                    { name: "ELEK (elektriciteit)", fees: { amount: 110, description: "Boekkosten: 43€, Examens: 33€, Materialen: 34€." } },
                    { name: "O&L (organisatie en logistiek)", fees: { amount: 110, description: "Boekkosten: 45€, Examens: 30€, Materialen: 35€." } },
                ]
            }
        ]
    },
    {
        year: "3de jaar",
        options: [
            { name: "BIOWE BIOTECHNOLOGISCHE WET", fees: { amount: 150, description: "Boekkosten: 60€, Examens: 50€, Materialen: 40€." } },
            { name: "NAWE NATUURWETENSCHAPPEN", fees: { amount: 130, description: "Boekkosten: 50€, Examens: 45€, Materialen: 35€." } },
            { name: "ECWE ECONOMISCHE WETENSCHAPPEN", fees: { amount: 130, description: "Boekkosten: 48€, Examens: 42€, Materialen: 40€." } },
            { name: "GRLA GRIEKS - LATIJN", fees: { amount: 130, description: "Boekkosten: 45€, Examens: 40€, Materialen: 45€." } },
            { name: "LA LATIJN", fees: { amount: 130, description: "Boekkosten: 42€, Examens: 40€, Materialen: 48€." } },
            { name: "HUWE HUMANE WETENSCHAPPEN", fees: { amount: 130, description: "Boekkosten: 45€, Examens: 35€, Materialen: 50€." } },
            { name: "BEWE BEDRIJFSWETENSCHAPPEN", fees: { amount: 130, description: "Boekkosten: 42€, Examens: 38€, Materialen: 50€." } },
            { name: "MAWE MAATSCHAPIJ & WELZIJNSWET", fees: { amount: 130, description: "Boekkosten: 44€, Examens: 36€, Materialen: 50€." } },
            { name: "B&O - Bedrijf en organisatie", fees: { amount: 130, description: "Boekkosten: 45€, Examens: 35€, Materialen: 50€." } },
            { name: "NAWE NATUURWETENSCHAPPEN", fees: { amount: 130, description: "Boekkosten: 43€, Examens: 38€, Materialen: 49€." } }
        ]
    }
];



// Update Fees Function
function updateFees(year, section, option, feesContainer) {
    let feeData;

    const yearData = schoolData.find(data => data.year === year);
    if (yearData) {
        if (yearData.sections && section) {
            const sectionData = yearData.sections.find(sec => sec.name === section);
            feeData = sectionData?.options.find(opt => opt.name === option)?.fees;
        } else if (yearData.options) {
            feeData = yearData.options.find(opt => opt.name === option)?.fees;
        }
    }

    if (feeData) {
        feesContainer.querySelector("span").textContent = feeData.amount;
        feesContainer.dataset.description = feeData.description;
    } else {
        feesContainer.style.display = "none";
    }
}

// Populate Options Function
function populateOptions(container, options, selectedOption) {
    container.innerHTML = ` 
        <label>Optie:</label>
        <select required>
            <option value="" disabled ${!selectedOption ? "selected" : ""}>Selecteer een optie</option>
            ${options
                .map(
                    opt => `<option value="${opt.name}" ${opt.name === selectedOption ? "selected" : ""}>${opt.name}</option>`
                )
                .join("")}
        </select>
    `;
}
// Mise à jour de registeredChildren avec des enfants existants

// Fonction pour remplir le formulaire avec les données d'un enfant
function fillChildForm(childData, childForm, index) {
    // Remplir les champs de base
    childForm.querySelector(`#first-name-${index}`).value = childData.nom;
    childForm.querySelector(`#last-name-${index}`).value = childData.prenom;

    // Sélectionner l'année
    const yearSelect = childForm.querySelector(`#child-year-${index}`);
    yearSelect.value = childData.annee;

    // Remplir les sections et options basées sur l'année
    const yearData = schoolData.find(data => data.year === childData.annee);
    const sectionSelect = childForm.querySelector(`#child-section-${index}`);
    const optionsContainer = childForm.querySelector(".options-container");

    if (yearData) {
        if (yearData.sections) {
            sectionSelect.innerHTML = `
                <option value="" disabled>Selecteer een studierichting</option>
                ${yearData.sections.map(sec => `<option value="${sec.name}" ${sec.name === childData.section ? "selected" : ""}>${sec.name}</option>`).join("")}
            `;
            const sectionData = yearData.sections.find(sec => sec.name === childData.section);
            if (sectionData) {
                populateOptions(optionsContainer, sectionData.options, childData.option);
            }
        } else {
            populateOptions(optionsContainer, yearData.options, childData.option);
        }
    }

    // Mettre à jour les frais
    const feesContainer = childForm.querySelector(".fees-container");
    updateFees(childData.annee, childData.section, childData.option, feesContainer);
}

// Main Form Handler
document.getElementById("num-children").addEventListener("change", function () {
    const numChildren = parseInt(this.value);
    const container = document.getElementById("children-forms-container");
    container.innerHTML = "";

    for (let i = 1; i <= numChildren; i++) {
        const childForm = document.createElement("div");
        childForm.classList.add("child-form");
        childForm.innerHTML = `
            <h3>Kind ${i}</h3>
            <label for="first-name-${i}">Naam:</label>
            <input type="text" id="first-name-${i}" class="child-first-name" required>

            <label for="last-name-${i}">Voornaam:</label>
            <input type="text" id="last-name-${i}" class="child-last-name" required>

            <label>Leerjaar:</label>
            <select id="child-year-${i}" class="child-year" required>
                <option value="" disabled selected>Selecteer een leerjaar</option>
                ${schoolData.map(data => `<option value="${data.year}">${data.year}</option>`).join("")}
            </select>

            <div class="section-container" style="display:none;">
                <label>Studierichting:</label>
                <select id="child-section-${i}" class="child-section" required></select>
            </div>

            <div class="options-container"></div>

            <div class="fees-container" style="display:none;">
                <p><strong>Kosten:</strong> <span>0</span> €</p>
            </div>
        `;
        container.appendChild(childForm);

        const yearSelect = childForm.querySelector(".child-year");
        const sectionContainer = childForm.querySelector(".section-container");
        const sectionSelect = sectionContainer.querySelector("select");
        const optionsContainer = childForm.querySelector(".options-container");
        const feesContainer = childForm.querySelector(".fees-Acontainer");

        // Sélectionner un enfant enregistré
        const childSelect = document.createElement("select");
        childSelect.classList.add("child-select"); // Classe CSS
        childSelect.innerHTML = `
            <option value="" disabled selected>Selecteer een kind</option>
            ${registeredChildren.map(child => `<option value="${child.id}">${child.nom} ${child.prenom}</option>`).join("")}
        `;
        childForm.prepend(childSelect);

        childSelect.addEventListener("change", function () {
            const selectedChildId = parseInt(this.value);
            const selectedChild = registeredChildren.find(child => child.id === selectedChildId);

            if (selectedChild) {
                fillChildForm(selectedChild, childForm, i);
            }
        });

        yearSelect.addEventListener("change", function () {
            const selectedYear = this.value;
            const yearData = schoolData.find(data => data.year === selectedYear);

            if (yearData) {
                if (yearData.sections) {
                    sectionContainer.style.display = "block";
                    sectionSelect.innerHTML = `
                        <option value="" disabled selected>Selecteer een studierichting</option>
                        ${yearData.sections.map(sec => `<option value="${sec.name}">${sec.name}</option>`).join("")}
                    `;
                    optionsContainer.innerHTML = "";
                } else {
                    sectionContainer.style.display = "none";
                    populateOptions(optionsContainer, yearData.options);
                }
            }
        });

        sectionSelect.addEventListener("change", function () {
            const selectedYear = yearSelect.value;
            const selectedSection = this.value;
            const yearData = schoolData.find(data => data.year === selectedYear);
            const sectionData = yearData.sections.find(sec => sec.name === selectedSection);

            populateOptions(optionsContainer, sectionData.options);
        });

        optionsContainer.addEventListener("change", function (event) {
            const selectedYear = yearSelect.value;
            const selectedSection = sectionContainer.style.display !== "none" ? sectionSelect.value : null;
            const selectedOption = event.target.value;

            updateFees(selectedYear, selectedSection, selectedOption, feesContainer);
        });
    }
});

document.getElementById('submit-form').addEventListener('click', function (event) {
    event.preventDefault();

    const numChildren = document.querySelectorAll('.child-form').length;
    const urlParams = new URLSearchParams();
    let formValid = true;

    urlParams.append('numChildren', numChildren);

    for (let i = 1; i <= numChildren; i++) {
        const nameInput = document.getElementById(`first-name-${i}`);
        const firstnameInput = document.getElementById(`last-name-${i}`);
        const yearSelect = document.getElementById(`child-year-${i}`);
        const sectionSelect = document.getElementById(`child-section-${i}`);
        const optionsContainer = document.querySelector(`.child-form:nth-child(${i}) .options-container`);
        const feesContainer = document.querySelector(`.child-form:nth-child(${i}) .fees-container`);
        const optionSelect = optionsContainer?.querySelector("select");

        // Validation : Vérifiez si les champs requis existent
        if (!nameInput || !firstnameInput || !yearSelect) {
            formValid = false;
            alert(`Champs de base manquants pour l'enfant ${i}. Veuillez remplir tous les champs obligatoires.`);
            break;
        }

        // Récupération des valeurs de chaque champ
        const name = nameInput.value.trim();
        const firstname = firstnameInput.value.trim();
        const year = yearSelect.value.trim();
        const section = sectionSelect ? sectionSelect.value.trim() : '';
        const option = optionSelect ? optionSelect.value.trim() : '';
        const fees = feesContainer.querySelector("span")?.textContent?.trim() || '0';
        const description = feesContainer.dataset.description || '';

        // Vérifiez si les champs requis sont vides
        if (!name || !firstname || !year || !fees) {
            formValid = false;
            alert(`Veuillez remplir toutes les informations pour l'enfant ${i}.`);
            break;
        }

        // Validation spécifique lorsque l'année contient des sections
        const yearData = schoolData.find(data => data.year === year);
        if (yearData && Array.isArray(yearData.sections) && yearData.sections.length > 0) {
            if (!section && sectionSelect) {
                formValid = false;
                alert(`Veuillez sélectionner une section pour ${name} (${year}).`);
                break;
            }
        }

        // Validation pour les options
        if (yearData && yearData.options && !option) {
            formValid = false;
            alert(`Veuillez sélectionner une option pour ${name} (${year}).`);
            break;
        }

        // Ajout des données à l'URL
        urlParams.append(`child_${i}_name`, name);
        urlParams.append(`child_${i}_firstname`, firstname);
        urlParams.append(`child_${i}_year`, year);
        urlParams.append(`child_${i}_section`, section);
        urlParams.append(`child_${i}_option`, option);
        urlParams.append(`child_${i}_fees`, fees);
        urlParams.append(`child_${i}_description`, description);
    }

    if (formValid) {
        window.location.href = `recapitulatif.html?${urlParams.toString()}`;
    }
});
document.addEventListener("DOMContentLoaded", function () {
    console.log("Chargement du formulaire...");

    // Récupérer les données depuis le localStorage
    const savedData = localStorage.getItem("childrenData");
    console.log("Contenu brut du localStorage:", savedData);
    
    if (savedData) {
        try {
            const childrenData = JSON.parse(savedData);
            console.log("Données parsées:", childrenData);
            
            childrenData.forEach((child, index) => {
                console.log(`Données pour l'enfant ${index + 1}:`, child);
                const childIndex = index + 1;
    
                // Code pour remplir les champs du formulaire
                document.querySelector(`#child_${childIndex}_name`).value = child.name || "";
                document.querySelector(`#child_${childIndex}_firstname`).value = child.firstname || "";
                document.querySelector(`#child_${childIndex}_year`).value = child.year || "";
                document.querySelector(`#child_${childIndex}_section`).value = child.section || "";
                document.querySelector(`#child_${childIndex}_option`).value = child.option || "";
                document.querySelector(`#child_${childIndex}_fees`).value = child.fees || "";
                document.querySelector(`#child_${childIndex}_description`).value = child.description || "";
            });
        } catch (error) {
            console.error("Erreur lors du parsing des données JSON:", error);
        }
    } else {
        console.log("Aucune donnée trouvée dans localStorage.");
    }

    // Ajouter un bouton de reset pour vider le localStorage si nécessaire
    const resetButton = document.getElementById("reset-form");
    if (resetButton) {
        resetButton.addEventListener("click", function () {
            localStorage.removeItem("childrenData");
            console.log("Données du localStorage supprimées !");
        });
    }
});

