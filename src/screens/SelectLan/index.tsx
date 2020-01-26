import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {images} from '../../../src/libs/images';
import {styles} from './style';

const WINDOW_WIDTH = Dimensions.get('window').width;

const data = {
  labels: ['India', 'English', 'Spain', 'Russian'],
  datasets: [images.india, images.us, images.spain, images.russia],
};

export const SelectLan = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>Select Language</Text>
      </View>
      {renderItem()}
    </SafeAreaView>
  );
};

function renderItem() {
  let len = data.labels.length;
  let ListArr = [];
  for (let i = 0; i < len; i++) {
    ListArr.push(<BoxComponent gold={i}></BoxComponent>);
  }
  return ListArr;
}

const BoxComponent = (props: any) => {
  const num = props.gold;
  const image = data.datasets[num];
  const name = data.labels[num];
  const bClick = num == 0 ? true : false;
  return (
    <View style={styles.box}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={image} style={styles.avatar} />
        <Text style={styles.txt}>{name}</Text>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#55c9f2', '#3082ed']}
          style={styles.linearGradient}>
          <TouchableOpacity
            style={bClick ? styles.rightArrowActive : styles.rightArrow}>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={20}
              color={bClick ? '#519FF8' : '#fff'}
            />
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};
