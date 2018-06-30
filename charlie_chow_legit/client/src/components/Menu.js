import React, { Component } from 'react';
import { Container, Card, Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Image } from 'semantic-ui-react';


class Menu extends Component {

  state = { items: [] }

  componentDidMount() {
    axios.get('/api/items')
      .then( res => this.setState({ items: res.data }) )
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
            
                <Button>Add to Cart</Button>
              </Card.Content>
              </Card>
            )
          }
        </Card.Group>
      </Container>



    );
  }
}

export default Menu;

