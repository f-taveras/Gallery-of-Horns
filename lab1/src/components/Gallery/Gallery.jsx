import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Heart from "react-animated-heart";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';





function Gallery(props){

const [isClick,setClick] = useState(false);
const [likes,setLikes] = useState(0);

function handleFavorite(){
  if (!isClick){

  setLikes (likes +1);
}
setClick(!isClick)
}

  return (
    <Container fluid>
      <Row>
        <Col>
    <Card style={{ width: '18rem', margin: '.5em' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        
        <div className="App">
          <Heart isClick={isClick} onClick={handleFavorite}/>
        </div>
        <div>
          Favorite: {likes}
        </div>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
  );
  

}

export default Gallery;