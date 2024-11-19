/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {ProductScreen} from './src/screens/ProductsScreen/ProductsScreen';
import {NavigationContainer} from '@react-navigation/native';
import {ProductDetailScreen} from './src/screens/ProductDetailScreen/styles';
import {RootStack} from './src/navigation/RootStack';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

export default App;
