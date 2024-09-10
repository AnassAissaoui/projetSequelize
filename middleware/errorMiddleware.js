// Middleware pour la gestion des erreurs globales dans l'application.
module.exports =(err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Ya un truc de cassé !');
}