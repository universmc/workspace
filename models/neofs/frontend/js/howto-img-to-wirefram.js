// Fonction pour générer dynamiquement le contenu en fonction du JSON
function generateContentFromJSON(jsonData) {
    // Supposons que jsonData est l'objet JSON déjà analysé
    jsonData.sections.forEach(section => {
        // Créez une nouvelle section
        let newSection = document.createElement('section');
        newSection.classList.add(section.className);

        // Créez un titre pour la section
        let sectionTitle = document.createElement('h3');
        sectionTitle.textContent = section.title;
        newSection.appendChild(sectionTitle);

        // Créez les articles pour chaque élément dans la section
        section.items.forEach(item => {
            let article = document.createElement('article');
            article.innerHTML = `<span class="titreName">${item.titre}</span>`;
            // Ajoutez plus de contenu si nécessaire
            newSection.appendChild(article);
        });

        // Ajoutez la nouvelle section au main
        document.querySelector('main').appendChild(newSection);
    });
}

// Supposons que nous récupérons le JSON à partir d'une URL externe
fetch('backend/json/howto-proc-devOps.json')
    .then(response => response.json())
    .then(jsonData => {
        generateContentFromJSON(jsonData);
    })
    .catch(error => console.error('Erreur lors de la récupération du JSON:', error));
