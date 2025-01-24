const registeredChildren = [
    { id: 1, nom: "Dupont", prenom: "Jean", annee: "1ste jaar", section: "Algemeen", option: "Wiskunde" },
    { id: 2, nom: "Durand", prenom: "Marie", annee: "2de jaar", section: "Overgang", option: "Grafisch ontwerp" }
];

const schoolData = [
    {
        year: "1ste jaar",
        sections: [
            {
                name: "Algemeen",
                options: [
                    { name: "Wiskunde", fees: { amount: 100, description: "Avanced wiskunde om de basis te versterken." } },
                    { name: "Frans", fees: { amount: 80, description: "Cursus Franse taal en literatuur." } },
                    { name: "Geschiedenis", fees: { amount: 70, description: "Verkenning van belangrijke wereldgeschiedenis." } }
                ]
            }
        ]
    },
    {
        year: "2de jaar",
        sections: [
            {
                name:"Doorstroom (ASO)",
                options: [
                    { name: "ECO keuze Duits extra", fees: { amount: 110, description: "Introductie tot grafisch ontwerp en tools." } },
                    { name: "ECO keuze wiskunde extra", fees: { amount: 85, description: "Cursus over de fundamenten" +
                                " van de chemie." } },
                    { name: "HW (humane wetenschappen)", fees: { amount: 85, description: "Cursus over de" +
                                " fundamenten van de chemie." } },
                    { name: "LAT keuze Duits extra", fees: { amount: 85, description: "Cursus over de fundamenten" +
                                " van de chemie." } },
                    { name: "LAT keuze wiskunde extra", fees: { amount: 85, description: "Cursus over de fundamenten" +
                                " van de chemie." } },
                    { name: "NW (natuurwetenschappen)", fees: { amount: 85, description: "Cursus over de fundamenten" +
                                " van de chemie." } },
                ],

                name:"dubbele finaliteit (TSO)",
                options:[
                    { name: "B&O (bedrijf en organisatie)", fees: { amount: 110, description: "Introductie tot grafisch ontwerp en tools." } },
                    { name: "ELME (elektromechanische technieken)", fees: { amount: 110, description: "Introductie tot grafisch ontwerp en tools." } },
                    { name: "M&W (maatschappij en welzijn)", fees: { amount: 110, description: "Introductie tot grafisch ontwerp en tools." } },
                    { name: "SPORT", fees: { amount: 110, description: "Introductie tot grafisch ontwerp en tools." } }, ,
                ]
            }
        ]
    },
    {
        year: "3de jaar",
        options: [
            { name: "BIOWE BIOTECHNOLOGISCHE WET", fees: { amount: 150, description: "Cursus programmeren en softwareontwikkeling." } },
            { name: "NAWE NATUURWETENSCHAPPEN", fees: { amount: 130, description: "Leer netwerken en" +
                        " computerbeveiliging." } },
            { name: "ECWE ECONOMISCHE WETENSCHAPPEN", fees: { amount: 130, description: "Leer netwerken en" +
                        " computerbeveiliging." } },
            { name: "GRLA GRIEKS - LATIJN", fees: { amount: 130, description: "Leer netwerken en" +
                        " computerbeveiliging." } },
            { name: "LA LATIJN ", fees: { amount: 130, description: "Leer netwerken en computerbeveiliging." } },
            { name: "HUWE HUMANE WETENSCHAPPEN", fees: { amount: 130, description: "Leer netwerken en" +
                        " computerbeveiliging." } },
            { name: "BEWE BEDRIJFSWETENSCHAPPEN", fees: { amount: 130, description: "Leer netwerken en" +
                        " computerbeveiliging." } },
            { name: "MAWE MAATSCHAPIJ & WELZIJNSWET", fees: { amount: 130, description: "Leer netwerken en" +
                        " computerbeveiliging." } },
            { name: "B&O - Bedrijf en organisatie", fees: { amount: 130, description: "Leer netwerken en" +
                        " computerbeveiliging." } },
            { name: "NAWE NATUURWETENSCHAPPEN", fees: { amount: 130, description: "Leer netwerken en computerbeveiliging." } }
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
        feesContainer.style.display = "block";
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
            <label for="first-name-${i}">Naaam:</label>
            <input type="text" id="first-name-${i}" class="child-first-name" required>

            <label for="last-name-${i}">Voornaam:</label>
            <input type="text" id="last-name-${i}" class="child-last-name" required>

            <label>Schooljaar:</label>
            <select id="child-year-${i}" class="child-year" required>
                <option value="" disabled selected>Selecteer een schooljaar</option>
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
        const feesContainer = childForm.querySelector(".fees-container");

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
