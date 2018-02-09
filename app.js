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
            return  this.dubboAgent[className][method](...javaParams);
        }

    }

    app.dubboClinent = new DubboClient();
};