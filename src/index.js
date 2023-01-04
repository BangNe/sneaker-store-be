import express from "express"
import * as dotenv from 'dotenv'

import route from './routes'
import db from './config/db'

dotenv.config()

db.connect()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

route(app)

const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log("Nodejs is running on the port: " + port)
})
