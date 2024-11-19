import React from 'react';
import {Text, View} from 'react-native';

type EmptyViewProps = {
  message: string;
};

export const EmptyView = ({message}: EmptyViewProps) => {
  return (
    <View>
      <Text>{message}</Text>
    </View>
  );
};
