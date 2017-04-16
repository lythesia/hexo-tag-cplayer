'use strict';

var obja = require('object-assign');

var default_config = {
  engine: 'cplayer/cp.min.js', // for now always use this
  style: 'cplayer/cp.min.css'
};

module.exports = function(global_config) {
  return obja({}, default_config, global_config)
}
