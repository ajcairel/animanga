const Schema = require('mongoose').Schema;

const animeListSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: { type: String, required: true},
    animeId: { type: Number },
    image:  {type: String },
})