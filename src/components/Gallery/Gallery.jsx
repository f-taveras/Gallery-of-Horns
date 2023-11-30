import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Heart from 'react-animated-heart';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../Gallery.css'; 

function Gallery(props) {
  const [isClick, setClick] = useState(false);
  const [likes, setLikes] = useState(0);

  function handleFavorite() {
    if (!isClick) {
      setLikes(likes + 1);
    }
    setClick(!isClick);
  }

  return (
    <Container>
      <Row>
        <Col className="gallery-col">
          <Card style={{ width: '100%', margin: '.5em' }}>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
              <Card.Title>{props.name}</Card.Title>
              <Card.Text>{props.description}</Card.Text>

              <div className="heart-container">
                <Heart isClick={isClick} onClick={handleFavorite} />
                <Card.Text className="likes">Favorited: {likes}</Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Gallery;
