module.exports = app => {
    app.beforeStart(async () => {
        // 应用会等待这个函数执行完成才启动
        const socket = require('socket.io-client')('http://127.0.0.1:7001');
        socket.on('connect', () => {
            console.log('connect!');
            socket.emit('chat');
        });
        socket.on('res', msg => {
             console.log('res from server: %s!', msg);
        });
        // 也可以通过以下方式来调用 Service
        // const ctx = app.createAnonymousContext();
        // app.cities = await ctx.service.cities.load();
    });
};