import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './style.css';
import Tabs from './Tabs';

function Home() {
    return (
        <div className='Home'>
            <div className='banner-container'>
                <div className="banner" style={{ backgroundImage: `url(./assets/banner.jpg)` }}></div>
            </div>
            <Container className='profile-details'>
                <div className='left'>
                    <div className='profilePic'>
                        <img src="./assets/profile.jpg" alt="profile pic" />
                    </div>
                    <div className='details'>
                        <h2 className='heading'>Coleman Godfrey</h2>
                        <h4 className='sub-head'>Aletheia Christian Academy - Men's Varsity Basketball <span className='space'></span> Pensacola, FL</h4>
                        <div className="info">
                            <p className='para'><span>1,645</span> public highlight views</p>
                            <p className='para'><span>9</span> followers</p>
                            <p className='para'><span>1,715</span> following</p>
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <Button variant="info" className='info-btn btn'>
                        <img src="./assets/share-light.png" alt="share icon" className='icon share-icon' />
                        Share
                    </Button>
                </div>
            </Container>
            <Tabs />
        </div>
    )
}

export default Home;