import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import CardCont from './CardCont';
import TeamHistory from './TeamHistory';

function Timeline() {
  return (
    <>
      <Container>
        <Row className='card-row'>
          <Col md={3}>
            <div className='person-details'>
              <p>Height & Weight: <span>5'4" 113ibs</span></p>
              <p>Class of: <span>2028</span></p>
              <div className="team-history">
                <h4>Team History</h4>
                <TeamHistory />
                <TeamHistory />
                <TeamHistory />
              </div>
            </div>
          </Col>
          <Col md={6}>
            < CardCont />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Timeline