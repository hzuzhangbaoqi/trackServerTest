'use strict';
let loginProtocol = require('./loginProtocol/loginServer');
let towerProtocol = require('./towerProtocol/towerServer');
let heroProtocol = require('./heroProtocol/heroServer');
let getAssetProtocol = require('./getAssetProtocol/getAssetServer');
let hangProtocol = require('./hangProtocol/hangServer');

exports.dealClientMsg= function (data,ws) {
    var func = data.getMessageid();
        switch (func){
            case 0:
                loginProtocol.Login(data,ws);
            break;
            case 1:
                loginProtocol.Create_Role(data,ws);
                break;
            case 2:
                loginProtocol.Role_Info(data,ws);
                break;





            case 100:
                heroProtocol.HeroGetAll(data,ws);
                break;
            case 101:
                heroProtocol.HeroGetHero(data,ws);
                break;
            case 102:
                heroProtocol.HeroPlus(data,ws);
                break;
            case 103:
                heroProtocol.HeroStarLevelUp(data,ws);
                break;
            case 104:
                heroProtocol.HeroLevelUpReq(data,ws);
                break;
            case 105:
                heroProtocol.HeroListUpdate(data,ws);
                break;



            case 200:
                towerProtocol.TowerEquip(data,ws);
                break;
            case 201:
                towerProtocol.TowerPosUpgrade(data,ws);
                break;
            case 202:
                towerProtocol.TowerUpStar(data,ws);
                break;
            case 203:
                towerProtocol.TowerChange(data,ws);
                break;
            case 300:
                hangProtocol.duelBaseInfo(data,ws);
                break;
            case 301:
                hangProtocol.fallingRes(data,ws);
                break;
            case 302:
                hangProtocol.duelRunState(data,ws);
                break;
            case 303:
                hangProtocol.passGradeInfo(data,ws);
                break;
            case 400:
                getAssetProtocol.getAssetData(data,ws);
                break;



            /*case 999:
                loginProtocol.Login(data,ws);
                break;*/


        }


}

