const express = require('express');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();

// Configuration de Swagger
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'univers-mc.cloud API',
            version: '1.0.0',
            description: 'The API for univers-mc.cloud',
        },
        servers: [
            {
                url: 'http://localhost:3001',
                description: 'Local server',
            },
            // Ajoutez d'autres serveurs ici si nécessaire
        ],
    },
    apis: ['./routes/*.js'], // Emplacement des fichiers contenant les commentaires de documentation
};

const swaggerSpec = swaggerJsdoc(options);

// Middleware pour servir Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routage des fichiers JSON
app.get('/json/:filename', (req, res) => {
    const filename = req.params.filename;
    res.sendFile(path.join(__dirname, 'json', `${filename}.json`));
});

// Servir les fichiers statiques de React
app.use(express.static(path.join(__dirname, '../frontend/swagger-app/build')));

// Autres routes et configurations...

const PORT = 3010;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
