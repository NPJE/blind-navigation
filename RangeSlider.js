import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';
import { SafeAreaView } from 'react-native-safe-area-context';

const CustomSlider: React.FC = () => {
  const [value, setValue] = useState<number>(1); // Default value set to 5m

  const formatValue = (value: number): string => {
    switch (value) {
      case 0:
        return '3m';
      case 1:
        return '5m';
      case 2:
        return '7m';
      default:
        return '';
    }
  };

  const onValueChange = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <SafeAreaView>
      <View>
        <Slider
          minimumValue={0}
          maximumValue={2}
          step={1}
          minimumTrackTintColor="#00BAFF"
          maximumTrackTintColor="#000000"
          thumbTintColor="#00BAFF"
          value={value}
          onValueChange={onValueChange}
        />
      </View>

      <View style={{ flexDirection: 'row', padding: 0, paddingLeft: 10, marginTop: -17, }}>
        <Text>3m</Text>
        <Text>5m</Text>
        <Text>7m</Text>
      </View>

      <View style={{ flexDirection: 'row', padding: 0, paddingLeft: 10, marginTop: -17, }}>
        <Text style={{
          height: 15,
          width: 15,
          marginRight: '41.8%',
          borderRadius: 100,
          backgroundColor: "#00BAFF",
        }}></Text>
        <Text style={{
          height: 15,
          width: 15,
          marginRight: '41.7%',
          borderRadius: 100,
          backgroundColor: "#00BAFF",
        }}></Text>
        <Text style={{
          height: 15,
          width: 15,
          marginRight: '42%',
          borderRadius: 100,
          backgroundColor: "#00BAFF",
        }}></Text>
      </View>

      <View>
        <Text style={{ textAlign: 'center', marginTop: 10, color: 'black' }}>{formatValue(value)}</Text>
      </View>

    </SafeAreaView>
  );
};

export default CustomSlider;
