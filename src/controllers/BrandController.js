import Brand from '../models/Brand'

function BrandController() {

    // [GET] api/brands
    this.index = async (req,res) => {
        try {
            const data = await Brand.find({})
            res.status(200).json({data : data})
        } catch (error) {
            console.log(error)
        }
    }
}

export default new BrandController
