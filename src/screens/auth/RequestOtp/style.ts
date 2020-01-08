import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../../../src/libs/theme';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'yellow'
    },
    linearGradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width
    },
    title: {
        color: '#ffffff',
        fontFamily: 'Aileron',
        fontSize: 30,
        fontWeight: '700',
        marginBottom: 25
    },
    text: {
        color: '#ffffff',
        fontFamily: 'Aileron',
        fontSize: 15,
        fontWeight: '300',
        marginVertical: 5,
    },
    horizontal: {
        flexDirection: 'row'
    },
    square: {
        marginTop: 60,
        marginHorizontal: 12,
        width: 45,
        height: 50,
        borderRadius: 5,
        backgroundColor: '#57d6ff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    numberText: {
        color: '#ffffff',
        fontFamily: 'Aileron',
        fontSize: 25,
        fontWeight: '600',
    },
    padText: {
        color: '#ffffff',
        fontFamily: 'Aileron',
        fontSize: 30,
        fontWeight: '400',
    },
    pad: {
        width: width/3,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: 37,
        height: 22,
    }
})