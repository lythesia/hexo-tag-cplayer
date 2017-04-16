'use strict';

var path = require('path');
var config = require('../config');

module.exports = function(inject) {
  var ctx = this;
  var cfg = config(ctx.config.cplayer);

  inject.link('head_end', { href: path.join(ctx.config.root, cfg.style), rel: 'stylesheet' });
  inject.script('head_end', { src: path.join(ctx.config.root, cfg.engine), type: 'text/javascript' });
}
