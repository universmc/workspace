fetch('backend/json/style.json')
    .then(response => response.json())
    .then(data => {
        const dynamicContentDiv = document.getElementById('dynamicContent');
        
        data.sections.forEach(section => {
            const sectionElement = document.createElement('section');
            sectionElement.innerHTML = `
                <h3>${section.title}</h3>
                <p>${section.content}</p>
            `;
            dynamicContentDiv.appendChild(sectionElement);
        });
    })
    .catch(error => console.error('Error loading style.json:', error));
