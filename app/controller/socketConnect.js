'use strict'
const Controller = require('egg').Controller;
class webSocketController extends Controller{
    async connectController() {
        const connect = this.ctx.service.websocket.connect();
    }
}
module.exports = webSocketController;