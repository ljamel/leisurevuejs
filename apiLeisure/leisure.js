const mongoose = require('mongoose');

const schema  = mongoose.Schema({
    titre : String,
    auteur : String,
    genre : String
})

module.exports = mongoose.model('livre', schema);

app.post('/', async (req, res) => {
    const titre = req.body.titre; // récupération des variables du body
    const auteur = req.body.auteur
    const genre = req.body.genre

    if (!genre || !auteur  || !titre) { // on vérifie que les trois variables sont présentes
        res.send('Il manque un argument')
        return
    }

    const nouveau_livre = new Livres({ // création d'un objet représentant notre nouveau livre
        titre : titre,
        auteur : auteur,
        genre : genre
    })

    await nouveau_livre.save() // sauvegarde asynchrone du nouveau livre
    res.json(nouveau_livre)
    return

})