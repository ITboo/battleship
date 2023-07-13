import { createWebSocketStream, WebSocketServer, WebSocket } from 'ws';

const listenWebSocketServer = (port: number) => {
    const websocket = new WebSocketServer({ port });

    websocket.on('connection', async (webSocket: WebSocket) => {
        const webSocketStream = createWebSocketStream(webSocket, {
            decodeStrings: false,
            encoding: 'utf8',
        });

        webSocketStream.on('data', async (data: string) => {
            try {
                console.log(`received ${data}`);
            } catch (error) {
                console.log();
            }
        });
    });

    return websocket;
};

export { listenWebSocketServer };