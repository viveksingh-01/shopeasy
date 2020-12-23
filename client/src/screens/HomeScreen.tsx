import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';

interface ProductModel {
  _id: string;
  name: string;
  image: string;
  rating: number;
  numReviews: number;
  price: number;
}

const HomeScreen: React.FC = () => {
  const [products, setProducts] = useState<ProductModel[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <>
      <h2>Latest Products</h2>
      <Row>
        {products.map(product => (
          <Col key={product._id} sm="12" md="6" lg="4" xl="3">
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
