import React from 'react';
import IconSwitch from './components/IconSwitch';
import ListView from './components/ListView';
import CardsView from './components/CardsView';
import Container from 'react-bootstrap/Container';
import products from './config/products';
import './assets/css/main.css';

class Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: 'view_module',
    };
  }

  switchView() {
    if (this.state.icon === 'view_list') {
      this.setState({ icon: 'view_module'});
    } else {
      this.setState({ icon: 'view_list' });
    }
  }

  render() {
    return (
      <Container>
        <IconSwitch 
          icon={this.state.icon} 
          onSwitch={() => { this.switchView() }} />
        {this.state.icon === 'view_list' ? (
          <ListView products={products} />
        ) : (
          <CardsView products={products} />
        )}
      </Container>
    );
  }
}

export default Store
