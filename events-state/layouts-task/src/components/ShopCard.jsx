import PropTypes from 'prop-types';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

class ShopCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Col>
        <Card bg='light'>
          <Card.Body>
            <Card.Title className='text-center fs-4 text-uppercase'>{this.props.product.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted text-center">{this.props.product.color}</Card.Subtitle>
            <Card.Img variant="top" src={this.props.product.img} />
          </Card.Body>
          <Card.Footer className='bg-light d-flex flex-row justify-content-between align-items-center'>
            <Card.Text className='text-danger fw-bold m-0'>${this.props.product.price}</Card.Text>
            <Button className='fw-bold text-uppercase' variant="outline-danger">Add to cart</Button>
          </Card.Footer>
        </Card>
      </Col>
    );
  }
}

ShopCard.propTypes = {
  product: PropTypes.object,
};

export default ShopCard;
