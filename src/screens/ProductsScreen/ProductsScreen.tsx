import React from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import useProduct from '../../hooks/useProduct';
import {ProductCell} from '../../components/ProductCell/ProductCell';
import {Product} from '../../types/Product';
import {Loader} from '../../components/Loader/Loader';
import {EmptyView} from '../../components/EmptyView/EmptyView';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

export const ProductsScreen = () => {
  const {navigate} = useNavigation();
  const {products, loading, error, loadMoreProducts, hasMore, isFirstLoad} =
    useProduct();

  if (isFirstLoad && loading) {
    return <Loader size="large" />;
  }

  if (isFirstLoad && products.length === 0) {
    return <EmptyView message=" No products found" />;
  }

  const productHandle = (item: Product) => {
    navigate('ProductDetailScreen', {product: item});
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({item}) => (
          <ProductCell onPress={() => productHandle(item)} product={item} />
        )}
        keyExtractor={item => item.id.toString()}
        onEndReached={loadMoreProducts}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading ? (
            <Loader size="small" />
          ) : !hasMore ? (
            <EmptyView message=" No more products to load." />
          ) : null
        }
      />
      {error && <EmptyView message={error} />}
    </View>
  );
};
