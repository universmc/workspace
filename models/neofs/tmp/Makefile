# Chemins de dossiers
CLIENT_DIR := client
SERVER_DIR := server

# Commandes de démarrage
start-nodejs:
	@echo "Démarrage du serveur Node.js..."
	@cd $(SERVER_DIR) && npm start

start-php:
	@echo "Démarrage du serveur PHP..."
	@php -S localhost:$(PORT_PHP)

# Commandes pour les services et outils
start-mysql:
	@echo "Démarrage du service MySQL..."
	# Commande pour démarrer MySQL

start-ftp:
	@echo "Démarrage du service FTP..."
	# Commande pour démarrer le service FTP

# Test des intégrations API
test-apis:
	@echo "Test des intégrations avec GitHub, Notion, HuggingFace, etc..."
	# Commandes pour tester les intégrations API

# Autres commandes utiles
.PHONY: start-nodejs start-php start-mysql start-ftp test-apis

