function showStep(step) {
    // Logique pour afficher l'étape spécifiée
    // Par exemple, en modifiant le contenu de 'devPlanContent'
}

document.getElementById('prevStep').addEventListener('click', () => {
    if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
    }
});

document.getElementById('nextStep').addEventListener('click', () => {
    // Assurez-vous de ne pas dépasser le nombre d'étapes disponibles
    currentStep++;
    showStep(currentStep);
});

function loadJsonData(url, elementId) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const contentDiv = document.getElementById(elementId);
            // Vous pouvez traiter et afficher les données JSON ici
            contentDiv.innerHTML = JSON.stringify(data, null, 2);
        })
        .catch(error => console.error('Error loading JSON data:', error));
}
let currentStep = 0;

function loadMainContent() {
    fetch('http://localhost:3000/json/main.json')
        .then(response => response.json())
        .then(data => {
            showStep(currentStep, data);
        })
        .catch(error => console.error('Error loading main.json:', error));
}

function showStep(step, data) {
    if (data.dynamicContent[step] && data.styleContent[step]) {
        document.getElementById('dynamicContent').innerHTML = `
            <h2>${data.dynamicContent[step].title}</h2>
            <p>${data.dynamicContent[step].content}</p>
        `;
        document.getElementById('styleContent').innerHTML = `
            <h2>${data.styleContent[step].title}</h2>
            <p>${data.styleContent[step].content}</p>
        `;
    }
}

document.getElementById('prevStep').addEventListener('click', () => {
    if (currentStep > 0) {
        currentStep--;
        loadMainContent();
    }
});

document.getElementById('nextStep').addEventListener('click', () => {
    currentStep++;
    loadMainContent();
});

loadMainContent();

loadJsonData('http://localhost:3000/json/dev-plan', 'devPlanContent');
loadJsonData('http://localhost:3000/json/style', 'styleContent');
