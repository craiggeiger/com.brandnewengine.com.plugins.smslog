

var SmslogLoader = function (require, exports, module) {
    var exec = require("cordova/exec");
    
    function Smslog () {}
        
    Smslog.prototype.getSMSLog = function (successFunc, failFunc) {
        exec(successFunc, failFunc, "Smslog","getSMSLog",[]);
    };

    Smslog.prototype.getTexts = function (params, successFunc, failFunc) {
        exec(successFunc, failFunc, "Smslog","getTexts", params);
    };

    Smslog.prototype.getTextsAfter = function (params, successFunc, failFunc) {
        exec(successFunc, failFunc, "Smslog","getTextsAfter", params);
    };
    
    var smsLog = new Smslog();
    module.exports = smsLog;
};

SmslogLoader(require, exports, module);

cordova.define("cordova/plugin/Smslog", SmslogLoader);