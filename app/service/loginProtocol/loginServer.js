'use strict'

























/*

let ClientMgr = require('../../public/messageIdConfig/ClientMgr');
let _netId,userType,openId,serverId = null;
//const clientPackHead =require('../../public/protos/Cmd_pb');
const clientPlayData = require('../../public/protos/Player_pb');
const clientSendMsg = require('../../public/messageIdConfig/clientSendMsg');
const backSendMsg = require('../../public/messageIdConfig/backSendMsg');
const Service = require('egg').Service;


class LoginService extends Service {
    async login(protoObject){
        let dInfo = new Uint8Array(protoObject.getData());
        let clientIndex = protoObject.getClientindex();
        let dInfos = clientPlayData.LoginReq.deserializeBinary(dInfo.buffer);
        _netId = ClientMgr.getNid();
        this.connectBackData(protoObject,dInfos,_netId,function (res) {
            console.log('前端进入游戏发给后台数据' + JSON.stringify(res));
            userType = res.msg.user_type;
            openId = res.msg.open_id;
            serverId = res.msg.server_id;
            //connBackEnd(res, reqsCallBack,clientIndex);
        })
    }
    async connectBackData(ds,dInfos,_netId,callback) {
        if(ds.getMessageid() == clientSendMsg.Login){
            callback({
                "msg_type":backSendMsg.Login,
                "server_id":dInfos.getServerid(),
                "player_id":0,
                "net_id":_netId,
                "msg":{
                    "user_type":dInfos.getUsertype(),
                    "open_id":dInfos.getUid(),
                    "token":dInfos.getKey(),
                    "timestamp":dInfos.getTimestamp(),
                    "version":dInfos.getVersion(),
                    "imei":dInfos.getImei(),
                    "client_ip":dInfos.getClientip(),
                    "server_id":dInfos.getServerid()
                }
            })
        }
    }
}
*/
