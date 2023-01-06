import Season from '../models/Season'

function SeasonController() {

    // [GET] api/seasons
    this.index = async (req,res) => {
        try {
            const data = await Season.find({})
            res.status(200).json({data : data})
        } catch (error) {
            console.log(error)
        }
    }
}

export default new SeasonController
