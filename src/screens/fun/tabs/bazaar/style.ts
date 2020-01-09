import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 12,
      marginTop: 24
    },
    backImg: {
        position: 'absolute',
        top: -12,
        width: width,
        height: height,
    },
})