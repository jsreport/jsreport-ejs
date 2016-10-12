var ejs = require('ejs')
var extend = require('node.extend')

module.exports = function (html, helpers, data) {
  var template = ejs.compile(html)

  return function (helpers, data) {
    var ejsMix = extend(true, helpers, data)
    delete ejsMix.filename
    return template(ejsMix)
  }
}
