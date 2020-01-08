import React from 'react';
import { SafeAreaView, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { images } from '../../../libs/images';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation, useNavigationParam } from 'react-navigation-hooks';

export const Login = () => {
	const { navigate } = useNavigation();
	const [ value, onChangeText ] = React.useState('Useless Placeholder');
	return (
		<SafeAreaView style={styles.container}>
			<Image source={images.back3} style={styles.backImg} />
			<View style={styles.container}>
				<Image source={images.logo} style={styles.logoImg} />
				<Text style={styles.logoText}>Login</Text>
				<View style={styles.inputView}>
					<TextInput
						style={styles.textInput}
						onChangeText={(text) => onChangeText(text)}
						value={value}
						placeholder={'Username'}
						placeholderTextColor={'#cecece'}
					/>
					<Image source={images.manUser} style={styles.inputImg} />
				</View>
				<View style={styles.inputView}>
					<TextInput
						style={styles.textInput}
						onChangeText={(text) => onChangeText(text)}
						value={value}
						placeholder={'Password'}
						placeholderTextColor={'#cecece'}
					/>
					<Image source={images.lock} style={styles.inputImg} />
				</View>
				<TouchableOpacity
					onPress={() => {
						navigate('Register');
					}}
				>
					<LinearGradient
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 0 }}
						colors={[ '#55c9f2', '#3082ed' ]}
						style={styles.linearGradient}
					>
						<Text style={styles.buttonText}>SIGN IN</Text>
					</LinearGradient>
				</TouchableOpacity>
				<View style={styles.iconView}>
					<Image source={images.facebook} style={styles.iconImg} />
					<Image source={images.twitter} style={styles.iconImg} />
					<Image source={images.google} style={styles.iconImg} />
				</View>
			</View>
		</SafeAreaView>
	);
};
