// // src/Layout.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';

// function Layout({ children }) {
//   return (
//     <div>
//       {/* Fixed Navbar */}
//       <nav className="navbar navbar-expand-lg navbar-dark bg-blue fixed-top">
//         <div className="container-fluid">
//           <Link className="navbar-brand" to="/"></Link>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
//             <span className="navbar-toggler-icon"></span>
//           </button>
         
//         </div>
//       </nav>

//       {/* Page Content */}
//       <main style={{ paddingTop: '90px' }} className="container">
//         {children}
//       </main>
//     </div>
//   );
// }

// export default Layout;



import React from 'react';
import Navbar from './components/Navbar';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="page-content" style={{ paddingTop: '80px' }}>
        {children}
      </div>
    </>
  );
}

export default Layout;
