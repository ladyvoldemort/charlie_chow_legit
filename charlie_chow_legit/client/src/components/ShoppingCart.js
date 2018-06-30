import React from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';



class ShoppingCart extends React.Component {
  state = { items: [{ name: 'Food', price: 5}, { name: 'More Food', price: 10}] }
  
  totalCost = () => {
    return this.state.items.reduce((total, item) => {
      return total + item.price
    }, 0)
  }

  componentDidMount() {
    // axios.get('/api/shopping_cart')
    //   .then(res => {
    //     this.setState({ items: res.data })
    //     this.props.dispatch({ type: 'HEADERS', headers: res.headers })
    //   });
  }

  render() {
    let { items } = this.state;
    return (
      <div>
      {
        items.map(item =>
          <p>{item.name} {item.price}</p>
        )
        }
        <p> Total: {this.totalCost()} </p>
      </div>
    )
  }
}

export default connect()(ShoppingCart)