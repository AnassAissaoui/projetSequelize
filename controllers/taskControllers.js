const Task = require('../models/task');// Importation du modèle Task pour interagir avec la table 'Tasks' dans la base de données.

// Méthode pour récupérer toutes les tâches depuis la base de données.
exports.getTasks = async (req,res) => {
    try{
         // Utilise Sequelize pour obtenir toutes les tâches dans la table 'Tasks'
        const tasks = await Task.findAll(); // Récupère toutes les lignes de la table
        // Retourne la liste des tâches en réponse à la requête
        res.json (tasks); // Renvoie la liste des tâches au format JSON
    } catch (error){
        res.status(500).json({error: error.message});// En cas d'erreur, renvoie une réponse d'erreur avec le statut 500
    }
};


// Méthode pour créer une nouvelle tâche dans la base de données.
exports.createTasks = async (req,res) => {
    try{
         // Utilise Sequelize pour créer une nouvelle tâche avec les données reçues dans le corps de la requête (req.body)
        const task = await Task.create(req.body); // Insère une nouvelle ligne dans la table 'Tasks'
        res.status(201).json(task);// Renvoie la tâche créée avec le statut 201 (créée avec succès)
    } catch (error){
        res.status(500).json({error: error.message});// En cas d'erreur, renvoie une réponse d'erreur avec le statut 500
    }
};


// Méthode pour mettre à jour une tâche existante.
exports.updateTasks = async (req,res) => {
    try{
        const { id } = req.params; // Extraction de l'ID de la tâche à partir des paramètres d'URL
        const [updated] = await Task.update (req.body, {where: {id} });// Utilise Sequelize pour mettre à jour la tâche avec les nouvelles données fournies dans req.body
        // Si la tâche a été mise à jour (updated renvoie 1), on renvoie la tâche mise à jour
        if (updated){
            const updatedTasks = await Task.findOne( {where: {id} });  // Récupère la tâche mise à jour pour la renvoyer dans la réponse
            res.status(200).json(updatedTtask);// Renvoie la tâche mise à jour
        }else{
            res.status(404).json({error: 'Task not found'});// Si la tâche avec l'ID donné n'a pas été trouvée, renvoie une erreur 404
        }
    }catch (error){
        res.status(500).json({error: error.message});// En cas d'erreur, renvoie une réponse d'erreur avec le statut 500
    }
};

// Méthode pour supprimer une tâche existante.
exports.deleteTasks = async (req,res) => {
    try{
        const { id } = req.params;// Extraction de l'ID de la tâche à partir des paramètres d'URL
        const deleted = await Task.destroy ( {where: {id} });// Utilise Sequelize pour supprimer la tâche correspondant à l'ID
         // Si la tâche a été supprimée avec succès (deleted renvoie 1), renvoie une réponse avec statut 204 (pas de contenu)
        if (deleted){
            res.status(204).json();
        }else{
            res.status(404).json({error: 'Task not found'});// Si la tâche avec l'ID donné n'a pas été trouvée, renvoie une erreur 404
        }
    }catch (error){
        res.status(500).json({error: error.message});// En cas d'erreur, renvoie une réponse d'erreur avec le statut 500
    }
};
