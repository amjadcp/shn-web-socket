const { addSocketId } = require("./functions/addSockId");
const SocketId = require("./models/SocketId")
const connectDB = require("./utils/connectDB");
connectDB('mongodb+srv://calicut:dEF1MLUDhj8mCYQA@boringbots-2v.auedc.mongodb.net/shn');
const io = require('socket.io')(5000, {
    cors: {
        origin: [
            'http://127.0.0.1:8080',
            'http://localhost:8080'
        ]
    }
})

io.on("connection", async socket=>{
    const handshakeData = socket.request;
    // console.log("middleware:", handshakeData._query['userId']);
    await addSocketId(handshakeData._query['userId'], socket.id)
    const op = 1
    if(op===1){
        const socketId = await SocketId.findOne({userId: handshakeData._query['userId']})
        // console.log(socketId);
        if(socketId) {
            console.log('hiii');
            socketId.sockid.forEach(id=>{
            io.to(id).emit('notify', 'hiii')
            })
        }
    }
})
