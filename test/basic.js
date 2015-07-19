var tap = require('tap')
var dynvar = require('..')

tap.test('define', function (t) {
  dynvar.define('foo', 1)
  t.equal(dynvar('foo'), 1)
  t.end()
})

tap.test('bind', function (t) {
  t.plan(4)
  dynvar.bind({foo: 1}, function () {
    t.equal(dynvar('foo'), 1)
    dynvar.bind({foo: 2}, function () {
      t.equal(dynvar('foo'), 2)
      dynvar('foo', 3)
      t.equal(dynvar('foo'), 3)
    })
    t.equal(dynvar('foo'), 1)
    t.end()
  })
})
