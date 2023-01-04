import Banner from '../models/Banner'

function productController() {
    this.index = (req,res) => {
        Banner.find({},function(err,doc) {
            if(!err) {
                console.log('aa')
                res.json(doc)
            }
        })
    }

    this.test = (req,res) => {
        res.json({data : 'test'})
    }
}

export default new productController
