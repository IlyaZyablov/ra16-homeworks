import PropTypes from 'prop-types';
import React from 'react';

class IconSwitch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='d-flex justify-content-end' onClick={this.props.onSwitch}>
        <span className="material-icons text-right mt-3 mt-2 display-3">
          {this.props.icon}
        </span>
      </div>
    );
  }
}

IconSwitch.propTypes = {
  icon: PropTypes.string,
  onSwitch: PropTypes.func,
};

export default IconSwitch;
