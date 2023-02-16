import Product from '../models/Product'

export const handleGetType= async(valueSearch) => {
    let data = {}
    try {
        const getData = await Product.find().or([{ brand: valueSearch }, { style: valueSearch }]).distinct('type')
        data = {
            errCode : 0,
            mess : 'kết nối thành công',
            data : getData
        }
    } catch (error) {
        data = {
            errCode : -1,
            mess : 'không thể kết nối đến db'
        }
    }

    return data
}

export const handleGetPrice= async(valueSearch) => {
    let data = {}
    try {
        const getMaxPrice = await Product.find().or([{ brand: valueSearch }, { style: valueSearch }]).sort([['price', 'desc']]).limit(1)
        const getMinPrice = await Product.find().or([{ brand: valueSearch }, { style: valueSearch }]).sort([['price', 'asc']]).limit(1)
        data = {
            errCode : 0,
            mess : 'kết nối thành công',
            data : {
                maxPrice : getMaxPrice[0].price,
                minPrice : getMinPrice[0].price
            }
        }
    } catch (error) {
        data = {
            errCode : -1,
            mess : 'không thể kết nối đến db'
        }
    }

    return data
}