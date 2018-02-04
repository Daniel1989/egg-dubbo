/**
 * Created by caoxiaopeng on 18/1/30.
 */
module.exports = () => {
    const java = {};
    java.javaString=function(str){
        return {
            '$class': 'java.lang.String',
            '$': str
        };
    };

    java.javaResultInstance=function(num,name){
        return {
            $class: 'com.alibaba.dubbo.demo.provider.Result',
            $: {
                num: num,
                name: name,
            }
        };
    };
    return java;
}