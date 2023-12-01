import { useState } from "react";
import React from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Heart from 'react-animated-heart';
import '../../Gallery.css';


function HornedBeast({ name, image_url, description }) {

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
        <Col xs={12} sm={6} md={4} lg={3} className="gallery-col">
          <Card style={{ width: "18rem", margin:"1em" }}>
            <Card.Img
              variant="top"
              src={image_url}
              alt={name}
              onClick={handleModalShow}
            />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <div className="heart-container">
                <Heart isClick={isClick} onClick={handleFavorite} />
                <Card.Text className="likes">Favorited: {likes}</Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={image_url} alt={name} style={{ width: '100%' }} />
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

export default HornedBeast;