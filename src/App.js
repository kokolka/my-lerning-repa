import React from 'react';
import { BrowserRouter  as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';

const App = (props) => {
  return (
    <Router>
      <div className='app-wrapper'>
        <div className='app-wrapper__header'>
          <Header />
        </div>
        <div className='app-wrapper__nav'>
          <Navbar />
        </div>
        <div className='app-wrapper__content'>
          <Routes>
            <Route path='/profile' element={<Profile pd={props.pd}/>} />
            <Route path='/dialogs/*' element={<Dialogs dd={props.dd} md={props.md}/>} />
            <Route path='/news' element={<News/>} />
            <Route path='/music' element={<Music />} />
            <Route path='/setting' element={<Setting />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
