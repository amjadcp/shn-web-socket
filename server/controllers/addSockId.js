const SocketId = require('../models/SocketId')

module.exports.createNotify=async(req, res)=>{
    const {userId, sockid} = req.body
    let socketId = await SocketId.findOne({_id: userId})
    if(!socketId) socketId = await SocketId.create({
        userId: userId,
        sockid: sockid
    })
    else socketId = await SocketId.findOneAndUpdate({_id: userId}, {sockid: sockid})
    const notify = await Notify.create({...req.body})
    return res.status(200).json({
        success: true,
        message: "sockid added",
        data:socketId
    })
}