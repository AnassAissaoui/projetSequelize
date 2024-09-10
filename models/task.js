const { DataTypes } = require ('sequelize');// Importation des types de données disponibles dans Sequelize.
const sequelize = require ('../config/config');// Importation de la configuration Sequelize (la connexion à la base de données).


// Définition du modèle 'Task' qui correspondra à une table 'Tasks' dans la base de données.
const Task = sequelize.define ('Task',{
    // La colonne 'title' sera une chaîne de caractères (STRING) et elle ne peut pas être null
    title : {
        type : DataTypes.STRING,
        allowNull : false // Le titre est obligatoire
    },
      // La colonne 'completed' sera un booléen (BOOLEAN) et aura la valeur par défaut 'false'
    completed : {
        type : DataTypes.BOOLEAN,
        defaultValue : false // Par défaut, la tâche n'est pas complétée
    }
}) ;

module.exports = Task;