'use strict';

module.exports = appInfo => {
    const config = {
        /*mysql: {
            client: {
                host: 'localhost',
                port: '3306',
                user: 'root',
                password: '123456',
                database: 'test',
            },
            app: true,
            agent: false,
        }*/
};
    config.keys = appInfo.name + '_1489393729180_4559';
    return config;
};
exports.io = {
    init: { }, // passed to engine.io
    namespace: {
        '/chat': {
            connectionMiddleware: [],
            packetMiddleware: [],
        },
        '/demo':{

            connectionMiddleware: [],
            packetMiddleware: [],
        }

    },
    redis: {
        host: '0.0.0.0',
        port: 8080
    }
};
exports.mongoose = {
    client: {
        url: 'mongodb://localhost:27017/Track01',
        options: {},
    },
};
