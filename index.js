const merge = require('lodash').merge

var React

// HACK Differentiates import depending on if we're running in server,
// web client, or react native
// See tuckerconnelly/carbon-ui/src/React.js
if (process && !global.__BUNDLE_START_TIME__) React = require('react-native-web')
else React = require('react-native')

module.exports = function (styles) {
  switch (React.Platform.OS) {
    case 'ios':
      return merge(styles, styles.ios || {})
    case 'android':
      return merge(styles, styles.android || {})
    case 'web':
      return merge(styles, styles.web || {})
  }
}
