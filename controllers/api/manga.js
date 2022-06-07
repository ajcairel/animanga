const Manga = require('../../models/anime');

module.exports = {
    createManga,
    getAllManga,
    search
}

const API_URL = 'https://api.jikan.moe/v4/'

async function search(req, res) {
    const anime = await fetch(`https://api.jikan.moe/v4/anime?q=${req.body.query}&order_by=title&sort=asc&limit=12`
    ).then(res => res.json());

    res.json(anime.data);
    
}

async function getAllManga(req, res) {
    const mangas = await Manga.find({user: req.user._id}, );
    console.log(mangas)
    res.json(mangas);
}

async function createManga(req, res) {
    const manga = await Manga.findOne({mangaId: req.body.mangaId})
    if (manga) {
        manga.user.push(req.user._id);
        manga.save();
        console.log('ADDED DUPLICATE')
    } else {
        req.body.user = req.user._id;
        const newManga = new Manga(req.body);
        newManga.save();
        console.log('MANGA CONTROLLER', newManga);
        res.json(newManga);
    }
}


