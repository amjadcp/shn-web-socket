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