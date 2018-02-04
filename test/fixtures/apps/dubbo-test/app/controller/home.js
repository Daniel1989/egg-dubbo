'use strict';

const Controller = require('egg').Controller;
const Java = require('../extend/java')();
class HomeController extends Controller {
  async index() {
      const { ctx } = this;
      ctx.body = await ctx.dubbo("Foo", "getResult", Java.javaString('1000'),Java.javaResultInstance(1123123,'key:3232434242'));
      console.log(ctx.body)
  }
}

module.exports = HomeController;
