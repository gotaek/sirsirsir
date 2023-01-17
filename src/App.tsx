import React from 'react';
import './sass/main.scss';
import Header from './components/header';
import LeftSideContainer from './components/leftSideContainer';
import RightSideContainer from './components/rightSideContainer';
import ContentsContainer from './components/contentsContainer';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <div className="flex">
        <LeftSideContainer />
        <ContentsContainer />
        <RightSideContainer />
      </div>
      <Footer />
    </div>
  );
}

export default App;
