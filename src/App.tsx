import React from 'react';
import './App.scss';

import { Header } from './Components/Header/header.component';
import { PhotoGallery } from './Components/PhotoGallery/photo-gallery.component';
import { Footer } from './Components/Footer/footer.component';

const App = () => {
  return (
    <div className="App">
      <Header />
      <PhotoGallery />
      <Footer />
    </div>
  );
};

export default App;
