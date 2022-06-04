const Schema = require('mongoose').Schema;

const animeSchema = new Schema({
    title: { type: String, required: true},
    animeId: { type: Number },
    image:  {type: String },
});

const animeListSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    topAnime: [animeSchema]
})



module.exports = mongoose.model('AnimeList', animeListSchema);

