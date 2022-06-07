const Anime = require('../../models/anime');

module.exports = {
    createAnime,
    getAllAnime,
    search
}

const API_URL = 'https://api.jikan.moe/v4/'

async function search(req, res) {
    const anime = await fetch(`https://api.jikan.moe/v4/anime?q=${req.body.query}&order_by=title&sort=asc&limit=12`
    ).then(res => res.json());

    res.json(anime.data);
    
}

async function getAllAnime(req, res) {
    const animes = await Anime.find({user: req.user._id}, );
    console.log(animes)
    res.json(animes);
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


