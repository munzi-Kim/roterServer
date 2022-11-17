const { mainModule } = require("process");

const app = require("express")();
const httpServer = require("http").createServer(app);
const server = require("socket.io")(httpServer);

app.get("/", function site_mainPage(request, result) {
    result.sendFile("html/main.html");
});

app.get("/info", function site_basicInfo(request, result) {
    result.sendFile("html/info.html");
});

server.on("connection", function server_connect(socket){
    socket.on("message", function server_getMessage(message){
        console.log("MESSAGE - " + message);

        socket.emit("testEvent", {type:"getUserJson", params:{id: "test"}});
    });
});

app.listen(2200, ()=>{});