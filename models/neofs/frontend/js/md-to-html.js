// Importez la bibliothèque marked
import marked from 'marked';

// Sélectionnez l'élément où vous souhaitez afficher le contenu Markdown converti en HTML
const markdownContainer = document.querySelector('#mdContentn');

// URL du fichier readme.md
const readmeUrl = 'docs/md/readme.md';

// Chargez le contenu du fichier readme.md
fetch(readmeUrl)
  .then(response => response.text())
  .then(markdownContent => {
    // Convertissez le contenu Markdown en HTML
    const htmlContent = marked(markdownContent);

    // Affichez le contenu HTML dans l'élément cible
    markdownContainer.innerHTML = htmlContent;
  })
  .catch(error => {
    console.error('Une erreur s\'est produite lors du chargement du fichier Markdown :', error);
  });
