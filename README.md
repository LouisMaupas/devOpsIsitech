# devOpsIsitech

# Project
Un terminal qui parle de CI/CD

## Comment l'installer


## Comment l'utiliser
Tapez /help pour avoir la liste des commandes


# Technos et convetions
Gestionnaire de paquets : pnpm
Front : React
Frontend dev env / builder : Vite
Test : Jest
Linter : EsLint
Versionning et travail collaboratif : Git / Github
Plateforme de CI/CD : Github actions
Hebergement : Vercel 
Messages de commits : [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

# Workflow git
- main : branche principal contient le code de production et n'est mis à jour 
- Dev : branche tampon entre main et les branches des feat/fix
- feat# / fix# : branche temporaire crée à partir de main, dédiée à la résolution d'un bug ou création d'une nouvelle feature. Elle est fusionné à main puis supprimée une fois le ticket clos.
- Utilisation de tag pour le versionning selon le standard de Gestion sémantique de version 2.0.0
- Messages de commits : [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

## Exemple d'ajout de la feature n°12
(1) Création d'un nouvelle branche nommée feat#12 à partir de dev
(2) Developpement par le dev 1 en local
(3) commit + push sur dev
    (3.1) script esLint
    (3.2) tests unitaires
    (3.3) tests fonctionnels 
    (3.4) tests E2E
(4) Demande de merge de dev vers main + tag
(5) Dev 2 approuve la demande
    (5.1) script esLint
    (5.2) tests unitaires
    (5.3) tests fonctionnels 
    (5.4) tests E2E
(6) Fusion des branches
(7) Build
(8) Déploiement
Voir CD.png

