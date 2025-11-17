import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Project from './components/Projects/Project';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Experience />
      <Skills />
      <Project />
    </div>
  );
}

export default App;
