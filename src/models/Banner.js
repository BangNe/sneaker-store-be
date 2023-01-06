import mongoose from "mongoose"

const Schema = mongoose.Schema

const Banner = new Schema({
    img : {type: String},
    brand : {type: String},
    season: {type: String}
})

module.exports = mongoose.model('banners',Banner)
