import PropTypes from 'prop-types';
import React from 'react';
import Button from 'react-bootstrap/Button';

class Toolbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div> 
        {this.props.filters.map((elem, i) =>
          <Button 
            key={i} 
            className={`me-3 mt-3 ${(elem === this.props.selected) ? 'active' : ''}`}
            onClick={this.props.onSelectFilter}
          >
            {elem}
          </Button>
        )}
      </div>
    );
  }
}

Toolbar.propTypes = {
  filters: PropTypes.array,
  selected: PropTypes.string,
  onSelectFilter: PropTypes.func,
};

export default Toolbar;
