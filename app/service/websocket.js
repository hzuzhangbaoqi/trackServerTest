'use strict';

const Service = require('egg').Service;
const WebSocket = require('ws');
const wss = new WebSocket.Server({port: 8080});
let msgHandler = require('./msgHandler');
let clientPackHead = require('../public/protos/Cmd_pb');
let players = [];//存放所有连接数组

class WebSocketService extends Service {
    connect() {
        wss.on('connection', function connection(ws) {
            players.push(ws);
            console.log('当前在线的用户总数'+players.length);
            console.log('用户连接已经成功');
            ws.on('message', function incoming(message) {
                console.log('received: %s', message);
                ws.send('你发的信息是'+message);
               /* let intBuffer = new Uint8Array(message);
                let ds = clientPackHead.C2SData.deserializeBinary(intBuffer.buffer);
                msgHandler.dealClientMsg(ds,ws);*/
            });
            ws.on("error", function catchError(error) {
                console.log("error", error.toString());
            });
            ws.on("close",function catchClose(close) {
                players.splice(players.indexOf(ws));
                console.log("close",close);
            });
        });
    }


}




module.exports = WebSocketService;