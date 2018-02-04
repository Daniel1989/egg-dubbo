'use strict';

const nzd = require("node-zookeeper-dubbo");

module.exports = app => {
    class DubboClient {
        constructor() {
            let config = app.config.dubboclient;
            config.java = require('js-to-java')
            this.dubboAgent=new nzd(config.dubboAgent);
        }

        request(className, method, javaParams) {
            try {
                return  this.dubboAgent[className][method](...javaParams);
            }catch(e){
                app.coreLogger.error('[egg:dubboAgent] call dubbo error');
                app.coreLogger.error(e);
            }
        }

    }

    app.dubboClinent = new DubboClient();
};