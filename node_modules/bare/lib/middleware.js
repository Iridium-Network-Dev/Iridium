"use strict"
var stack = []
  , middleware = {};

middleware.use = function use (fn) {
  stack.push(fn);
};

middleware.handle = function handle (req, res, out) {
  var index = 0;

  function next (err) {
    var layer = stack[index++];

    if(!layer) {
      out(req, res);
      return;
    }

    layer(req, res, next);
  }

  next();
};

module.exports = middleware;

