import { io } from "socket.io-client";
// socket client port 8080
const socket = io('http://127.0.0.1:5000', { query: "userId=634ad853cbb10a6090c83b71" })
socket.on("connect", ()=>{
    console.log(socket.id);
})
socket.on("notify", (message)=>{
    console.log('------------->', message);
})