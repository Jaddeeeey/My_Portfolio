import { BrowserRouter as Router } from 'react-router-dom'; //, Routes, Route
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <div className="pt-20"> {/* Offset for fixed navbar */}
//         <Routes>
//           {/* <Route path="/" element={<Home />} /> */}
//           <Route path="/about" element={<About />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

function App() {
  return (
    <Router>
      <Navbar />
      <About />
      <AboutMe />
      <Projects />
      <Contact />
    </Router>
  );
}
export default App;
