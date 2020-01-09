import React from 'react';
import { SafeAreaView, View, Text, Image } from 'react-native';
import { Header } from '../../../../../src/components/header';
import { images } from '../../../../../src/libs/images';
import { styles } from './style';
import LinearGradient from 'react-native-linear-gradient';

export const Timer = () => {
	return (
		<SafeAreaView style={{ flex: 1, margin: 12 }}>
			<Header title={'Minutes'} profile goback />

			<View style={{ flex: 1, marginTop: 12  }}>
        <View style={styles.bar}>
          <View style={{ flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.circle}></View>
            <Text style={styles.title}>All time Saving </Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center'}}>
            <View style={[styles.circle, { backgroundColor: '#2f80ed'}]}></View>
            <Text style={styles.title}>Average Per Day</Text>
          </View>
        </View>

        <View style={styles.hr}>
					<View style={styles.notice}>
						<Text style={styles.noticeText}>16 jan 2019</Text>
					</View>
				</View>

        <View>
          <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              colors={[ '#55c9f2', '#3082ed' ]}
              style={styles.linearGradient}
            >
              <Text style={styles.period}>40 Minutes</Text>
              <Text style={styles.time}>02 : 00 PM</Text>
            </LinearGradient>
        </View>

			</View>
		</SafeAreaView>
	);
};
