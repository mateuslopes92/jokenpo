import React from 'react';
import {View, Image} from 'react-native';

import img from '../../../assets/images/jokenpo.png';

export default function Header() {
  return (
    <View>
      <Image source={img} />
    </View>
  );
}
