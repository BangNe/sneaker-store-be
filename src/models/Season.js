import mongoose from "mongoose"

const Schema = mongoose.Schema

const Season = new Schema({
    img : {type: String},
    name : {type: String, require},
    content : {type: String, require}
},{
    timestamps: true
})

module.exports = mongoose.model('Season',Season)
