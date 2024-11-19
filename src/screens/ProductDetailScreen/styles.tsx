import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 20,
  },
  detailsContainer: {
    paddingHorizontal: 10,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 16,
    color: '#555',
    marginBottom: 15,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00BFAE', // A teal color for price
  },
});
