'use strict';

module.exports = {
    dubbo(className, method, ...javaParams) {
        const timeout =  this.app.dubboClinent.dubboAgent.dependencies[className].dubboTimeout || this.app.dubboClinent.dubboTimeout || 30000;
        return Promise.race([
            this.app.dubboClinent.request(className, method, javaParams),
            new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), timeout))
        ]);
    },
};