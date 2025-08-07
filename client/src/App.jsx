// // src/App.jsx
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import Donations from './pages/Donations';
// import DonationsList from './pages/DonationsList'; // NEW
// import Shelters from './pages/AddShelters';
// import ShelterList from './pages/ShelterList';

// import Beggars from './pages/Beggars';
// import BeggarList from './pages/BeggarList';
// import AboutUs from './pages/AboutUs';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/donations" element={<Donations />} />
//         <Route path="donations/list" element={<DonationsList />} /> {/* NEW */}
//         <Route path="/shelters" element={<Shelters />} />
//          <Route path="/shelter-list" element={<ShelterList />} />
//         <Route path="/beggars" element={<Beggars />} />
//         <Route path="/beggar-list" element={<BeggarList />} />

//         <Route path="/about" element={<AboutUs />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;




// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import Donations from './pages/Donations';
// import AboutUs from './pages/AboutUs';
// import Shelters from './pages/Shelters';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/donations" element={<Donations />} />
//         <Route path="/about" element={<AboutUs />} />
//         <Route path="/shelters" element={<Shelters />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Donations from './pages/Donations';
import Beggars from './pages/Beggars';
import Shelters from './pages/Shelters';
import DonationsList from './pages/DonationsList';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/beggars" element={<Beggars />} />
        <Route path="/shelters" element={<Shelters />} />
        <Route path="/donations/list" element={<DonationsList />} />

      </Routes>
    </Router>
  );
}

export default App;
