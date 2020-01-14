import { StyleSheet, Dimensions } from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;

export const styles = StyleSheet.create({
	linearGradient: {
		width: WINDOW_WIDTH - 24,
		height: 50,
		borderRadius: 8,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		shadowColor: 'rgba(47, 128, 237, 0.55)',
		shadowOffset: { width: 6, height: 0 },
		shadowRadius: 13
	},
	headerText: {
		color: '#ffffff',
		fontFamily: 'Aileron',
		fontSize: 20,
		fontWeight: '600'
	},
	avatar: {
		width: 30,
		height: 30,
		position: 'absolute',
		right: 16
	},
	icon: {
		width: 24,
		height: 20,
		position: 'absolute',
		left: 16
	}
});
