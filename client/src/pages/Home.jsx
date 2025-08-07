
// import React from 'react';
// import './Home.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Carousel } from 'react-bootstrap';

// function Home() {
//   return (
//     <div className="page-container">
//       {/* Hero Carousel Section */}
//       <div className="home-container">
//         <Carousel fade interval={3000} controls={false} indicators={false}>
//           <Carousel.Item>
//             <img className="d-block w-100 carousel-img" src="/images/donate-food.jpg" alt="Slide 1" />
//           </Carousel.Item>
//           <Carousel.Item>
//             <img className="d-block w-100 carousel-img" src="/images/volunteer.jpg" alt="Slide 2" />
//           </Carousel.Item>
//           <Carousel.Item>
//             <img className="d-block w-100 carousel-img" src="/images/shelter.jpg" alt="Slide 3" />
//           </Carousel.Item>
//         </Carousel>
//         <div className="home-overlay">
//           <div className="overlay-content">
//             <h1>Welcome to Aashray</h1>
//             <p>Your platform to reduce food wastage and support the homeless.</p>
//           </div>
//         </div>
//       </div>

//       {/* Mission Statement */}
//       <section className="info-section">
//         <h2>Our Mission</h2>
//         <p>
//           Aashray aims to bridge the gap between surplus and scarcity by reducing food wastage and supporting homeless individuals through rehabilitation and shelter.
//         </p>
//       </section>

//       {/* Tiles Section */}
//       <section className="tiles-section">
//         <div className="tile">
//           <img src="/images/donate-food.jpg" alt="Donate Food" />
//           <h3>Donate Food</h3>
//           <p>Contribute your leftover or excess food to those in need through our easy-to-use platform.</p>
//         </div>
//         <div className="tile">
//           <img src="/images/volunteer.jpg" alt="Volunteer" />
//           <h3>Become a Volunteer</h3>
//           <p>Join our network to help us collect and distribute food to the homeless.</p>
//         </div>
//         <div className="tile">
//           <img src="/images/shelter.jpg" alt="Shelter Homes" />
//           <h3>Shelter Homes</h3>
//           <p>Find or register shelters that offer care and support to those in need.</p>
//         </div>
//         <div className="tile">
//           <img src="/images/support-beggars.jpg" alt="Support Beggars" />
//           <h3>Support Beggars</h3>
//           <p>Help identify and rehabilitate homeless individuals with proper care, documentation, and housing.</p>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Home;



import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

function Home() {
  return (
    <div className="page-container">
      <div className="carousel-wrapper">
        <Carousel fade interval={3000} controls={false} indicators={false}>
          <Carousel.Item>
            <img className="d-block w-100 carousel-img" src="/images/donate-food.jpg" alt="Slide 1" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 carousel-img" src="/images/volunteer.jpg" alt="Slide 2" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 carousel-img" src="/images/shelter.jpg" alt="Slide 3" />
          </Carousel.Item>
        </Carousel>
        <div className="carousel-overlay">
          <h1>Welcome to Aashray</h1>
          <p>Your platform to reduce food wastage and support the homeless.</p>
        </div>
      </div>

      <div className="info-section">
        <h2>Our Mission</h2>
        <p>
          Aashray bridges the gap between surplus and scarcity by reducing food waste and rehabilitating homeless individuals.
        </p>
      </div>

      <div className="tiles-section">
        <div className="tile">
          <img src="/images/donate-food.jpg" alt="Donate Food" />
          <h3>Donate Food</h3>
          <p>Contribute your leftover or excess food to those in need.</p>
        </div>
        <div className="tile">
          <img src="/images/volunteer.jpg" alt="Volunteer" />
          <h3>Become a Volunteer</h3>
          <p>Join us in collecting and distributing food to the needy.</p>
        </div>
        <div className="tile">
          <img src="/images/shelter.jpg" alt="Shelter Homes" />
          <h3>Shelter Homes</h3>
          <p>Find or register shelters that support the homeless.</p>
        </div>
        <div className="tile">
          <img src="/images/support-beggars.jpg" alt="Support Beggars" />
          <h3>Support Beggars</h3>
          <p>Help identify and rehabilitate the homeless population.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
