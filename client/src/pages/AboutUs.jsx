
// import React from 'react';
// import Layout from '../Layout';

// function AboutUs() {
//   return (
//     <Layout>
//       <div className="container py-5">
//         <h2 className="mb-4">About Aashray 🏠</h2>
//         <p>
//           <strong>Aashray</strong> is a mission-driven platform dedicated to eliminating food wastage and supporting beggar rehabilitation. 
//           We connect donors with volunteers to redistribute leftover food and provide care for homeless individuals.
//         </p>
//         <p>
//           Our goal is to build a <strong>Hunger-Free and Beggar-Free India</strong> through community participation, shelter support, and access to medical and psychological help.
//         </p>
//         <hr className="my-4" />
//         <h4>📞 Contact Us</h4>
//         <p>
//           <strong>Email:</strong> contact@aashray.org<br />
//           <strong>Phone:</strong> +91 98765 43210<br />
//           <strong>Location:</strong> Bangalore, India
//         </p>
//         <h4 className="mt-4">📢 Follow Us</h4>
//         <p>
//           Instagram: <a href="https://instagram.com/aashray" target="_blank" rel="noreferrer">@aashray</a><br />
//           Twitter: <a href="https://twitter.com/aashray" target="_blank" rel="noreferrer">@aashray</a>
//         </p>
//       </div>
//     </Layout>
//   );
// }

// export default AboutUs;


import React, { useEffect } from 'react';
import Layout from '../Layout';
import './AboutUs.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutUs() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Layout>
      <div className="aboutus-container">
        <section className="intro-section" data-aos="fade-up">
          <h2>About Aashray 🏠</h2>
          <p>
            <strong>Aashray</strong> is a mission-driven platform committed to reducing food wastage and supporting beggar rehabilitation. 
            We connect donors with volunteers to redistribute surplus food and provide medical, emotional, and shelter support to the homeless.
          </p>
          <p>
            Our mission is to create a <strong>Hunger-Free and Beggar-Free India</strong> through community involvement, shelter initiatives, and tech-driven food logistics.
          </p>
        </section>

        <section className="info-icons" data-aos="fade-up">
          <div className="icon-box">
            <i className="bi bi-people-fill"></i>
            <h4>Community Driven</h4>
            <p>We encourage local volunteers and citizens to take part in real change.</p>
          </div>
          <div className="icon-box">
            <i className="bi bi-box-seam"></i>
            <h4>Zero Food Wastage</h4>
            <p>Redistribution of leftover food to the needy before it’s wasted.</p>
          </div>
          <div className="icon-box">
            <i className="bi bi-hospital"></i>
            <h4>Health First</h4>
            <p>We support mental and physical healthcare for beggars and the homeless.</p>
          </div>
        </section>

        <section className="team-section" data-aos="fade-up">
          <h3>Meet Our Team 👥</h3>
          <div className="team-cards">
            <div className="team-card">
              <img src="/images/team1.jpg" alt="Team Member" />
              <h5>Hema Sathwika</h5>
              <p>Founder & Visionary</p>
            </div>
            <div className="team-card">
              <img src="/images/team2.jpg" alt="Team Member" />
              <h5>Pratyusha Ravilla</h5>
              <p>Operations Head</p>
            </div>
            <div className="team-card">
              <img src="/images/team3.jpg" alt="Team Member" />
              <h5>Neha J</h5>
              <p>Volunteer Coordinator</p>
            </div>
          </div>
        </section>

        <section className="contact-section" data-aos="fade-up">
          <h4>📞 Contact Us</h4>
          <p><strong>Email:</strong> contact@aashray.org</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Location:</strong> Bangalore, India</p>
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.8552789485064!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670d15cbb3f%3A0x4e0d80a56b70f5fd!2sBangalore!5e0!3m2!1sen!2sin!4v1693224793151" 
              width="100%" height="300" allowFullScreen="" loading="lazy" title="Aashray Map"></iframe>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default AboutUs;
