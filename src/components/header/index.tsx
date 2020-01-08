import React from 'react';
import { SafeAreaView, View, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './style';
import { images } from '../../../src/libs/images';

export const Header = () => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<LinearGradient
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 0 }}
				colors={[ '#55c9f2', '#3082ed' ]}
				style={styles.linearGradient}
			>
                <Text style={styles.headerText}>Search</Text>
                <Image source={images.man} />
			</LinearGradient>
		</SafeAreaView>
	);
};
