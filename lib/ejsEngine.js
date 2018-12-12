var ejs = require('ejs')
var extend = require('node.extend.without.arrays')

module.exports = function (html, helpers, data) {
  var template = ejs.compile(html)

  return function (helpers, data) {
    var ejsMix = extend(true, helpers, data)
    delete ejsMix.filename
    return template(ejsMix)
  }
}
