#Elitebotsprevnames
Elitebotsprevnames est une bibliothèque Node.js conçue pour faciliter l'interaction avec l'API prevnames d'elitebots.

Installation
Pour intégrer la bibliothèque Elitebotsprevnames à votre projet, commencez par l'installer via npm. Utilisez la commande suivante :

```js
npm install elitebots-prevnames
```
# Utilisation
Voici un exemple de code illustrant comment utiliser la bibliothèque Elitebotsprevnames dans votre application :

```js
const EliteBots = require('elitebots-prevnames');

// Définir l'identifiant de l'utilisateur
let userId = '1234';

// Récupérer la latence de l'API
EliteBots.ping()
  .then(latency => {
    console.log('Latence de l\'API :', latency);
  })
  .catch(error => {
    console.error('Erreur lors de la récupération de la latence de l\'API :', error);
  });

// Faire une requête à l'API pour obtenir les prevnames
EliteBots.getPrevNames(userId)
  .then(prevnames => {
    // Vérifier si prevnames n'est pas undefined avant d'appeler map
    if (prevnames) {
      // Afficher les prevnames de l'utilisateur avec le timestamp de changement de pseudo
      const prevnamesWithTimestamp = prevnames.map(entry => ({ name: entry.name, date: entry.date }));
      console.log('Noms précédents avec timestamp :', prevnamesWithTimestamp);

      // Afficher les prevnames de l'utilisateur sans le timestamp de changement de pseudo
      const prevnamesWithoutTimestamp = prevnames.map(entry => ({ name: entry.name }));
      console.log('Noms précédents sans timestamp :', prevnamesWithoutTimestamp);
    } else {
      console.error('Aucun nom précédent récupéré');
    }
  })
  .catch(error => {
    console.error('Erreur lors de la récupération des noms précédents :', error);
  });

  ```
# Auteur
Elitebotsprevnames a été développé et est maintenu par [Ash](https://discord.com/users/904499313961492530).

# Licence
Cette bibliothèque est distribuée sous licence MIT. Consultez le fichier LICENSE pour plus de détails sur les conditions d'utilisation.