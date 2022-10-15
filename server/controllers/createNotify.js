const Notify = require('../models/Notify')
const { sendNotify } = require('../utils/sendNotify')
module.exports.createNotify=async(req, res)=>{
    const notify = await Notify.create({...req.body})
    const {userId, grp, message, userType} = req.body
    sendNotify({userId, grp, message, userType})
    return res.status(201).json({
        success: true,
        message: "notification created",
        data:notify
    })
}