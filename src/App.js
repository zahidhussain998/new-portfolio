import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Dis from "./components/Dis.js";
import Footer from "./components/Footer.js";
import Certificate from "./Certificate.js";
import Subscribe from "./Subscribe.js";
import Projects from "./Projects.js";



// Helper function to get the formatted date
// const getDate = () => {
//   const currentDate = new Date();
//   const year = currentDate.getFullYear();
//   const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Adding 1 because months are zero-indexed
//   const day = String(currentDate.getDate()).padStart(2, '0');
//   return `${year}-${month}-${day}`;
// };

function App() {
  return (
    <main className="flex flex-col items-center">
      <div className="max-w-screen-xl self-stretch m-auto w-full">
        <Router>
          <Header />
          <div className="px-6 sm:px-12 py-5">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/certificate" element={<Certificate />} />
              <Route path="/projects" element={ <Projects />} />
              <Route path="/subscribe" element={<Subscribe className="max-w-md" />} />
            </Routes>
          </div>
          <Routes>
            <Route path="/" element={<Dis />} />
          </Routes>

          <Footer />
        </Router>
      </div>
    </main>
  );
}

export default App;
