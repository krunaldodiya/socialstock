import React from 'react';
import { SafeAreaView, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { images } from '../../../libs/images';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from 'react-navigation-hooks';

export const Register = () => {
	const { navigate } = useNavigation();
	const [ value, onChangeText ] = React.useState('');
	return (
		<SafeAreaView style={styles.container}>
			<Image source={images.back3} style={styles.backImg} />
			<View style={styles.container}>
				<Image source={images.logo} style={styles.logoImg} />
				<Text style={styles.logoText}>Register</Text>
				<View style={styles.inputView}>
					<TextInput
						style={styles.textInput}
						onChangeText={(text) => onChangeText(text)}
						value={value}
						placeholder={'Fullname'}
						placeholderTextColor={'#cecece'}
					/>
					<Image source={images.manUser} style={styles.inputImg} />
				</View>
				<View style={styles.inputView}>
					<TextInput
						style={styles.textInput}
						onChangeText={(text) => onChangeText(text)}
						value={value}
						placeholder={'Email ID'}
						placeholderTextColor={'#cecece'}
					/>
					<Image source={images.envelope} style={styles.inputImg} />
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
				<View style={styles.inputView}>
					<TextInput
						style={styles.textInput}
						onChangeText={(text) => onChangeText(text)}
						value={value}
						placeholder={'Mobile Number'}
						placeholderTextColor={'#cecece'}
					/>
					<Image source={images.call} style={styles.inputImg} />
				</View>
				<TouchableOpacity onPress={() => {
						navigate('RequestOtp');
					}}>
					<LinearGradient
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 0 }}
						colors={[ '#55c9f2', '#3082ed' ]}
						style={styles.linearGradient}
					>
						<Text style={styles.buttonText}>SIGN UP</Text>
					</LinearGradient>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};
