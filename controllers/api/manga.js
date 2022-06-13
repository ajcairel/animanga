const Manga = require('../../models/manga');
const fetch = require('node-fetch');
module.exports = {
    addManga,
    getAllManga,
    search,
    removeManga, 
    getTop,
    getDetails,
    getProfileManga,
    isAdded
}

const API_URL = 'https://api.jikan.moe/v4/'


async function getDetails(req,res) {
        try {
            const manga = await fetch(`https://api.jikan.moe/v4/manga/${req.body.params}`
            ).then(res => res.json());
            res.json(manga.data);
          } catch (err) {
            res.status(400).json(err);
          }
}


async function getTop(req, res) {
    const mangas = await fetch('https://api.jikan.moe/v4/top/manga?limit=24'
            ).then(res => res.json());
            res.json(mangas)

}

async function removeManga(req, res) {
    let goodbye = await Manga.findOneAndUpdate({users: req.user._id, mangaId: req.body.mangaId}, { $pull: {users: req.user._id} });
    await goodbye.save();
    res.json(goodbye);
}

async function search(req, res) {
    const manga = await fetch(`https://api.jikan.moe/v4/manga?q=${req.body.query}&order_by=ranking`
    ).then(res => res.json());
    res.json(manga.data);
}

async function isAdded(req, res) {
    const found = await Manga.findOne({users: req.user._id, mangaId: req.body.params});
    res.json(found);
}

async function getAllManga(req, res) {
    const mangas = await Manga.find({users: req.user._id}, );
    res.json(mangas);
}

async function getProfileManga(req, res) {
    const mangas = await Manga.find({users: req.body.params}, );
    res.json(mangas);
}

async function addManga(req, res) {
    const manga = await Manga.findOne({mangaId: req.body.mangaId})
    if (manga) {
        manga.users.push(req.user._id);
        await manga.save();
        res.json(manga);
    } else {
        req.body.users = req.user._id;
        const newManga = new Manga(req.body);
        await newManga.save();
        res.json(newManga);
    }
}



