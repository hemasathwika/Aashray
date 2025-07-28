import React from 'react';

function AboutUs() {
  return (
    <div className="container py-5">
      <h2 className="mb-4">About Aashray 🏠</h2>
      
      <p>
        <strong>Aashray</strong> is a mission-driven platform dedicated to eliminating food wastage and supporting beggar rehabilitation. 
        We connect donors with volunteers to redistribute leftover food and provide care for homeless individuals.
      </p>

      <p>
        Our goal is to build a <strong>Hunger-Free and Beggar-Free India</strong> through community participation, shelter support, and access to medical and psychological help.
      </p>

      <hr className="my-4" />

      <h4>📞 Contact Us</h4>
      <p>
        <strong>Email:</strong> contact@aashray.org<br />
        <strong>Phone:</strong> +91 98765 43210<br />
        <strong>Location:</strong> Bangalore, India
      </p>

      <h4 className="mt-4">📢 Follow Us</h4>
      <p>
        Instagram: <a href="https://instagram.com/aashray" target="_blank" rel="noreferrer">@aashray</a><br />
        Twitter: <a href="https://twitter.com/aashray" target="_blank" rel="noreferrer">@aashray</a>
      </p>
    </div>
  );
}

export default AboutUs;
