const Notify = require('../models/Notify')
module.exports.createNotify=async(req, res)=>{
    const notify = await Notify.create({...req.body})
    return res.status(201).json({
        success: true,
        message: "notification created",
        data:notify
    })
}