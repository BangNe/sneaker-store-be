import productRoute from "./products"

function route(app) {
    app.use('/',productRoute)
}

export default route
