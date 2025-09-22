const WebSocket = require("ws");

// Render даёт порт через переменную окружения
const PORT = process.env.PORT || 10000;

const server = new WebSocket.Server({ port: PORT });

server.on("connection", (socket) => {
  console.log("Новый клиент подключился!");
  socket.send("Привет от сервера на Render!");

  socket.on("message", (msg) => {
    console.log("Получено:", msg.toString());
    socket.send("Эхо: " + msg);
  });
});

console.log(`WebSocket сервер запущен на порту ${PORT}`);