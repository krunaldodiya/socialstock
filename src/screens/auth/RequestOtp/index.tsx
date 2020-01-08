import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './style';
import { images } from '../../../../src/libs/images';
import { useNavigation } from 'react-navigation-hooks';

export const RequestOtp = () => {
  const { navigate } = useNavigation();
  return (
      <LinearGradient
						start={{ x: 0, y: 0 }}
						end={{ x: 0, y: 1 }}
						colors={[ '#57d6ff', '#3b98ef' ]}
						style={styles.linearGradient}
					>
            <Text style={styles.title}>Verification Code</Text>
            <Text style={styles.text}>Please Type Verification Code Sent</Text>
            <Text style={styles.text}>To +86 99585 89894</Text>

            <View style={styles.horizontal}>
              <View style={styles.square}>
                <Text style={styles.numberText}>8</Text>
              </View>
              <View style={styles.square}>
                <Text style={styles.numberText}>5</Text>
              </View>
              <View style={styles.square}>
                <Text style={styles.numberText}>4</Text>
              </View>
              <View style={styles.square}>
                <Text style={styles.numberText}></Text>
              </View>
            </View>

            <View style={{ marginTop: 88}}>
              <View style={styles.horizontal}>
                <TouchableOpacity style={styles.pad}>
                  <Text style={styles.padText}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.pad}>
                  <Text style={styles.padText}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.pad}>
                  <Text style={styles.padText}>3</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.horizontal}>
                <TouchableOpacity style={styles.pad}>
                  <Text style={styles.padText}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.pad}>
                  <Text style={styles.padText}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.pad}>
                  <Text style={styles.padText}>6</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.horizontal}>
                <TouchableOpacity style={styles.pad}>
                  <Text style={styles.padText}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.pad}>
                  <Text style={styles.padText}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.pad}>
                  <Text style={styles.padText}>9</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.horizontal}>
                <TouchableOpacity style={styles.pad}>
                  <Text style={styles.padText}></Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.pad}>
                  <Text style={styles.padText}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.pad} onPress={() => {
                  navigate('Home');
                }}>
                  <Image source={images.close} style={styles.icon}/>
                </TouchableOpacity>
              </View>
            </View>

			</LinearGradient>
  );
};
