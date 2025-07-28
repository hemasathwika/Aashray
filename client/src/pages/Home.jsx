import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div
        id="carouselExample"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/images/bg1.jpg" className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src="/images/bg2.jpg" className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src="/images/bg3.jpg" className="d-block w-100" alt="Slide 3" />
          </div>
        </div>
      </div>

      <div className="overlay-content text-white text-center">
        <h1 className="display-3 fw-bold">Welcome to Aashray</h1>
        <p className="lead">Your platform to reduce food wastage and support the homeless.</p>
      </div>
    </div>
  );
}

export default Home;
