import mongoose from "mongoose"

const Schema = mongoose.Schema

const User = new Schema({
    account : {type: String,require},
    email : {type: String,require},
    password : {type: String,require},
    role : {type: Number,require},
},{
    timestamps: true
}
)

module.exports = mongoose.model('User',User)
