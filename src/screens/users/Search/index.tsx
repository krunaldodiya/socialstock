import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  ImageBackground
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
const width = Dimensions.get('window').width;
import {Header} from '../../../../src/components/header';
import {images} from '../../../../src/libs/images';
import {styles} from './style';

const Search = () => {
  const [value, onChangeList] = React.useState(false);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor:'#FFF'}}>
      <View style={{margin: 12}}>
        <Header title={'Search'} profile notify 
        
        statusBarProps={{
          barStyle: 'light-content',
          translucent: true,
          backgroundColor: 'transparent',
        }}
        barStyle="light-content"
        />
      </View>
      <ScrollView>
          <View style={{marginHorizontal: 12}}>
            <BoxSearchComponent />
          </View>
          <View style = {{margin:12 , flexDirection: 'row', justifyContent:'space-between', alignItems:'center'}}>
            <View style={{width:'30%', height:1, backgroundColor:'#D6D6D6'}}></View>
            <Text style={{color:'#D6D6D6', fontWeight:'700'}}>Explore your interests</Text>
            <View style={{width:'30%', height:1, backgroundColor:'#D6D6D6'}}></View>
          </View>
            <View style={styles.square}>
              <BoxSquareComponent image = {images.interest_fashion} title={'Fashion'} colors={['#F857A5', '#FE585A']} />
              <BoxSquareComponent image = {images.interest_traveling} title={'Traveling'} colors={['#56CCF2', '#367FE0']} />
              <BoxSquareComponent image = {images.interest_food} title={'Food'} colors={['#DBE35A', '#47B749']} />
              <BoxSquareComponent image = {images.interest_technology} title={'Technology'} colors={['#B7BFC2', '#2E3F51']} />
              <BoxSquareComponent image = {images.interest_animals} title={'Animals'} colors={['#1D120C', '#968074']} />
              <BoxSquareComponent image = {images.interest_nature} title={'Nature'} colors={['#52C134', '#091E02']} />
              <BoxSquareComponent image = {images.interest_automobile} title={'Automobile'} colors={['#D5AD7C', '#EC8F04']} />
              <BoxSquareComponent image = {images.interest_arts} title={'Arts & Crafts'} colors={['#8E2485', '#F16F22']} />
            </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const BoxSearchComponent = (props: any) => {
  return (
    <View style={styles.box}>
      <View style={{flexDirection: 'row', alignItems:'center', paddingLeft: 8}}>
        <MaterialIcons
              name="search"
              size={24}
              color={'#D6D6D6' }
            />
        <View style={{marginLeft: 22}}>
          <TextInput style={{fontWeight: '700', padding : 0, fontSize: 16,  width:width - 100, color:'gray'}}
            placeholder = "Search People..."
            placeholderTextColor = {'#D6D6D6'}
          ></TextInput>
        </View>
      </View>
    </View>
  );
};

const BoxSquareComponent = (props: any) => {
  return (
    <>
    <ImageBackground  style={styles.avatar} imageStyle={{borderRadius: 10}} source={props.image}>
      <View style = {styles.bottomView}></View>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={props.colors}
          style={styles.linearGradient}>
          <Text style={{color: '#FFF', fontWeight:'700'}}>{props.title}</Text>
        </LinearGradient>
      <View style = {styles.WrapFollow}>
        <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#56CCF2', '#367FE0']}
            style={styles.followGradient}>
            <Text style={{color: '#FFF', fontWeight:'700', fontSize: 8}}>Follow</Text>
          </LinearGradient>
      </View>

    </ImageBackground> 
    </>
  );
};

export default Search;
