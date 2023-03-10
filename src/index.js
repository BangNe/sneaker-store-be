import express from "express"
import * as dotenv from 'dotenv'

import route from './routes'
import db from './config/db'

dotenv.config()

db.connect()

const app = express()

// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(express.json())
app.use(express.urlencoded({extended: true}))

route(app)

const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log("Nodejs is running on the port: " + port)
})
