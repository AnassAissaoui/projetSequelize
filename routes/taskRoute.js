const express = require ('express')// Importation du module Express pour créer des routes.
const {getTasks,createTasks,updateTasks,deleteTasks} = require ('../controllers/taskControllers');// Importation des méthodes du contrôleur pour gérer les tâches.

const router = express.Router();// Création d'un routeur Express pour définir les routes.

router.get ('/tasks',getTasks);// Définition d'une route pour obtenir toutes les tâches (GET /api/tasks).
router.post ('/tasks',createTasks);// Définition d'une route pour créer une nouvelle tâche (POST /api/tasks).
router.put('/tasks/:id',updateTasks);// Définition d'une route pour mettre à jour une tâche existante (PUT /api/tasks/:id).
router.delete('/tasks/:id',deleteTasks);// Définition d'une route pour supprimer une tâche (DELETE /api/tasks/:id).

module.exports = router;