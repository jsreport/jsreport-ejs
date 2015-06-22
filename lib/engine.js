var ejs = require('ejs');
var extend = require("node.extend");

module.exports = function (html, helpers, data) {
    return ejs.render(html, extend(true, helpers, data));
};
