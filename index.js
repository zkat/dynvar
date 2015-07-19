let vars = Symbol('VARS')
let top = Symbol('TOPVARS')
global[vars] = global[top] = Object.create(null)

function dynvar (name, value) {
  if (arguments.length < 2) {
    return global[vars][name]
  } else {
    global[vars][name] = value
    return value
  }
}
dynvar.define = (name, value) => global[top][name] = value
dynvar.bind = (varsAndValues, cb) => {
  try {
    global[vars] = Object.create(global[vars])
    for (let key in varsAndValues) {
      if (varsAndValues.hasOwnProperty(key)) {
        global[vars][key] = varsAndValues[key]
      }
    }
    return cb()
  } finally {
    global[vars] = Object.getPrototypeOf(global[vars]) || top
  }
}

export default dynvar
