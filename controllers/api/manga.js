const Manga = require('../../models/manga');

module.exports = {
    createManga,
    getAllManga,
    search,
    removeManga
}

const API_URL = 'https://api.jikan.moe/v4/'

async function removeManga(req, res) {
    let goodbye = await Manga.findOneAndUpdate({users: req.user._id, mangaId: req.body.mangaId}, { $pull: {users: req.user._id} });
    await goodbye.save();
    res.json(goodbye);
}

async function search(req, res) {
    const anime = await fetch(`https://api.jikan.moe/v4/manga?q=${req.body.query}&order_by=title&sort=asc&limit=12`
    ).then(res => res.json());

    res.json(anime.data);
    
}

async function getAllManga(req, res) {
    const mangas = await Manga.find({users: req.user._id}, );
    console.log(mangas)
    res.json(mangas);
}

async function createManga(req, res) {
    const manga = await Manga.findOne({mangaId: req.body.mangaId})
    if (manga) {
        manga.users.push(req.user._id);
        await manga.save();
        console.log('MANGA ID: ', req.body.mangaId);
        console.log('ANIME ID: ', req.body.animeId);
        res.json(manga);
        console.log('MANGA ALREADY IN DATABASE ADDED DUPLICATE')
    } else {
        req.body.users = req.user._id;
        const newManga = new Manga(req.body);
        await newManga.save();
        console.log('NEW MANGA ID: ', req.body.mangaId);
        console.log('NEW ANIME ID: ', req.body.animeId);
        console.log('NEW MANGA ADDED', newManga);
        res.json(newManga);
    }
}
// async function createManga(req, res) {

//         req.body.users = req.user._id;
//         const newManga = new Manga(req.body);
//         await newManga.save();
//         console.log('NEW MANGA ID: ', req.body.mangaId);
//         console.log('NEW ANIME ID: ', req.body.animeId);
//         console.log('NEW MANGA ADDED', newManga);
//         res.json(newManga);
//     }



