// Importation de Sequelize, un ORM qui permet de communiquer avec la base de données.
const { Sequelize } = require ('sequelize');

// Création d'une instance de Sequelize en fournissant les détails de la base de données MySQL donc le nom de la database,mon nom et le mot de passe.
const sequelize = new Sequelize ('todolist','anass','Mysql2004#',{
    host: 'localhost',  // L'adresse du serveur MySQL (ici, c'est en local) mais je peux le faire avec n'importe quoi.
    dialect: 'mysql'   // Spécifie que nous utilisons MySQL comme source.
});

// Exportation de sequelize pour l' utilisée ailleurs dans d'autre feuille.
module.exports = sequelize;