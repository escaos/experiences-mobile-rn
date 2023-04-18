import React from 'react';
import {View, Text} from 'react-native';

interface SampleComponentProps {
  text: string;
}

const SampleComponent: React.FC<SampleComponentProps> = ({text}) => {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
};

export default SampleComponent;
