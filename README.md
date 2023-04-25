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
(1) Création d'un nouvelle branche local nommée feat#12 à partir de dev
```
git switch feat#12
```
(2) Developpement par le dev 1 en local
(2.1) commit (+ squash si nécessaire)
(3) Si besoin de tester : création d'une branche temporaire distante + push
```
git push origin -u feat#12
```
(3') sinon on push directement sur dev avec squash des commits
(4) Demande de merge (pour conserver l'historique) de dev vers main + tag
github : compare & pull request
    (4.1) dev.yaml
(5) Dev 2 approuve la demande
    (5.1) suppression de la branche feat#12
(6) Si c'est stable demande de merge de dev vers main
(7) Dev 2 accepte
    prod.yaml
    (7.1) script esLint
    (7.2) tests unitaires
    (7.3) build
    (7.4) Déploiement Vercel
