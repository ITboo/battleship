import { createWebSocketStream, WebSocketServer } from 'ws';

const listenWebSocketServer = (port) => {
    const websocket = new WebSocketServer({ port });

    websocket.on('connection', async (webSocket) => {
        const webSocketStream = createWebSocketStream(webSocket, {
            decodeStrings: false,
            encoding: 'utf8',
        });

        webSocketStream.on('data', async (data) => {
            try {
                console.log();
            } catch (error) {
                console.log();
            }
        });
    });

    return websocket;
};

export { listenWebSocketServer };