import React from 'react';
import { SafeAreaView, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { images } from '../../../libs/images';
import { useNavigation } from 'react-navigation-hooks';
import LinearGradient from 'react-native-linear-gradient';
import { GradientButton } from '../../../components/gradient-button';

export const Login = () => {
	const { navigate } = useNavigation();
	const [ value, onChangeText ] = React.useState('');
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

				<TouchableOpacity style={{ marginTop: 20 }}>
					<GradientButton title={'SIGN IN'}/>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() => {
						navigate('Register');
					}}
				>
					<GradientButton title={'SIGN UP'}/>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};
