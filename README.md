react-native-ps
=====

Simple function to merge styles based on platform in React Native. ps stands for "platform styles."

## Usage

```js
import ps from 'react-native-ps'

const MyComponent = () =>
  <View style={styles.myComponent} />

const styles = ps({
  myComponent: {
    // Styles applied to all platforms
  },


  ios: {
    myComponent: {
      // iOS-specific styles
    },
  },
  android: {
    myComponent: {
      // Android-specific styles
    }
  },
  web: {
    myComponent: {
      // web-specific styles
    }
  },
})
```

## License
MIT
