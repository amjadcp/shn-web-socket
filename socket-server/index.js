// socket server port 5000

const io = require('socket.io')(5000, {
    cors: {
        origin: ['http://127.0.0.1:3000']
    }
})

io.on("connection", socket=>{
    console.log(socket.id);
})