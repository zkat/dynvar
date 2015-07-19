# dynvar [![Travis](https://img.shields.io/travis/zkat/dynvar.svg)]() [![npm](https://img.shields.io/npm/v/dynvar.svg)]() [![npm](https://img.shields.io/npm/l/dynvar.svg)]()

[`dynvar`](https://github.com/zkat/dynvar) provides dynamically-scoped variables
within a synchronous scope.

# Quickstart

### Install

`$ npm install dynvar`

### Example

```javascript
var dynvar = require('dynvar')
dynvar.define('stdout', process.stdout)
function print (thing) {
  var stream = dynvar('stdout')
  if (stream) { stream.write(''+thing) }
}

dynvar.bind({stdout: null}, function () {
  print('this will not print anything')
})
print('foo') // foo
```
