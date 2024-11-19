import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {styles} from './styles';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../types/navigation';

type ProductDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  'ProductDetailScreen'
>;

export const ProductDetailScreen = () => {
  const route = useRoute<ProductDetailScreenRouteProp>();

  const {product} = route.params;

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Image source={{uri: product.images[0]}} style={styles.productImage} />
      <View style={styles.detailsContainer}>
        <Text style={styles.productName}>{product.title}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
        <Text style={styles.productPrice}>${product.price}</Text>
      </View>
    </ScrollView>
  );
};
