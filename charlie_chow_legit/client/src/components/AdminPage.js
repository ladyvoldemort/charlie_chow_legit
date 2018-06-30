import React, { Component } from 'react';
import { Button, Container, Card, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Image } from 'semantic-ui-react';


class AdminPage extends Component {

  state = { items: [] }

  componentDidMount() {
    axios.get('/api/items')
      .then( res => this.setState({ items: res.data }) )
    }

    addItem = (name) => {
        const { items } = this.state;
        const id = Math.floor(( 1 + Math.random()) * 0x1000).toString()
        this.setState({ items: [...items, { id, name }] })};

    updateTodo = (id) => {
        let items = this.state.todos.map( t => {
            if (t.id === id)
              return { ...t, complete: !t.complete }
            return t;
          });
        
          this.setState({ items });
        }

    deleteTodo = (id) => {
        const { items } = this.state;
        this.setState({ items: items.filter( t => t.id !== id ) })
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
                <Card.Meta>{item.price}</Card.Meta>
                
                <Button onClick >Edit</Button>
                <Button onClick >Add</Button>
                
              </Card.Content>
              </Card>
            )
          }
        </Card.Group>
      </Container>



    );
  }
}

export default AdminPage;
