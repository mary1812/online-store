import React from 'react';
import { Container} from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/BrandBar'

const Shop = () => {
  return (
    <Container>
      <Row className="mt-4">
        <Col md={3}>
          <TypeBar/>
        </Col>
        <Col md={9}>
          <BrandBar/>
        </Col>
        
      </Row>
    </Container>
  );
}

export default Shop;
