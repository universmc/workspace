# Chemins de dossiers
CLIENT_DIR := frontend/swagger-app/src
SERVER_DIR := backend/

# Ports des services
PORT_PHP := 5001
PORT_NODEJS := 3001
PORT_MYSQL := 8080
PORT_REACT := 3100
PORT_FTP := 21

# Commandes pour les services et outils
start-backend:
	@echo "Démarrage du serveur Node.js..."
	@cd $(SERVER_DIR) & 
	@npm start-nodejs

start-frontend:
	@echo "Démarrage de l'application React..."
	@cd $(CLIENT_DIR) &
	@npm start-react

start-srv:
	@echo "Démarrage du backend et du frontend..."
	@make start-backend &
	@make start-frontend &
	@npm run style

# Autres commandes utiles
.PHONY: start-backend start-frontend start-srv
