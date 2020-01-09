import React from 'react';
import { SafeAreaView, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './style';
import { images } from '../../../src/libs/images';

export const Header = (props: any) => {
	return (
		<SafeAreaView>
			<LinearGradient
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 0 }}
				colors={[ '#55c9f2', '#3082ed' ]}
				style={styles.linearGradient}
			>
				{props.camera && <Image source={images.camera} style={styles.icon} />}
				{props.menu && <Image source={images.menu} style={styles.icon} />}
				{props.goback && <Image source={images.goback} style={[styles.icon, { height: 16}]} />}

				<Text style={styles.headerText}>{props.title}</Text>
				{props.profile && <Image source={images.man} style={styles.avatar} />}
			</LinearGradient>
		</SafeAreaView>
	);
};
