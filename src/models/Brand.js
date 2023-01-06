import mongoose from "mongoose"

const Schema = mongoose.Schema

const Brand = new Schema({
    img : {type: String},
    name : {type: String, require},
    style : {type: Array}
},{
    timestamps: true
})

module.exports = mongoose.model('Brand',Brand)
