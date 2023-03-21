import React from 'react';
import './sass/main.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';
import PageSirs from './pages/pageSirs';
import PageIrs from './pages/pageIrs';
import PageIr from './pages/pageIr';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sirs" element={<PageSirs />} />
        <Route path="/irs" element={<PageIrs />} />
        <Route path="/ir" element={<PageIr />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
