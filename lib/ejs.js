module.exports = function (reporter, definition) {
  reporter.extensionsManager.engines.push({
    name: 'ejs',
    pathToEngine: require('path').join(__dirname, 'ejsEngine.js')
  })
}