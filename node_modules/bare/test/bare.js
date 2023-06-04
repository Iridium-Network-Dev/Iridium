var Lab = require('lab')
  , bare = require('../lib/bare')
  , lab = exports.lab = Lab.script()
  , describe = lab.experiment
  , before = lab.before
  , it = lab.test
  , expect = Lab.expect;

describe('bare should exist', function () {
  it('tests for object and functions', function (done) {

    expect(bare).to.be.an('object');

    done();
  });
});

describe('bare should be able to route', function () {
  it('tests if routes get added to routing table', function (done) {

    bare.router.on('GET', '/', function() {});

    expect(bare.router).to.be.an('object');
    expect(bare.router._routes.get).to.be.an('array');
    expect(bare).to.have.property('router');
    expect(bare.router._routes.get[0]).to.have.property('handler');
    expect(bare.router._routes.get[0]).to.have.property('route');
    expect(bare.router.on).to.be.a('function');
    expect(bare.router.dispatch).to.be.a('function');

    done();
  });
});

describe('bare should be able to use middleware', function () {
  it('it tests if req and res can be modified via middleware', function (done) {
    var req = {}
      , res = {};

    function modReqRes (req, res, cb) {
      req.abc = 'abc';
      res.asdf = 'asdf';
      cb();
    }

    bare.middleware.use(modReqRes(req, res, function() {}));
    bare.middleware.handle(req, res, function(req, res) {});

    expect(bare.middleware).to.be.an('object');
    expect(bare.middleware).to.have.property('use');
    expect(bare.middleware).to.have.property('handle');
    expect(bare.middleware.use).to.be.a('function');
    expect(bare.middleware.handle).to.be.a('function');

    expect(req.abc).to.equal('abc');
    expect(res.asdf).to.equal('asdf');
    done();
  });
});

