import PropTypes from 'prop-types';
import React from 'react';
import ShopCard from './ShopCard';
import Row from 'react-bootstrap/Row';

class CardsView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row xs={1} md={3} className="g-2 mb-5">
        {this.props.products.map((elem, i) =>
          <ShopCard 
            key={i} 
            product={elem}
          />
        )}
      </Row>
    );
  }
}

CardsView.propTypes = {
  products: PropTypes.array,
};

export default CardsView;
