fetch('backend/json/layout.json')
  .then(response => response.json())
  .then(data => {
    data.sections.forEach(section => {
      createSection(section);
    });
  });

function createSection(section) {
  let sectionElement;

  if (section.type === 'article') {
    sectionElement = document.createElement('article');
  } else if (section.type === 'div') {
    sectionElement = document.createElement('div');
  } else {
    // Gérer d'autres types si nécessaire
  }

  const titleElement = document.createElement('h2');
  titleElement.textContent = section.title;

  const contentElement = document.createElement('p');
  contentElement.textContent = section.content;

  sectionElement.appendChild(titleElement);
  sectionElement.appendChild(contentElement);

  if (section.imageUrl) {
    const imageElement = document.createElement('img');
    imageElement.src = section.imageUrl;
    sectionElement.appendChild(imageElement);
  }

  document.body.appendChild(sectionElement); // ou ajoutez-le à un autre élément spécifique
}
