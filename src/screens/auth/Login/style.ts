import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../../../src/libs/theme';

const WINDOW_WIDTH = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    backImg: {
        position: 'absolute',
        top: -12,
        width: WINDOW_WIDTH,
        height: WINDOW_WIDTH/1.16,
    },
    logoImg: {
        width: 110,
        height: 110,
        marginTop: 70,
        shadowColor: 'rgba(0, 0, 0, 0.27)',
        shadowOffset: { width: 3, height: 0 },
        shadowRadius: 6,
    },
    inputImg: {
        position: 'absolute',
        width: 20,
        height: 20,
        bottom: 16,
        left:16
    },
    logoText: {
        marginTop: 20,
        fontFamily: "Aileron",
        fontSize: 30,
        fontWeight: "700",
        color: "#000000"
    },
    inputView: {
        justifyContent: 'center'
    },
    textInput: {
        width: WINDOW_WIDTH-70,
        height: 50,
        marginTop: 20,
        shadowColor: 'rgba(0, 0, 0, 0.14)',
        shadowOffset: { width: 3, height: 0 },
        shadowRadius: 13,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.14)',
        paddingLeft: 50,
        paddingRight: 20,
        fontFamily: 'Aileron',
        fontSize: 15,
        fontWeight: '400',
    },
    linearGradient: {
        width: 161,
        height: 45,
        marginTop: 20,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#ffffff',
        fontFamily: theme.fonts.TitilliumWebRegular,
        fontSize: 15,
        fontWeight: '600',
    },
    iconView: {
        marginTop: 45,
        flexDirection: 'row'
    },
    iconImg: {
        width: 30,
        height: 30,
        marginHorizontal: 10,
    }
})