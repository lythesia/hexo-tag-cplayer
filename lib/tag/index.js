'use strict';

module.exports = function(args) {
  var artist = args[0];
  var cover = args[1];
  var list = JSON.parse(args[2]);

  return list.map(function(song) {
    return {
      "name": song.name,
      "artist": artist,
      "image": cover,
      "url": song.url
    };
  });
}
