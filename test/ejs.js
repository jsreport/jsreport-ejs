const should = require('should')
const ejs = require('../lib/ejsEngine')
const JsReport = require('jsreport-core')

describe('ejs', function () {
  it('should render html', function () {
    const html = ejs('Hey')(null, null)
    html.should.be.eql('Hey')
  })

  it('should be able to use helpers', function () {
    const html = ejs('<%= a() %>')({ a: function () { return 'Hey' } }, null)
    html.should.be.eql('Hey')
  })

  it('should be able to use data', function () {
    const html = ejs('<%= a %>')(null, { a: 'Hey' })
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

describe('ejs extension', () => {
  let jsreport

  beforeEach(() => {
    jsreport = JsReport()
    jsreport.use(require('../')())
    return jsreport.init()
  })

  it('should use ejs engine', async () => {
    const result = await jsreport.render({
      template: {
        engine: 'ejs',
        recipe: 'html',
        content: 'Hey'
      }
    })

    result.content.toString().should.be.eql('Hey')
  })
})
