import React from 'react';
import './sass/main.scss';
import Header from './components/header';
import SideContainer from './components/sideContainer';
import ContentsContainer from './components/contentsContainer';

function App() {
  return (
    <div>
      <Header />
      <div className="flex">
        <SideContainer />
        <ContentsContainer />
        <SideContainer />
      </div>
    </div>
  );
}

export default App;
