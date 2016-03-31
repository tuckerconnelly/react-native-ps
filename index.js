import { merge } from 'lodash'
import { Platform } from 'react-native'

export default styles => {
  switch (Platform.OS) {
    case 'ios':
      return merge(styles, styles.ios || {})
    case 'android':
      return merge(styles, styles.android || {})
    case 'web':
      return merge(styles, styles.web || {})
  }
}
