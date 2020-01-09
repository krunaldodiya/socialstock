import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
    chart: {
        width: 226,
        height: 228,
        marginTop: 20
    },
    bar: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    title: {
        color: '#000000',
        fontFamily: 'Aileron',
        fontSize: 9,
        fontWeight: '700',
        marginLeft: 5
    },
    circle: {
        width: 14,
        height: 14,
        shadowColor: 'rgba(47, 128, 237, 0.33)',
        shadowOffset: { width: 2, height: 0 },
        shadowRadius: 10,
        backgroundColor: '#9796f0',
        borderRadius: 7
    },
    notice: {
        position: 'absolute',
        alignSelf: 'center',
        backgroundColor: '#f0f0f0',
        top: -8,
        paddingHorizontal: 8
    },
    noticeText: {
        color: '#cecece',
        fontFamily: 'Aileron',
        fontSize: 13,
        fontWeight: '400',
    },
    hr: {
        marginTop: 20,
        marginBottom: -20,
        width: width-24,
        height: 1,
        backgroundColor: '#cecece'
    },
    linearGradient: {
        width: 148,
        height: 69,
        marginTop: 40,
        shadowColor: 'rgba(47, 128, 237, 0.55)',
        shadowOffset: { width: 3, height: 0 },
        shadowRadius: 6,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    period: {
        color: '#ffffff',
        fontFamily: 'Aileron',
        fontSize: 11,
        fontWeight: '600',
    },
    time: {
        color: '#ffffff',
        fontFamily: 'Aileron',
        fontSize: 8,
        fontWeight: '400',
    }
})