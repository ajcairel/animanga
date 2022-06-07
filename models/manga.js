const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mangaSchema = new Schema({
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }],
    title: { type: String },
    mangaId: { type: Number },
    image:  {type: String },
    malURL: {type: String }
});

// const mangaListSchema = new Schema({
//     user: {
//         type: Schema.Types.ObjectId,
//         ref: 'User',
//         required: true
//     },
//     topAnime: [mangaSchema]
// })



module.exports = mongoose.model('Manga', mangaSchema);