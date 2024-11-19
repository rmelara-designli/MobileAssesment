import {useEffect, useState} from 'react';
import {Product} from '../types/Product';
import {AxiosError} from 'axios';
import {_get} from '../api/apiClient';

const useProduct = (initialLimit: number = 10) => {
  const [products, setProducts] = useState<Product[] | []>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [offset, setOffset] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [isFirstLoad, setIsFirstLoad] = useState<boolean>(true);

  const fetchProducts = async (newOffset: number) => {
    try {
      setLoading(true);
      const response = await _get<Product[]>(
        `/products?offset=${newOffset}&limit=${initialLimit}`,
      );
      const fetchedProducts = response.data;

      if (isFirstLoad) {
        setIsFirstLoad(false);
      }

      if (newOffset === 0 && fetchedProducts.length === 0) {
        setHasMore(false);
      } else if (fetchedProducts.length < initialLimit) {
        setHasMore(false);
      }

      setProducts(prevProducts => [...prevProducts, ...fetchedProducts]);
      setOffset(newOffset + initialLimit);
    } catch (err) {
      console.log(err);
      const axiosError = err as AxiosError;
      setError(
        axiosError.message || 'An error occurred while fetching products',
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(0);
  }, []);

  const loadMoreProducts = () => {
    if (!loading && hasMore) {
      fetchProducts(offset);
    }
  };

  return {products, loading, error, loadMoreProducts, hasMore, isFirstLoad};
};

export default useProduct;
