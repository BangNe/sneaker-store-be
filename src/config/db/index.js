import mongoose from 'mongoose'
mongoose.set('strictQuery', false)

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/ssneaker-store-dev')
        console.log('connect successfully!!!')
    } catch (error) {
        console.log('connect failure!!!')
        
    }
}

module.exports = {
    connect
}
