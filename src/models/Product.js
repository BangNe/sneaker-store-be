import mongoose from "mongoose"

const Schema = mongoose.Schema

const Product = new Schema({
    img : {type: Array, require},
    name : {type: String, require},
    price : {type: Number, require},
    info : {type: Object},
    brand : {type: String, require},
    style : {type: String, require},
    type : {type: String , require},
    season : {type: String},
    size: {type: Array , require}
},{
    timestamps: true
})

module.exports = mongoose.model('Product',Product)
