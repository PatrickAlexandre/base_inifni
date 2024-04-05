# Welcome to Your New Template Experience!
## 🎨 Where to find everything?

- **Dossiers Principaux et Fichiers :** Découvrez comment le projet est structuré et où sont situés les composants essentiels.
  - `public/css/` : Contient les fichiers de style. C'est ici que vous personnalisez l'apparence de votre projet.
  - `public/js/` : Regroupe la logique frontend. Modifiez ces fichiers pour changer le comportement interactif de vos pages.
  - `database/sqlite.js` : Toute la logique liée à la base de données SQLite est ici, y compris la création de la base de données et les requêtes.
  - `routes/` : Contient les routes API, qui sont liées aux contrôleurs situés dans `controllers/`. C'est le cœur de la logique de navigation de votre application.
  - `util/` : Ici, vous trouverez des fonctions utilitaires pouvant être réutilisées à travers différentes parties de votre application.

## Approfondissez avec les composants et les technologies

- **Composants Réutilisables :**
  - Le dossier `views/includes/` est spécialement conçu pour les petits composants réutilisables, comme l'en-tête de page. Utilisez-le pour uniformiser les éléments qui apparaissent sur plusieurs pages.
  - `views/includes/head.ejs` : Placez ici les métadonnées nécessaires sur chaque page pour assurer une cohérence à travers le projet.

- **Structure des Pages :**
  - Les fichiers spécifiques à chaque page sont organisés dans des dossiers sous `/views`. Cette structure aide à maintenir le projet ordonné et facilite la localisation des fichiers.

## Connaissances Techniques Requises

Pour tirer le meilleur parti de ce modèle, vous devriez avoir une compréhension solide des technologies suivantes :
- [Node.js](https://www.w3schools.com/nodejs/default.asp) : Une plateforme de développement JavaScript côté serveur.
- [Express.js](https://expressjs.com/) : Un framework pour créer des applications web avec Node.js.
- [SQLite](https://www.sqlite.org/docs.html) : Un système de gestion de base de données relationnelle léger.

## Prochaines Étapes

1. **Familiarisez-vous avec la structure du projet** en explorant chaque dossier et fichier mentionné ci-dessus.
2. **Consultez la documentation** des technologies utilisées (Node.js, Express.js, SQLite) pour mieux comprendre comment elles interagissent au sein de votre projet.
3. **Commencez par des modifications simples**, comme ajuster le style dans `public/css/`, pour vous habituer au workflow de développement.
4. **Évoluez vers des tâches plus complexes**, comme la modification de la logique de base de données ou l'ajout de nouvelles routes API, une fois que vous êtes à l'aise avec les bases.

En suivant cette approche organisée, vous serez en mesure de modifier efficacement le modèle et de l'adapter à vos besoins spécifiques.
Ce guide vous aidera à naviguer dans la structure du projet et à comprendre où trouver les éléments clés nécessaires pour le personnaliser selon vos besoins.
