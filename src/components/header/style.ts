import { StyleSheet, Dimensions } from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    linearGradient: {
        width: WINDOW_WIDTH-24,
        height: 50,
        margin: 12,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: '#ffffff',
        fontFamily: 'Aileron',
        fontSize: 20,
        fontWeight: '600',
    }
})