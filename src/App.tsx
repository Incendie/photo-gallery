import React from 'react';
import './App.scss';
import { HashRouter as Router, Route } from 'react-router-dom';

import { Header } from './Components/Header/header.component';
import { PhotoGallery } from './Components/PhotoGallery/photo-gallery.component';
import { Footer } from './Components/Footer/footer.component';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <PhotoGallery />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
