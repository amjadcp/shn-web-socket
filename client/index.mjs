import { io } from "socket.io-client";
// socket client port 8080
const socket = io('http://127.0.0.1:5000', { query: "userId=213sdfsd" })
socket.on("connect", ()=>{
    console.log(socket.id);
})