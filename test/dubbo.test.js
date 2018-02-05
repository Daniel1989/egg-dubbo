'use strict';

const mock = require('egg-mock');
const assert = require('assert');
describe('test/dubbo.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/dubbo-test',
    });
    return app.ready();
  });
  // beforeEach(() => {
  //
  // });
  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    app.dubboClinent.dubboAgent={
      "Foo":{
        "getResult":function(){
            return 'hello'
        }
      },
      "dependencies":{
          "Foo":{

          }
      }
    };
    return app.httpRequest()
      .get('/')
      .expect(200)
      .expect(res => {
        assert(res.text === 'hello');
      });
  });

  it('should not GET /', () => {
    app.dubboClinent.dubboAgent={
      "dependencies":{
        "Foo":{

        }
      }
    };
    return app.httpRequest()
        .get('/')
        .expect(204)
  });
});
