const Anime = require('../../models/anime');
const fetch = require('node-fetch');

module.exports = {
    addAnime,
    getAllAnime,
    search,
    removeAnime,
    getTop,
    getDetails,
    getProfileAnime,
    isAdded,
    getQuote
}

const API_URL = 'https://api.jikan.moe/v4/'

async function getDetails(req,res) {
    const anime = await fetch(`https://api.jikan.moe/v4/anime/${req.body.params}`
    ).then(res => res.json());
        res.json(anime.data);
}

async function getTop(req, res) {
    const animes = await fetch('https://api.jikan.moe/v4/top/anime?limit=24'
            ).then(res => res.json());
            res.json(animes)

}

async function removeAnime(req, res) {
    let goodbye = await Anime.findOneAndUpdate({users: req.user._id, animeId: req.body.animeId}, { $pull: {users: req.user._id} });
    await goodbye.save();
    res.json(goodbye);
}

async function search(req, res) {
    // const anime = await fetch(`https://api.jikan.moe/v4/anime?q=${req.body.query}&order_by=ranking`
    const anime = await fetch(`https://api.jikan.moe/v4/anime?q=${req.body.query}`
    ).then(res => res.json());
    res.json(anime.data);  
}

async function isAdded(req, res) {
    const found = await Anime.findOne({users: req.user._id, animeId: req.body.params});
    res.json(found);
}

async function getAllAnime(req, res) {
    const animes = await Anime.find({users: req.user._id}, );
    res.json(animes);
}

async function getProfileAnime(req, res) {
    const animes = await Anime.find({users: req.body.params}, );
    res.json(animes);
}

async function addAnime(req, res) {
    let anime = await Anime.findOne({animeId: req.body.animeId})
    if (anime) {
        anime.users.push(req.user._id);
        await anime.save();
        res.json(anime);
    } else {
        req.body.users = req.user._id;
        const newAnime = new Anime(req.body);
        await newAnime.save();
        res.json(newAnime);
    }
}

async function getQuote(req, res) {
    const quote = await fetch('https://animechan.vercel.app/api/random'
    ).then(res => res.json());
    res.json(quote);
    
}


