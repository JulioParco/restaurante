import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import Panel from './components/Panel'; // Importamos el nuevo componente
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/panel" element={<Panel />} /> {/* Ruta hacia el panel */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
