import productRoute from './product'
import brandRoute from './brand'
import bannerRoute  from './banner'
import seasonRoute  from './season'
import userRoute from './user'

function route(app) {
    app.use('/api/products',productRoute)
    app.use('/api/brands',brandRoute)
    app.use('/api/banners',bannerRoute)
    app.use('/api/seasons',seasonRoute)
    app.use('/api/users',userRoute)
}

export default route
