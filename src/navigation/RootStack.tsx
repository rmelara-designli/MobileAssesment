import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProductsScreen} from '../screens/ProductsScreen/ProductsScreen';
import {ProductDetailScreen} from '../screens/ProductDetailScreen/ProductDetailScreen';
import {RootStackParamList} from '../types/navigation';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator<RootStackParamList>();
export const RootStack = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          options={{title: 'Products'}}
          name="ProductsScreen"
          component={ProductsScreen}
        />
        <Stack.Screen
          options={{title: 'Detail'}}
          name="ProductDetailScreen"
          component={ProductDetailScreen}
        />
      </Stack.Navigator>
    </>
  );
};
