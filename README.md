#jsreport-ejs
[![NPM Version](http://img.shields.io/npm/v/jsreport-ejs.svg?style=flat-square)](https://npmjs.com/package/jsreport-ejs)
[![Build Status](https://travis-ci.org/jsreport/jsreport-ejs.png?branch=master)](https://travis-ci.org/jsreport/jsreport-ejs)

[EJS](http://www.embeddedjs.com/) templating engine for jsreport. 
See the docs http://jsreport.net/learn/ejs

##Installation
> npm install jsreport-ejs

##Usage
To use `ejs` in for template rendering set `template.engine=ejs` in the rendering request.

```js
{
  template: { content: '...', recipe: '...', enginne: 'ejs' }
}
```

##jsreport-core
You can apply this extension also manually to [jsreport-core](https://github.com/jsreport/jsreport-core)

```js
var jsreport = require('jsreport-core')()
jsreport.use(require('jsreport-ejs')())
```
