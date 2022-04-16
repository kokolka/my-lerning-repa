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

const App = (props) => {
  debugger;
  return (
    <div className='app-wrapper'>
      <div className='app-wrapper__header'>
        <Header />
      </div>
      <div className='app-wrapper__nav'>
        <Navbar 
          ff={props.store.getState().navlink.dialogsData} />
      </div>
      <div className='app-wrapper__content'>
        <Routes>
          <Route path='/profile'
            element={<Profile
              store={props.store}
            />} />
          <Route path='/dialogs/*'
            element={<DialogsComponent
              store={props.store}
            />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/setting' element={<Setting />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
