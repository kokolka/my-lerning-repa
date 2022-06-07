import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import NewsContainer from './components/News/NewsContainer';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainerHook from './components/Profile/ProfileContainerHook';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';

import { initializeApp, setSizeApp } from './redux/app-reducer';
import { meUser } from './redux/auth-reducer';
import Preloader from './components/common/Preloader/Preloader';
import TestContainer from './components/Tets/TestContainer';
import { withSuspense } from './HOC/withSuspense';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const OnlyCatPage = React.lazy(() => import('./components/Infinity cat/OnlyCatPage'));

const DialogsSuspense = withSuspense(DialogsContainer);
const OnlyCatSuspense = withSuspense(OnlyCatPage);

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
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
            <Route path='/' element={<ProfileContainerHook />} />
            <Route path='/profile' element={<ProfileContainerHook />}>
              <Route path='/profile/:id' element={<ProfileContainerHook />} />
            </Route>
            <Route path='/dialogs/' element={<DialogsSuspense />} >
              <Route path='/dialogs/:id' element={<DialogsSuspense />} />
            </Route>
            <Route path='/news' element={<NewsContainer />} />
            <Route path='/music' element={<Music />} />
            <Route path='/setting' element={<Setting />} />
            <Route path='/users' element={<UsersContainer />} />
            <Route path='/login' element={<LoginContainer />} />
            <Route path='/test' element={<TestContainer />} />
            <Route path='/infinityCat' element={<OnlyCatSuspense />} />
            <Route path='*' element={<div>404 not found</div>} />
          </Routes>
        </div>
      </div>
    );
  }
}

const mapStareToProps = (state) => {
  return {
    initialized: state.initialize.initialized,
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStareToProps, {
  initializeApp,
  meUser,
  setSizeApp
})(App);
