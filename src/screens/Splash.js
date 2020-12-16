import React, {useEffect} from 'react';
import {Text, View, Image} from 'react-native';
import {COLORS} from './Theme';

const Splash = (props) => {
  global.cartData = [];
  useEffect(() => {
    setTimeout(() => {
      props.navigation.replace('Home');
    }, 1000);
  }, []);

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: COLORS.background,
      }}>
      <Image
        style={{width: 200, height: 200}}
        source={require('../../assets/bookLogo.jpg')}
      />
      <Text style={{fontSize: 24, fontWeight: 'bold', paddingTop: 20}}>
        {'Book Info'}
      </Text>
    </View>
  );
};

export default Splash;
