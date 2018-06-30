import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';

class About extends Component {
  render() {
    return (
      <div>
        <Container>
      <Header as='h1' textAlign='center'> About us   </Header>
      <p>
      Charlie Chow's Dragon Grill has always been known for it's fine Asian cuisine served in an attractive, contemporary setting in the heart of downtown Salt Lake City. 
      Be sure to sample our fresh, homemade Dim Sum (appertizer) in addition to the delicious entrees made to order and elegantly served. 
      And don't forget to try the Dragon Gill, a tasty new way to	create your own meal and sample a varitey of Asian flavors. 
      Because all of our entrees are made fresh to order, we use no MSG in our cooking. 
      Plus, our traditon of friendly service and great food have made Charlie Chow's Dragon Grill a long time Salt Lake favorite.
      </p>

    <p>
    Charlie Chow, a Chinese-American immigrant, was born in China in the year 1874. 
    The Chinese Horoscope calls this year, "The Year of the Loyal Dog," and all who are born under this sign are said to be hard working, faithful, and those who keep the best secrets! 
    Charile Chow was no exception! Eager to seek his fortune, he came to the United States in 1897 where he established some of the very first Chinese restaurants in Idaho and Wyoming. 
    After years of success, Charlie Chow retired in Salt Lake City, Utah. There he passed along to his relatives his trademark characterisics of hard work, loyalty, and the best of all-his well guarded secret receipes for delicious Asian cuisine!
    In 1985, his children and grandchildren created the restaurant that carries his honorable name at the Triad Center in downtown Salt Lake City, and Charlie Chow's has been a hit ever since! 
    After three years in the Triad Center, the restaurant moved to Trolley Square, where it remained until 1999, and then moved to it's current location, 255 East 400 South, across from Salt Lake City's brand new city library project.
    </p>
  
    </Container>
    </div>
    );
  }
}


export default About;
