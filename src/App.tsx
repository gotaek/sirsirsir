import React from 'react';
import './sass/main.scss';
import Header from './components/header';
import SideContainer from './components/sideContainer';
import ContentsContainer from './components/contentsContainer';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <div className="flex">
        <SideContainer />
        <ContentsContainer />
        <SideContainer />
      </div>
      <Footer />
    </div>
  );
}

export default App;
