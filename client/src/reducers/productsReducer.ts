import IProduct from '../types/Product';

export const productsReducer = (
  state: { products: IProduct[] } = { products: [] },
  action: { type: string; payload: IProduct[] }
) => {
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

export const productDetailReducer = (
  state: { product: any } = { product: {} },
  action: { type: string; payload: IProduct }
) => {
  switch (action.type) {
    case 'productDetail/request':
      return { loading: true, product: {} };
    case 'productDetail/success':
      return { loading: false, product: action.payload };
    case 'productDetail/failure':
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
