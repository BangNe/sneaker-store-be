import bcrypt from 'bcryptjs'

import User from '../models/User'

export const handleCreateUser = async(user) => {
    let data = {}
    try {
        const isAccount = await checkAccountUser(user.account)
        if(isAccount) {
            data = {
                errCode : 1,
                mess : 'tài khoản đã tồn tại'
            }
        }else {
            const checkUser = await User.findOne({account : user.account})
            if(!!checkUser) {
                data = {
                    errCode : 1,
                    mess : 'tài khoản đã tồn tại'
                }
            }else {
                const salt = bcrypt.genSaltSync(10)
                const passwordHash = bcrypt.hashSync(user.password, salt)
                user.password = passwordHash
                user.role ? user.role : user.role = 1

                await User.create(user)

                data = {
                    errCode : 0,
                    mess : 'tạo tại khoản thành công'
                }
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

export const handleLogInUser = async(user) => {
    let data = {}
    try {
        const isAccount = await checkAccountUser(user.account)
        if(isAccount) {
            const checkUser = await User.findOne({account : user.account})
            if(!!checkUser) {
                const checkPw = bcrypt.compareSync(user.password,checkUser.password)
                
                if(checkPw) {
                    const userRender = {role : checkUser.role, account : checkUser.account }
                    data = {
                        errCode : 0,
                        mess : 'đăng nhập thành công',
                        data : userRender
                    }
                }else {
                    data = {
                        errCode : 2,
                        mess : 'mật khẩu không chính xác'
                    }
                }
            }else {
                data = {
                    errCode : 1,
                    mess : 'tài khoản không tồn tại'
                }
            }
        }else {
            data = {
                errCode : 1,
                mess : 'tài khoản không tồn tại'
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

export const checkAccountUser = async(account) => {
    try {
        const isAccount = await User.findOne({account})
        return !!isAccount
    } catch (error) {
        console.log(error)
    }
}