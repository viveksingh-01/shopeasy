import IProduct from '../types/Product';

const productsReducer = (state: { products: IProduct[] } = { products: [] }, action: { type: string; payload: IProduct[] }) => {
  switch (action.type) {
    case 'products/request':
      return { loading: true, products: [] };
    case 'products/success':
      return { loading: false, products: action.payload };
    case 'products/failure':
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default productsReducer;
