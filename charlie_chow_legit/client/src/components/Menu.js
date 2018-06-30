import React, { Component } from 'react';
import { Divider, List, Container, Card, Header, Button } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';
import axios from 'axios';


class Menu extends Component {

  state = { items: [], selected: [] }

  componentDidMount() {
    axios.get('/api/items')
      .then( res => this.setState({ items: res.data }) )
    }

    addItem = (item) => {
      this.setState({ selected: [...this.state.selected, item]})
    }

    displayCart = () => {
      let totalPrice=0
      let itemNames = []
      for(var i = 0; i < this.state.selected.length; i++) {
        itemNames = itemNames + this.state.selected[i].name
        totalPrice = totalPrice + this.state.selected[i].price
        console.log(totalPrice)
      }
      return (
        <Container>
          <Divider />
      <List>
      <h1> Shopping Cart: </h1>
      <h2>{itemNames}</h2>
      <h2>{totalPrice}</h2>
      <Button>Proceed to Checkout </Button>
      </List>
      <Divider />
    
      </Container>
     
    )
    }

  render() {
    
    return (

      <Container>
           <Header as='h1' textAlign='center'>
              Menu
           </Header>

        <Card.Group>
          { this.state.items.map( item =>
              <Card key={item.id}>
              <Card.Content>
                <Card.Header>{item.name}</Card.Header>
                <Card.Meta>${item.price}</Card.Meta>
            
                <Button onClick={() => this.addItem(item)}>Add to Cart</Button>
              </Card.Content>
              </Card>
            )
          }
              </Card.Group>
          { this.state.selected.length && this.displayCart() }
    
      </Container>



    );
  }
}

export default Menu;

