import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Heart from 'react-animated-heart';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '../../Gallery.css';

function Gallery(props) {
  const [isClick, setClick] = useState(false);
  const [likes, setLikes] = useState(0);
  const [showModal, setShowModal] = useState(false);

  function handleFavorite() {
    if (!isClick) {
      setLikes(likes + 1);
    }
    setClick(!isClick);
  }

  const handleModalShow = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  return (
    <Container>
      <Row>
        <Col className="gallery-col">
          <Card style={{ width: '100%', margin: '.5em' }}>
            <Card.Img variant="top" src={props.img} onClick={handleModalShow} />
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

      {/* Modal for Image Pop-out */}
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={props.img} alt={props.name} style={{ width: '100%' }} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Gallery;
