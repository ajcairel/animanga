const Schema = require('mongoose').Schema;

const mangaSchema = new Schema({
    title: { type: String, required: true},
    animeId: { type: Number },
    image:  {type: String },
});

const mangaListSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    topAnime: [mangaSchema]
})



module.exports = mongoose.model('MangaList', mangaListSchema);