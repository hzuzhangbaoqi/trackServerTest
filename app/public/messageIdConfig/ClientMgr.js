var netId = 611111 //初始化 netId 后面client connection +1

var ClientMgr = module.exports ={};

ClientMgr.getNid = function () {
    netId++;
    return netId;
}

