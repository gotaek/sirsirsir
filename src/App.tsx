import React from 'react';
import './sass/main.scss';
import Header from './components/header';
import SideContainer from './components/sideContainer';

function App() {
  return (
    <div>
      <Header />
      <div className="mainContainer">
        <SideContainer />
        <div>content</div>
        <SideContainer />
      </div>
    </div>
  );
}

export default App;
