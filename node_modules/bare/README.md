bare
====

Make node.js frameworks scram - use bare

A bare example:

    'use strict';
    var bare = require('bare')
      , http = require('http');

    bare.router.on('get', '/test', function(req, res) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('test\n');
      console.log('test');
    });

    http.createServer(function(req, res) {
      bare.router.dispatch(req, res, console.log);
    }).listen(8080);
