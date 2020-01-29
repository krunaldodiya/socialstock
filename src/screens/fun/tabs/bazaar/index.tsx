import React from 'react';
import {SafeAreaView, View, Text, ImageBackground} from 'react-native';
import {Header} from '../../../../../src/components/header';
import {styles} from './style';
import {images} from '../../../../../src/libs/images';

export const Bazaar = (props: any) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground source={images.back7} style={styles.backImg}>
        <View style={styles.container}>
          <Header {...props} title={'Pauzr'} profile menu />
          <View style={{flexDirection: 'row'}}></View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
