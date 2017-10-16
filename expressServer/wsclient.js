const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8080');

ws.on('open', function open() {
    ws.send('{"cmd":"actuallizar", "fecha":"12/12/2107 15:30:00", "premium":17.50, "magna":18.03, "diesel":0.0}');
    //ws.send('{"cmd":"error"');
    //ws.send('{"cmd":"actuallizar", "fecha":"12/12/2107 15:30:00"}');
    //ws.send('{"cmd":"actuallizar", "fecha":"12/12/2107 15:30:00", "premium":0.1, "magna":1.1, "diesel":1.0}');
});

ws.on('message', function incoming(data) {
    console.log(data);
});