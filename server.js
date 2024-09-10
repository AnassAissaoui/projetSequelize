//importation de l'application express depuis le fichier app
const app = require ('./app')

//définition du port sur lequel mon serveur va écouter, 3000 par défaut.
const PORT = process.env.PORT || 3000 //le env est lié au dotenv

//lancement du serveur pour qu'il écoute les requêtes dur le port spécifié.
app.listen(PORT, ()=> {
//affiche un message dans la console pour indiquer que le serveur fonctionne.
console.log(`le server tourne sur ${ PORT }`)
});