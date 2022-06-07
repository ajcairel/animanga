const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const animeSchema = new Schema({
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }],
    title: { type: String },
    animeId: { type: Number },
    image:  {type: String },
    malURL: {type: String }
});

// const animeListSchema = new Schema({
//     user: {
//         type: Schema.Types.ObjectId,
//         ref: 'User',
//         required: true
//     },
//     topAnime: [animeSchema]
// })
 


module.exports = mongoose.model('Anime', animeSchema);

