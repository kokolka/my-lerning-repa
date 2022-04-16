import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import DialogsComponent from './components/Dialogs/DialogsComponent';

const App = () => {
  return (
    <div className='app-wrapper'>
      <div className='app-wrapper__header'>
        <Header />
      </div>
      <div className='app-wrapper__nav'>
        <Navbar />
      </div>
      <div className='app-wrapper__content'>
        <Routes>
          <Route path='/profile' element={<Profile/>} />
          <Route path='/dialogs/*' element={<DialogsComponent/>} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/setting' element={<Setting />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
