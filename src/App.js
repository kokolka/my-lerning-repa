import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = () => {
  return (
    <div className='app-wrapper'>
      <div className='app-wrapper__header'>
        <Header />
      </div>
      <div className='app-wrapper__nav'>
        <NavbarContainer />
      </div>
      <div className='app-wrapper__content'>
        <Routes>
          <Route path='/profile' element={<Profile/>} />
          <Route path='/dialogs/*' element={<DialogsContainer/>} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/setting' element={<Setting />} />
          <Route path='/users' element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
