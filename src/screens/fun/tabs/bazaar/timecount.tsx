import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, ImageBackground, StyleSheet, Image, Dimensions} from "react-native";

import  WaveView from '../../../../components/animation/WaveView';

import {ArtTest} from '../../../../components/animation/Art';

import {Icon, } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { Header } from '../../../../../src/components/header';
import { styles } from './style';
import { images } from '../../../../../src/libs/images';

import {TouchableOpacity} from 'react-native';

var sec = 60;
const {width, height} = Dimensions.get('window');

export const TimeCount = (props: any) => {
  const [timeStr, setTimeStr] = useState("00:00");
  const [total, setTotal] = useState(props.navigation.getParam('timecount'));
  const [bstop, setStop]=useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      sec = sec - 1;
      if( total === 0 && sec === 0 )
      {
          setStop(true);
          setTimeStr("00:00");
          return;
      }
      if( sec === 0 ) sec = 60;
      if( sec === 60 )
      setTotal(total - 1);
            
      if( sec > 0 )
      {
        if( sec < 10 && total < 10 )
          setTimeStr("0" + total.toString()+":0"+ sec.toString());
        else if( sec > 9 && total < 10 )
          setTimeStr("0" + total.toString()+":"+ sec.toString());
        else if( sec < 10 && total > 9)
          setTimeStr(total.toString()+":0"+ sec.toString());
        else if( sec > 9 && total > 9)
          setTimeStr(total.toString()+":"+ sec.toString());
      }
      
    }, 1000);
      return () => {
        clearInterval(timer);
      };
  }, [timeStr]);

  const onCancel=()=>{
      setStop(false);
      setTimeStr("00:00");
      props.navigation.goBack();
  }
    return (
    <SafeAreaView style={{ flex: 1, backgroundColor:'#FFF' }}>
      {/* <BoxCircleAndPoint time={timeStr}/> */}

      <View style={{marginTop: '70%', width:'100%', justifyContent:'center', alignItems:'center' }}>
        
      <ArtTest
        minute = {total+1}
        type = {'circular'}
        proportion = {1}
        yTH = {5}
        surfaceWidth = {200}
        surfaceHeight = {200}
        superViewBackgroundColor = {'#FFF'}
        style = {{backgroundColor:'#3082ed', width:200, height: 200, }}/>
        <Text style={{color:'#31F94D', fontSize:36, fontWeight:'700', marginTop:-70 }}>{timeStr}</Text>
      </View>


      {!bstop ? <View style={{width:'100%', justifyContent:'center', alignItems:'center',position:'absolute', bottom:40,  }}>
      <ArtTest
        type = {'rectangular'}
        proportion = {1}
        surfaceWidth = {width}
        surfaceHeight = {200}
        superViewBackgroundColor = {'#FFF'}
        style = {{backgroundColor:'#3082ed', width:width, height: 200,}}/>
      </View>:
      <View style={{width:'100%', justifyContent:'center', alignItems:'center',position:'absolute', bottom:0,  }}>
        {/* <Image style={{width: width, height:150, resizeMode:'stretch'}} source={images.rect_gif}></Image> */}
      </View>
      } 
      
      <TouchableOpacity style = {{position:'absolute', bottom: 20, justifyContent:'center', width:'100%'}} onPress={()=>onCancel()}>
          <Icon
            type = {'ionicons'}
            name = {'cancel'}
            size = {50}
            color = {'#DA3128'}
          ></Icon>
      </TouchableOpacity>
    </SafeAreaView>
  );
  
};

const BoxCircleAndPoint = (props: any)=>{
  return (
      <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center', marginTop:'70%'}}>
        <View style={{flexDirection:'column', width:100, height: 100, borderRadius: 50,  alignItems:'center', }}>
        <Image style={{width: 100, height:100}} source={images.ball_gif}></Image>
         <Text style={{color:'#FFF', fontSize:18, fontWeight:'700', marginTop: -55}}>{props.time}</Text>
         </View>
      </View>
  );
};