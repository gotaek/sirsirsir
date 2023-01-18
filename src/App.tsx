import React from 'react';
import './sass/main.scss';
import Header from './components/header';
import LeftSideContainer from './components/leftSideContainer';
import RightSideContainer from './components/rightSideContainer';
import ContentsContainer from './components/contentsContainer';

function App() {
  return (
    <div className="mainPage">
      <Header />
      <div className="flex">
        <LeftSideContainer />
        <ContentsContainer />
        <RightSideContainer />
      </div>
    </div>
  );
}

export default App;
