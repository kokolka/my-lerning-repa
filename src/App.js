import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';

import {initializeApp} from './redux/app-reducer';
import {meUser} from './redux/auth-reducer';
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {

  componentDidMount() {
    this.props.meUser();//thunk
  }


  render() {
    if(!this.props.isAuth){
      return <Preloader />
    }
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
            <Route path='/login' element={<LoginContainer />} />
          </Routes>
        </div>
      </div>
    );
  }
}

const mapStareToProps = (state) => {
  return{
    initialized: state.initialize.initialized,
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStareToProps, {initializeApp, meUser})(App);
