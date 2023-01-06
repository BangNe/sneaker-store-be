import Product from '../models/Product'

function ProductController() {
    
    this.index = async (req,res) => {
        try {
            const data = await Product.find({})
            res.status(200).json({data : data})
        } catch (error) {
            console.log(error)
        }
    }

    //[GET] /api/products/search?q=&type=
    this.search = async (req,res) => {
        try {
            if(req.query.type === 'less') {
                const data = await Product.find({name : { $regex: req.query.q, $options: 'i' }}).limit(4)
                res.status(200).json({data : data})
            }
            const data = await Product.find({name : { $regex: req.query.q, $options: 'i' }})
            res.status(200).json({data : data})
        } catch (error) {
            console.log(error)
        }
    }
}

export default new ProductController
