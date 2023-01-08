import User from '../models/User'
import {handleCreateUser,handleLogInUser} from '../sevices/userSevices'

function UserController() {

    // [GET] api/user
    this.index = async (req,res) => {
        try {
            const data = await User.find({})
            res.status(200).json({data : data})
        } catch (error) {
            console.log(error)
        }
    }

    //[POST] api/users/create
    this.createUser = async (req,res) => {
        try {
            const data = await handleCreateUser(req.body)
            res.status(200).json({data})
        } catch (error) {
            res.status(500).json({data: {
                errCode : -1,
                mess : 'kết nối thật bại!!! vui lòng thử lại sau'
            }})
        }
    }

    //[POST] api/users/log-in
    this.logInUser = async (req,res) => {
        try {
            const data = await handleLogInUser(req.body)
            res.status(200).json({data : data})
        } catch (error) {
            res.status(500).json({data: {
                errCode : -1,
                mess : 'kết nối thật bại!!! vui lòng thử lại sau'
            }})
        }
    }
}

export default new UserController
