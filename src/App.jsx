import React from 'react';
import Header from './components/Header';
import ChooseUs from '../ChooseUs';
import Footer from './components/Footer';
// Importing components from your css folder as they appear in your file structure


function App() {
  return (
    <div className="font-poppins text-bingle-gray">
      <Header />
      <ChooseUs />
      <Footer/>
    </div>
  );
}

export default App;