const { mainModule } = require("process");

const app = require("express")();
const httpServer = require("http").createServer(app);
const server = require("socket.io")(httpServer);

server.on("connection", function server_connect(socket){
    socket.on("message", function server_getMessage(message){
        console.log("MESSAGE - " + message);

        socket.emit("testEvent", {type:"getUserJson", params:{id: "test"}});
    });
});

httpServer.listen(2200, ()=>{ console.log("[ roter-server ] Greeting.")});
