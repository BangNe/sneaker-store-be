import Banner from '../models/Banner'

function BannerController() {

    // [GET] api/banners
    this.index = async (req,res) => {
        try {
            const data = await Banner.find({})
            res.status(200).json({
                data : data,
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export default new BannerController
