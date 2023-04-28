import PropTypes from 'prop-types';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

class ShopItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Col className='mb-1'>
        <Card bg='light' className='bg-light d-flex flex-row justify-content-between align-items-center'>
          <img width={100} height={100} src={this.props.product.img} />
          <Card.Title className='text-center fs-4 text-uppercase'>{this.props.product.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted text-center">{this.props.product.color}</Card.Subtitle>
          <Card.Text className='text-danger fw-bold m-0'>${this.props.product.price}</Card.Text>
          <Button className='fw-bold me-3 text-uppercase' variant="outline-danger">Add to cart</Button>
        </Card>
      </Col>
    );
  }
}

ShopItem.propTypes = {
  product: PropTypes.object,
};

export default ShopItem;
