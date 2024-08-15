// Chargement et conversion du contenu Markdown pour step2
fetch('tmp/steps/md/step2.md')
    .then(response => response.text())
    .then(markdown => {
        const htmlContent = marked(markdown);
        document.querySelector('.step2-content').innerHTML = htmlContent;
    })
    .catch(error => console.error('Erreur de chargement de step2.md:', error));
