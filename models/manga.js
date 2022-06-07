const Schema = require('mongoose').Schema;

const mangaSchema = new Schema({
    user: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }],
    title: { type: String, required: true},
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