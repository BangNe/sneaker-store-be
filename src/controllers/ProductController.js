import Product from '../models/Product'
import { handleGetType,handleGetPrice, handleGetSize, handleGetMenuProduct, handleGetProductDetails } from '../sevices/productSevices'

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
                const data = await Product.find({name : { $regex: `${req.query.q}`, $options: 'i' }}).limit(4)
                res.status(200).json({data})
                return
            }
            const data = await Product.find({name : { $regex: `${req.query.q}`, $options: 'i' }})
            res.status(200).json({data})
        } catch (error) {
            console.log(error)
        }
    }

    //[GET] /api/products/menu-product
    this.getMenuProduct = async (req,res) => {
        try {
            const data = await handleGetMenuProduct(req.query.data)
            res.status(200).json({data})
        } catch (error) {
            res.status(500).json({data: {
                errCode : -1,
                mess : 'kết nối thật bại!!! vui lòng thử lại sau'
            }})
    }
    }

    //[GET] /api/products/get-product-details
    this.getProductDetails = async (req,res) => {
        try {
            const data = await handleGetProductDetails(req.query.data)
            res.status(200).json({data})
        } catch (error) {
            res.status(500).json({data: {
                errCode : -1,
                mess : 'kết nối thật bại!!! vui lòng thử lại sau'
            }})
        }
    }

    //[GET] /api/products/get-type
    this.getType = async (req,res) => {
        try {
            const data = await handleGetType(req.query.data)
            res.status(200).json({data})
        } catch (error) {
            res.status(500).json({data: {
                errCode : -1,
                mess : 'kết nối thật bại!!! vui lòng thử lại sau'
            }})
        }
    }

    //[GET] /api/products/get-price
    this.getPrice = async (req,res) => {
        try {
            const data = await handleGetPrice(req.query.data)
            res.status(200).json({data})
        } catch (error) {
            res.status(500).json({data: {
                errCode : -1,
                mess : 'kết nối thật bại!!! vui lòng thử lại sau'
            }})
        }
    }

    //[GET] /api/products/get-size
    this.getSize = async (req,res) => {
        try {
            const data = await handleGetSize(req.query.data)
            res.status(200).json({data})
        } catch (error) {
            res.status(500).json({data: {
                errCode : -1,
                mess : 'kết nối thật bại!!! vui lòng thử lại sau'
            }})
        }
    }
    
}

export default new ProductController
