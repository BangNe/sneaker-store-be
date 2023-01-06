import productRoute from './product'
import brandRoute from './brand'
import bannerRoute  from './banner'
import seasonRoute  from './season'

function route(app) {
    app.use('/api/products',productRoute)
    app.use('/api/brands',brandRoute)
    app.use('/api/banners',bannerRoute)
    app.use('/api/seasons',seasonRoute)
}

export default route
