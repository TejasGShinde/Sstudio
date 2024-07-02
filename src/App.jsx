// import React, { useState } from "react";
// import Navbar from "./Navbar";
// import About from "./About";
// import Portfolio from "./Portfolio";
// import Services from "./Services";
// import Contact from "./Contact";
// import Footer from "./Footer";
// import HeroSection from "./Hero";
// import PopupImage from "./PopupImage"; // Import the PopupImage component here

// function App() {
//   const [showMainContent, setShowMainContent] = useState(false);

//   // Function to handle "Get Started" button click
//   const handleGetStarted = () => {
//     setShowMainContent(true);
//   };

//   return (
//     // <>
//     //   {/* Conditionally render the PopupImage or the rest of the content based on showMainContent state */}
//     //   {showMainContent ? (
//     //     <>
//     //       {/* Render the rest of the components */}
//     //       <Navbar />
//     //       <HeroSection />
//     //       <About />
//     //       <Portfolio />
//     //       <Services />
//     //       <Contact />
//     //       <Footer />
//     //     </>
//     //   ) : (
//     //     <PopupImage handleGetStarted={handleGetStarted} />
//     //   )}
//     // </>
//     <>
//       <Navbar />
//       <HeroSection />
//       <About />
//       <Portfolio />
//       <Services />
//       <Contact />
//       <Footer />
//     </>
//   );
// }

// export default App;
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route ,Navigate} from "react-router-dom";

import Navbar from "./Navbar";
import About from "./About";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";
import Projects from "./Projects";
import ProjectDetails from "./ProjectDetails";
import AdminLogin from "./AdminLogin";
 

// Added a Home component for the root path
import Home from "./Home"; // Assuming you have a Home component
import AddProjectForm from "./AddProject";
import Team from "./Team";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  return (
    <Router>
      <Navbar />
       

      <Routes>
        <Route path="/" element={<Home />} /> {/* Route for the Home component */}
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} /> {/* Route for Portfolio */}
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        {/* <Route path="/addproject" element={<AddProjectForm />} /> */}
        {/* Define Routes for Project Pages */}
        <Route path="/AdminLogin" element={<AdminLogin setIsAuthenticated={setIsAuthenticated} />} />
        {isAuthenticated ? (
          <Route path="/addproject" element={<AddProjectForm />} />
        ) : (
          <Route path="/addproject" element={<Navigate to="/AdminLogin" replace />} />
        )}
         
        <Route path="/all-projects" element={<Projects />} />
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
      </Routes>
     
      <Footer />
    </Router>
  );
}

export default App;
