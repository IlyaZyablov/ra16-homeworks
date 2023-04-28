import PropTypes from 'prop-types';
import React from 'react';
import ShopItem from './ShopItem';

class ListView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="g-2 mb-5">
        {this.props.products.map((elem, i) =>
          <ShopItem 
            key={i} 
            product={elem}
          />
        )}
      </div>
    );
  }
}

ListView.propTypes = {
  products: PropTypes.array,
};

export default ListView;
