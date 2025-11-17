import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Project from './components/Projects/Project';
import Contact from './components/Contacts/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Project />
      </section>
      <section id="contacts">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
