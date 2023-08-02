// Imports required
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
