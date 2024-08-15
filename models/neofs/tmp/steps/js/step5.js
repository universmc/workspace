fetch('step5.md')
  .then(response => response.text())
  .then(markdown => {
    const htmlContent = marked(markdown);
    document.getElementById('markdown-container').innerHTML = htmlContent;
  })
  .catch(error => console.error('Erreur lors du chargement de step5.md:', error));
