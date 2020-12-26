import axios from 'axios';
const PRODUCTS_URL = '/api/products';

export const fetchProducts = () => async (dispatch: any) => {
  try {
    dispatch({ type: 'products/request' });
    const { data } = await axios.get(PRODUCTS_URL);
    dispatch({ type: 'products/success', payload: data });
  } catch (error) {
    dispatch({ type: 'products/failure', payload: error.response?.data?.message || error.message });
  }
};

export const fetchProductDetail = (id: string) => async (dispatch: any) => {
  try {
    dispatch({ type: 'productDetail/request' });
    const { data } = await axios.get(`${PRODUCTS_URL}/${id}`);
    dispatch({ type: 'productDetail/success', payload: data });
  } catch (error) {
    dispatch({ type: 'productDetail/failure', payload: error.response?.data?.message || error.message });
  }
};
