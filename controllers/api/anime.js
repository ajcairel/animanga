const Anime = require('../../models/anime');

module.exports = {
    createAnime
}


async function createAnime(req, res) {
    const anime = await Anime.findOne({animeId: req.body.animeId})
    if (anime) {
        anime.user.push(req.user._id);
        anime.save();
        console.log('ADDED DUPLICATE')
    } else {
        req.body.user = req.user._id;
        const newAnime = new Anime(req.body);
        newAnime.save();
        console.log('ANIME CONTROLLER', newAnime);
        res.json(newAnime);
    }
   
}


