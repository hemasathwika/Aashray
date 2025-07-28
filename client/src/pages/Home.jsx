import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

function Home() {
  return (
    <>
      {/* Top Navigation Bar */}
      <div className="nav-bar">
        <a href="/">Home</a>
        <a href="/donations">Donations</a>
        <a href="/shelters">Shelters</a>
        <a href="/beggars">Beggars</a>
        <a href="/about">About Us</a>
      </div>

      {/* Main Content */}
      <div className="home-container">
        <Carousel fade interval={3000} controls={false} indicators={false}>
          <Carousel.Item>
            <img className="d-block w-100 carousel-img" src="/images/bg1.jpg" alt="Slide 1" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 carousel-img" src="/images/bg2.jpg" alt="Slide 2" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 carousel-img" src="/images/bg3.jpg" alt="Slide 3" />
          </Carousel.Item>
        </Carousel>

        <div className="home-overlay">
          <h1>Welcome to Aashray</h1>
          <p>Your platform to reduce food wastage and support the homeless.</p>
        </div>
      </div>
    </>
  );
}

export default Home;
