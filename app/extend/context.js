'use strict';

module.exports = {
    dubbo(className, method, ...javaParams) {
    const data = this.app.dubboClinent.request(className, method, javaParams);
    return data;
},
};