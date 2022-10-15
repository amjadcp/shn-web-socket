const User = require('../models/User')
module.exports.createUser=async(req, res)=>{
    const user = await User.create({...req.body})
    return res.status(201).json({
        success: true,
        message: "user created",
        data:user
    })
}