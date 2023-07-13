import { httpServer } from "./src/http_server/index.js";
import { listenWebSocketServer } from "./src/ws/websockets.js";

const HTTP_PORT = 8181;
const WS_PORT = 8080;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

console.log(`Start WebSocket server on the ${WS_PORT} port!`);
const webSocketServer = listenWebSocketServer(WS_PORT);

process.on('SIGINT', () => {
    webSocketServer.clients.forEach((client) => {
        client.close();
    });

    webSocketServer.close();

    httpServer.close();

    process.exit();
});