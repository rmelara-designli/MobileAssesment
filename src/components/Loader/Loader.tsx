import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {styles} from './styles';

interface LoaderProps {
  size?: 'small' | 'large';
  color?: string;
}
export const Loader = ({size = 'large', color = 'blue'}: LoaderProps) => {
  return (
    <>
      <View style={styles.container}>
        <ActivityIndicator size={size} color={color} />
      </View>
    </>
  );
};
