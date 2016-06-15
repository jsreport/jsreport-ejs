var should = require('should')
var ejs = require('../lib/engine')

describe('ejs', function () {
  it('should render html', function () {
    var html = ejs('Hey')(null, null)
    html.should.be.eql('Hey')
  })

  it('should be able to use helpers', function () {
    var html = ejs('<%= a() %>')({ a: function () { return 'Hey' } }, null)
    html.should.be.eql('Hey')
  })

  it('should be able to use data', function () {
    var html = ejs('<%= a %>')(null, { a: 'Hey' })
    html.should.be.eql('Hey')
  })

  it('should throw when missing helper', function () {
    should(function () {
      ejs('<%= foo() %>')(null, {})
    }).throw()
  })

  it('should throw when syntax error', function () {
    should(function () {
      ejs('<% for {%>')(null, {})
    }).throw()
  })
})