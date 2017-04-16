'use strict';

var tag = require('./tag');

/*
 * {% cplayer ARTIST COVER SONG [SONGS]%}
 * song: { name: .., url: .. } as json string
 */
hexo.extend.tag.register('cplayer', function(args, content) {
  var playbox = 
    `<div id="cplayer-here" style="margin-top:10px;"></div>
     <script>
     'use strict';
      let cp = new cPlayer({
        "element":document.getElementById("cplayer-here"),
        "list":${JSON.stringify(tag(args))}
      })
     </script>`;
  return playbox;
})

hexo.extend.generator.register('cplayer', require('./generator')); // generate assets
hexo.extend.filter.register('inject_ready', require('./filter')); // inject css/js
