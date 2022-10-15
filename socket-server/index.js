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

io.on("connection", socket=>{
    console.log(socket.id);
})