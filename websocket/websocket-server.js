const WebSocketServer = require('ws').Server;
const WSS = new WebSocketServer({ port: 3232 });

WSS.on('connection', (ws) => {
    ws.on('message', (message) => {
        if (message === 'close') {
            ws.close();
        } else {
            WSS.clients.foreach((client) => {
                client.send(message);
            })
        }
        console.log(message);
    });
})

//npm install ws 