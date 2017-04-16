## hexo-tag-cplayer

media tag for Hexo 3.x, with help of [cplayer](https://github.com/Copay/cPlayer)

## dependencies

[hexo-inject](https://github.com/akfish/hexo-inject.git)

(though it's not maintained anymore ..)

## usage

```
{% cplayer ARTIST CONVER SONGS %}
```

songs:
* type: json string
* attributes: name, url

e.g:
`'[{ "name": "foo", "url": "bar" }]'`

## _config.yml

```
cplayer:
  style: path-for-cplayer-css
```

## license

MIT

## thanks to

inspired by [hexo-tag-owl](https://github.com/m80126colin/hexo-tag-owl.git)
