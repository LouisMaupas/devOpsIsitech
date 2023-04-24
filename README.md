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
Versionning et travail collaboratif : Git / Github
Plateforme de CI/CD : Github actions
Hebergement : Vercel 
Messages de commits : [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

# Workflow git
- main : branche principal contient le code de production et n'est mis à jour 
- feat# / fix# : branche temporaire crée à partir de main, dédiée à la résolution d'un bug ou création d'une nouvelle feature. Elle est fusionné à main puis supprimée une fois le ticket clos.
- Utilisation de tag pour le versionning selon la norme Majeur.Mineur.Patch
- Messages de commits : [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

## Exemple d'ajout de la feature n°12
(1) Création d'un nouvelle branche nommée feat#12 à partir de main
(2) Developpement par le dev 1 
(3) commit 
(4) Demande de merge de feat#12 + tag
(5) Dev 2 approuve la demande
(6) Fusion des branches
(7) Tests, Build
(8) Déploiement