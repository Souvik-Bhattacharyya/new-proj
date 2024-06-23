import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CardCont = () => {
  return (
    <>
      <Card className='card'>
        <Card.Header>
          <Card.Img variant="top" src="./assets/card-logo.jpg" className='card-logo' />
          <div className="card-head-cont">
            <Card.Title className='headTitle'>
              <b>Aletheia Christian Academy - Men's Varsity Basketball</b>
              <span className='action'> has a new highlight.</span>
              — with
              <span className='tags'> Rivers Gustine </span>
              and
              <span className='tags'> 5 others</span>
            </Card.Title>
            <Card.Text>June 7th at 2:12 AM</Card.Text>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Img className='thumbnail' variant="top" src="./assets/thumbnail.jpg" />
          <Card.Title>Aletheia Christian Academy vs West Florida Baptist (JV) Game Highlights - June 5, 2024</Card.Title>
          <Card.Title className='para'>65 Views</Card.Title>
          <Button variant="light btn share-btn">
            <Card.Img variant="top" src="./assets/share-dark.png" />
            Share
          </Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default CardCont