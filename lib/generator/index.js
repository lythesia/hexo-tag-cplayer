'use strict';

var fs = require('fs');
var path = require('path');
var config = require('../config');

// generate assets to `source` folder
module.exports = function(locals) {
  var cfg = config(this.config.cplayer);

  var css = fs.readFileSync(
      path.join(__dirname, '../asset/cplayer.min.css'),
      { encoding: 'utf8' });
  var js = fs.readFileSync(
      path.join(__dirname, '../asset/cplayer.min.js'),
      { encoding: 'utf8' });

  return [{
    path: cfg.style,
    data: css
  },
  {
    path: cfg.engine,
    data: js
  }];
}
