'use strict';

exports.keys = '123456';
exports.dubboclient = {
    dubboAgent: {
        application:{name:'demo-provider'},
        register:'localhost:2181',
        dubboVer:'2.5.4-SNAPSHOT',
        root:'dubbo',
        dependencies:{
            Foo:{
                interface:'com.alibaba.dubbo.demo.provider.DemoService',
            },
        }
    }
}
