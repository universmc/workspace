document.addEventListener('DOMContentLoaded', function() {
    fetch('src/inc/stepId/step8.md')
        .then(response => response.text())
        .then(markdown => {
            let contenu = document.createElement('div');
            contenu.className = 'markdown-contenu';
            contenu.innerHTML = marked.parse(markdown);
            document.querySelector('.devops-item').appendChild(contenu);
        })
        .catch(error => console.error('Erreur de chargement du fichier Markdown:', error));
  });
  