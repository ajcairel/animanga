const Anime = require('../../models/anime');
const fetch = require('node-fetch');

module.exports = {
    createAnime,
    getAllAnime,
    search,
    removeAnime,
    getTop,
    getDetails
}

const API_URL = 'https://api.jikan.moe/v4/'

async function getDetails(req,res) {
    const anime = await fetch(`https://api.jikan.moe/v4/anime/${req.body.params}`
    ).then(res => res.json());
        console.log(anime);
        res.json(anime);
}

async function getTop(req, res) {
    const animes = await fetch('https://api.jikan.moe/v4/top/anime?limit=10'
            ).then(res => res.json());
            res.json(animes)

}

async function removeAnime(req, res) {
    let goodbye = await Anime.findOneAndUpdate({users: req.user._id, animeId: req.body.animeId}, { $pull: {users: req.user._id} });
    await goodbye.save();
    res.json(goodbye);
}

async function search(req, res) {
    const anime = await fetch(`https://api.jikan.moe/v4/anime?q=${req.body.query}&order_by=title&sort=asc&limit=12`
    ).then(res => res.json());

    res.json(anime.data);
    
}

async function getAllAnime(req, res) {
    const animes = await Anime.find({users: req.user._id}, );
    console.log(animes)
    res.json(animes);
}

async function createAnime(req, res) {
    // changed from const
    let anime = await Anime.findOne({animeId: req.body.animeId})
    if (anime) {
        anime.users.push(req.user._id);
        await anime.save();
        console.log('MANGA ID: ', req.body.mangaId);
        console.log('ANIME ID: ', req.body.animeId);
        res.json(anime);
        console.log('ANIME ALREADY IN DATABASE, ADDED USER');
    } else {
        req.body.users = req.user._id;
        const newAnime = new Anime(req.body);
        await newAnime.save();
        console.log('NEW MANGA ID: ', req.body.mangaId);
        console.log('NEW ANIME ID: ', req.body.animeId);
        console.log('ANIME CONTROLLER', newAnime);
        res.json(newAnime);
    }
}


