#!/bin/bash
# Nom du dépôt
repo="NomDuRepo"
# Créer un nouveau répertoire pour le projet et y naviguer
mkdir -p "$repo"
cd "$repo"
# Initialiser un dépôt git vide
git init

# Mettre en place l'origine distante du dépôt GitHub
git remote add origin https://github.com/$USERNAME/$repo.git

# Mettre en place le fichier README.md
echo "# $repo" >> README.md
git add README.md

# Créer un premier commit
git commit -m "Initial commit"
# Pousser le commit vers le dépôt GitHub distant
git push -u origin master

# Installer les dépendances du projet si nécessaire
# Par exemple, pour un projet JavaScript:
# npm install --save three
# Ajouter les fichiers modifiés au commit
git add .

# Commiter les modifications
git commit -m "Mise à jour du code"
# Pousser les modifications vers le dépôt GitHub distant
git push

# Annoncer la fin de la mise à jour
echo "✨ Mise à jour du dossier sur GitHub terminée✨"
