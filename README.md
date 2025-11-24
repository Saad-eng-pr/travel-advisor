Trip Advisor – Application de recherche de lieux sur carte

Trip Advisor est une application web permettant de rechercher des restaurants, hôtels et attractions à proximité grâce à une carte interactive basée sur Google Maps. L’application récupère les lieux via une API externe et affiche, pour chacun, une carte détaillée avec ses principales informations.

🚀 Fonctionnalités

Carte interactive Google Maps

Recherche par catégorie : Restaurants, Hôtels, Attractions

Localisation de l’utilisateur

Affichage de lieux proches avec marqueurs personnalisés

Filtres par note (ex. 4 étoiles et plus)

Cartes d’informations détaillées pour chaque lieu

Interface moderne, responsive et intuitive

🛠️ Stack Technique

React

Google Maps JavaScript API

API externe (ex. RapidAPI)

React Router

Tailwind CSS

📦 Installation
1. Cloner le projet
git clone https://github.com/username/trip-advisor.git
cd trip-advisor

2. Installer les dépendances
npm install

3. Ajouter les clés API

Créer un fichier .env à la racine :

VITE_GOOGLE_MAPS_API_KEY=ta_clé_google_maps
VITE_PLACES_API_KEY=ta_clé_places_api

4. Lancer l’application
npm run dev


L'application sera accessible sur :

http://localhost:5173

📘 Objectif du projet

Le projet vise à offrir une expérience simple et fluide pour explorer son environnement, tout en intégrant une API cartographique et un service de données externes. Il met en pratique la manipulation de cartes, la géolocalisation, les appels API et la création d’interfaces utilisateurs modernes.
