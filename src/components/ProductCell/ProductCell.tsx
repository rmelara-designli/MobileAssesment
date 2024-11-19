import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Product} from '../../types/Product';
import {styles} from './styles';
import {formatCurrency} from '../../utils/formatCurrency';

type ProductCellProps = {
  product: Product;
  onPress: () => void;
};

export const ProductCell = ({product, onPress}: ProductCellProps) => {
  return (
    <>
      <TouchableOpacity onPress={onPress} style={styles.content}>
        <Text style={styles.title}>{product.title}</Text>

        <Text>
          <Text style={styles.title}>Category: </Text>
          <Text style={styles.text}>{product.category.name}</Text>
        </Text>
        <Text>
          <Text>Price: </Text>
          <Text>{formatCurrency(product.price)}</Text>
        </Text>
        {/* Availability does not exist in platzi API
        <Text>{product.availability}</Text> */}
      </TouchableOpacity>
    </>
  );
};
