import React from 'react';

import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

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
        {/* <Profile/> */}
        <Dialogs />
      </div>
    </div>
  );
}


export default App;
