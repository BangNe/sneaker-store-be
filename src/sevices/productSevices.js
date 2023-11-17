import Product from '../models/Product'

export const handleGetMenuProduct= async(valueSearch) => {
    let data = {}
    const queryConditions = {}

    if (valueSearch.brand) {
        queryConditions.brand = valueSearch.brand
    }

    if (valueSearch.style) {
        queryConditions.style = valueSearch.style
    }

    if (valueSearch.type) {
        queryConditions.type = valueSearch.type
    }

    if (valueSearch.size) {
        queryConditions.size = valueSearch.size
    }

    if (valueSearch.minPrice !== undefined && valueSearch.maxPrice !== undefined) {
        queryConditions.price = {
            $gte: valueSearch.minPrice,
            $lte: valueSearch.maxPrice
        }
    }

    try {
        const getData = await Product.find(queryConditions)
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

export const handleGetProductDetails= async(valueSearch) => {
    let data = {}
    try {
        const getData = await Product.findOne({name : valueSearch})
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

export const handleGetType= async(valueSearch) => {
    let data = {}
    try {
        const getData = await Product.find().or([{ brand: valueSearch.brand }, { style: valueSearch.style }]).distinct('type')
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
        const getMaxPrice = await Product.find().or([{ brand: valueSearch.brand }, { style: valueSearch.style }]).sort([['price', 'desc']]).limit(1)
        const getMinPrice = await Product.find().or([{ brand: valueSearch.brand }, { style: valueSearch.style }]).sort([['price', 'asc']]).limit(1)
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

export const handleGetSize= async(valueSearch) => {
    let data = {}
    try {
        const getData = await Product.find().or([{ brand: valueSearch.brand }, { size: valueSearch.style }]).distinct('size')
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