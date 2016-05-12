const merge = require('lodash').merge

const ReactNative = require('react-native-universal')

module.exports = function (styles) {
  switch (ReactNative.Platform.OS) {
    case 'ios':
      return merge(styles, styles.ios || {})
    case 'android':
      return merge(styles, styles.android || {})
    case 'web':
      return merge(styles, styles.web || {})
  }
}
