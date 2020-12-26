import axios from 'axios';

export const fetchProducts = () => async (dispatch: any) => {
  try {
    dispatch({ type: 'products/request' });
    const { data } = await axios.get('/api/products');
    dispatch({ type: 'products/success', payload: data });
  } catch (error) {
    dispatch({ type: 'products/failure', payload: error.response?.data?.message || error.message });
  }
};
