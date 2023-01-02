import { About } from './components/About';
import { Contact } from './components/Contact';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Qualification } from './components/Qualification';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Qualification />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
