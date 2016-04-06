'use strict'

const merge = require('lodash').merge

let React

// If running on the server, import react-native-web for SSR instead of
// react-native
if (process) React = require('react-native-web')
else React = require('react-native')

module.exports = styles => {
  switch (React.Platform.OS) {
    case 'ios':
      return merge(styles, styles.ios || {})
    case 'android':
      return merge(styles, styles.android || {})
    case 'web':
      return merge(styles, styles.web || {})
  }
}
