const express = require ('express')
const app = express ();// Créer une nouvelle application Express
app.use (express.json());// Middleware pour analyser les données JSON dans les requêtes et pour parser les requêtes au format JSON.

const taskRoute = require ('./routes/taskRoute')// Importation des routes pour les tâches.
app.use('/api', taskRoute);// Utilisation des routes définies dans 'taskRoutes' pour les tâches, toutes les routes commencent par '/api'.

const sequelize = require ('./config/config');// Importation de la configuration Sequelize pour synchroniser la base de données.

//synchronisation de la bdd
sequelize.sync()
.then(()=> console.log ('database synchronized !'))
.catch(err => console.error('petit soucis',err) )

module.exports = app