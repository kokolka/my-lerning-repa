import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = () => {
  return (
    <div className='app-wrapper'>
      <div className='app-wrapper__header'>
        <HeaderContainer />
      </div>
      <div className='app-wrapper__nav'>
        <NavbarContainer />
      </div>
      <div className='app-wrapper__content'>
        <Routes>
          <Route path='/profile' element={<ProfileContainer />}>
            <Route path='/profile/:id' element={<ProfileContainer />} />
          </Route>
          <Route path='/dialogs/*' element={<DialogsContainer />} />
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
