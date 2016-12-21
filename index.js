const merge = require('lodash/merge')
const mergeWith = require('lodash/mergeWith')
const ReactNative = require('react-native')

module.exports = function (styles) {
  function evaluate(func, args) {
    if (typeof func !== 'function') return func
    return func.apply(null, args)
  }

  // Handle functions
  function customizer(objValue, srcValue) {
    if (typeof objValue === 'function' || typeof srcValue === 'function') {
      return function () {
        return merge(evaluate(objValue, arguments), evaluate(srcValue, arguments))
      }
    }

    return undefined
  }

  switch (ReactNative.Platform.OS) {
    case 'ios':
      return mergeWith(styles, styles.ios || {}, customizer)
    case 'android':
      return mergeWith(styles, styles.android || {}, customizer)
    case 'web':
      return mergeWith(styles, styles.web || {}, customizer)
  }

  return {}
}
