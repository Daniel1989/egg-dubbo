# egg-dubbo-plugin

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]
<!--
change to daniel
-->
[npm-image]: https://img.shields.io/npm/v/egg-dubbo-plugin.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-dubbo-plugin
[travis-image]: https://img.shields.io/travis/Daniel1989/egg-dubbo.svg?style=flat-square
[travis-url]: https://travis-ci.org/Daniel1989/egg-dubbo
[codecov-image]: https://img.shields.io/codecov/c/github/Daniel1989/egg-dubbo.svg?style=flat-square
[codecov-url]: https://codecov.io/github/Daniel1989/egg-dubbo?branch=master
[david-image]: https://img.shields.io/david/Daniel1989/egg-dubbo.svg?style=flat-square
[david-url]: https://david-dm.org/Daniel1989/egg-dubbo
[snyk-image]: https://snyk.io/test/npm/egg-dubbo/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-dubbo
[download-image]: https://img.shields.io/npm/dm/egg-dubbo.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-dubbo

<!--
Description here.
-->

## Install

```bash
$ npm i egg-dubbo-plugin --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.dubbo = {
  enable: true,
  package: 'egg-dubbo',
};
```

## Configuration
use  node-zookeeper-dubbo, see [here](https://github.com/p412726700/node-zookeeper-dubbo).

```js
// {app_root}/config/config.default.js
exports.dubbo = {
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
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/Daniel1989/egg/issues).

## License

[MIT](LICENSE)
